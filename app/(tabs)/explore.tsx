import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Search, Map, Filter } from 'lucide-react-native';
import { menuItems } from '../../data/menus';
import MenuItemCard from '../../components/MenuItemCard';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const MENU_CATEGORIES = ['Barchasi', 'Asosiy taom', 'Salatlar', 'Pishiriqlar', 'Ichimliklar', 'Desertlar'];

export default function MenuExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');

  const filtered = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Barchasi' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.safeArea}>
      <LinearGradient colors={['#0f172a', '#0a0b14']} style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Menyu</Text>
              <TouchableOpacity style={styles.filterBtn}>
                <Filter size={20} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.searchSection}>
              <View style={styles.searchBar}>
                <Search size={20} color="#94a3b8" />
                <TextInput
                  style={styles.input}
                  placeholder="Sevimli taomingizni qidiring..."
                  placeholderTextColor="#64748b"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
            </View>

            <View style={styles.categoriesSection}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.catList}>
                {MENU_CATEGORIES.map((cat) => (
                  <TouchableOpacity 
                    key={cat} 
                    onPress={() => setSelectedCategory(cat)}
                    style={[styles.catCard, selectedCategory === cat && styles.catCardActive]}
                  >
                    <Text style={[styles.catText, selectedCategory === cat && styles.catTextActive]}>{cat}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <FlatList
              data={filtered}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Animated.View entering={FadeInDown.delay(index * 50)}>
                  <MenuItemCard {...item} />
                </Animated.View>
              )}
              contentContainerStyle={styles.listContent}
              ListEmptyComponent={() => (
                <View style={styles.empty}>
                  <Text style={styles.emptyText}>Hech qanday taom topilmadi 😕</Text>
                </View>
              )}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0b14',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  filterBtn: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    width: 45,
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  searchSection: {
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    gap: 12,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
  },
  categoriesSection: {
    marginBottom: 20,
  },
  catList: {
    gap: 10,
  },
  catCard: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  catCardActive: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  catText: {
    color: '#94a3b8',
    fontWeight: '600',
    fontSize: 14,
  },
  catTextActive: {
    color: '#fff',
  },
  listContent: {
    paddingBottom: 100,
  },
  empty: {
    marginTop: 50,
    alignItems: 'center',
  },
  emptyText: {
    color: '#64748b',
    fontSize: 16,
  },
});
