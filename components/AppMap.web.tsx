import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppMap() {
  return (
    <View style={styles.webFallback}>
      <Text style={styles.webText}>Xarita xizmati faqat iOS va Android qurilmalarda ishlaydi (Web brauzerda emas).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  webFallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0f172a',
  },
  webText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
});
