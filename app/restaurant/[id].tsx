import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions, Alert, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, Star, Clock, MapPin, Phone, Calendar, Heart } from 'lucide-react-native';
import { restaurants } from '../../data/restaurants';
import { menuItems } from '../../data/menus';
import MenuItemCard from '../../components/MenuItemCard';
import Animated, { FadeIn, FadeInDown, SlideInBottom } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Menyu');
  const [isFavorite, setIsFavorite] = useState(false);

  const restaurant = restaurants.find(r => r.id === id);
  const items = menuItems.filter(item => item.restaurantId === id);

  if (!restaurant) return null;

  const handleBooking = () => {
    Alert.alert(
      "Band qilish", 
      "Stol muvaffaqiyatli band qilindi! Tasdiqlash uchun xabar yuboramiz.",
      [{ text: "Yaxshi" }]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[2]}>
        {/* Banner Image */}
        <View style={styles.bannerContainer}>
          <Image source={{ uri: restaurant.image }} style={styles.bannerImage} />
          <LinearGradient
            colors={['rgba(10, 11, 20, 0.4)', 'transparent', 'rgba(10, 11, 20, 0.8)']}
            style={StyleSheet.absoluteFill}
          />
          <SafeAreaView style={styles.headerBtns}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <ChevronLeft size={24} color="#f8fafc" />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setIsFavorite(!isFavorite)} 
              style={[styles.backBtn, isFavorite && { backgroundColor: 'rgba(239, 68, 68, 0.2)' }]}
            >
              <Heart size={24} color={isFavorite ? "#ef4444" : "#f8fafc"} fill={isFavorite ? "#ef4444" : "transparent"} />
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        {/* Content Header */}
        <View style={styles.contentHero}>
          <Animated.View entering={FadeIn.duration(800)}>
            <View style={styles.titleRow}>
              <Text style={styles.name}>{restaurant.name}</Text>
              <View style={styles.ratingBox}>
                <Star size={16} color="#f59e0b" fill="#f59e0b" />
                <Text style={styles.ratingText}>{restaurant.rating}</Text>
              </View>
            </View>

            <Text style={styles.category}>{restaurant.category} • {restaurant.priceRange} • O'zbekiston</Text>

            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Clock size={16} color="#f59e0b" />
                <Text style={styles.infoText}>{restaurant.openHours}</Text>
              </View>
              <View style={styles.infoItem}>
                <Phone size={16} color="#f59e0b" />
                <Text style={styles.infoText}>{restaurant.phone}</Text>
              </View>
            </View>

            <View style={styles.addressBox}>
              <View style={styles.addressIcon}>
                <MapPin size={16} color="#64748b" />
              </View>
              <Text style={styles.addressText}>{restaurant.address}</Text>
            </View>

            <Text style={styles.description}>{restaurant.description}</Text>
          </Animated.View>
        </View>

        {/* Sticky Tabs */}
        <View style={styles.stickyTabWrapper}>
          <View style={styles.tabContainer}>
            {['Menyu', 'Sharhlar', 'Galereya'].map(tab => (
              <TouchableOpacity 
                key={tab} 
                onPress={() => setActiveTab(tab)}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuWrapper}>
          {activeTab === 'Menyu' ? (
            <View style={styles.menuContainer}>
              {items.map((item, index) => (
                <Animated.View key={item.id} entering={FadeInDown.delay(index * 100)}>
                  <MenuItemCard {...item} />
                </Animated.View>
              ))}
            </View>
          ) : (
            <View style={styles.placeholderTab}>
              <Text style={styles.placeholderText}>Yaqinda qo'shiladi...</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Booking Action */}
      <Animated.View entering={SlideInBottom.delay(400)} style={styles.actionFooter}>
        <LinearGradient
          colors={['rgba(10, 11, 20, 0)', 'rgba(10, 11, 20, 0.95)', '#0a0b14']}
          style={styles.footerGradient}
        >
          <TouchableOpacity style={styles.bookingBtn} onPress={handleBooking} activeOpacity={0.8}>
            <LinearGradient
              colors={['#f59e0b', '#d97706']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.btnGradient}
            >
              <Calendar size={22} color="#000" />
              <Text style={styles.bookingBtnText}>Stol band qilish</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b14',
  },
  bannerContainer: {
    height: 350,
    width: '100%',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  headerBtns: {
    position: 'absolute',
    top: 10,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backBtn: {
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    padding: 12,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  contentHero: {
    backgroundColor: '#0a0b14',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -35,
    padding: 25,
    paddingBottom: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    color: '#f8fafc',
    fontSize: 28,
    fontWeight: 'bold',
    flex: 1,
    letterSpacing: -0.5,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.2)',
  },
  ratingText: {
    color: '#f59e0b',
    fontWeight: '800',
    fontSize: 15,
  },
  category: {
    color: '#94a3b8',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#1e293b',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  infoText: {
    color: '#f8fafc',
    fontSize: 14,
    fontWeight: '600',
  },
  addressBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  addressIcon: {
    backgroundColor: '#1e293b',
    padding: 8,
    borderRadius: 10,
  },
  addressText: {
    color: '#94a3b8',
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  description: {
    color: '#64748b',
    lineHeight: 24,
    fontSize: 15,
    marginBottom: 10,
  },
  stickyTabWrapper: {
    backgroundColor: '#0a0b14',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 18,
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 14,
  },
  activeTab: {
    backgroundColor: '#334155',
  },
  tabText: {
    color: '#94a3b8',
    fontWeight: '600',
    fontSize: 14,
  },
  activeTabText: {
    color: '#f8fafc',
  },
  menuWrapper: {
    paddingHorizontal: 25,
    paddingBottom: 150,
  },
  menuContainer: {
    gap: 5,
  },
  placeholderTab: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#475569',
    fontSize: 16,
  },
  actionFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  footerGradient: {
    padding: 25,
    paddingBottom: 40,
  },
  bookingBtn: {
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#f59e0b',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  btnGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    gap: 12,
  },
  bookingBtnText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
  },
});
