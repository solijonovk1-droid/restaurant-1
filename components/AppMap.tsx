import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';
import { restaurants } from '../data/restaurants';
import { useRouter } from 'expo-router';

export default function AppMap() {
  const router = useRouter();
  
  const initialRegion = {
    latitude: 41.2995, // Tashkent
    longitude: 69.2401,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <MapView style={styles.map} initialRegion={initialRegion}>
      {restaurants.map(res => {
        const simLat = initialRegion.latitude + (Math.random() - 0.5) * 0.05;
        const simLng = initialRegion.longitude + (Math.random() - 0.5) * 0.05;

        return (
          <Marker
            key={res.id}
            coordinate={{ latitude: simLat, longitude: simLng }}
            title={res.name}
            description={res.category}
          >
            <Callout onPress={() => router.push(`/restaurant/${res.id}`)}>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{res.name}</Text>
                <Text style={styles.calloutDesc}>{res.category}</Text>
              </View>
            </Callout>
          </Marker>
        );
      })}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  callout: {
    padding: 10,
    width: 150,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  calloutDesc: {
    fontSize: 12,
    color: '#64748b',
  }
});
