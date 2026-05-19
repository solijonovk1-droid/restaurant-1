import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppMap from '../../components/AppMap';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <AppMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  }
});
