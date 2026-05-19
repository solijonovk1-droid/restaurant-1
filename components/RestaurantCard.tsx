import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Star, MapPin, ChevronRight, Heart } from 'lucide-react-native';
import { Link } from 'expo-router';
import { useStore } from '../store/useStore';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

interface RestaurantCardProps {
  id: string;
  name: string;
  category: string;
  rating: number;
  image: string;
  address: string;
  priceRange: string;
  index: number;
}

export default function RestaurantCard({ id, name, category, rating, image, address, priceRange, index }: RestaurantCardProps) {
  const { favorites, toggleFavorite } = useStore();
  const isFavorite = favorites.includes(id);

  return (
    <Animated.View 
      entering={FadeInDown.delay(index * 100).duration(600)}
      style={styles.container}
    >
      <Link href={`/restaurant/${id}`} asChild>
        <TouchableOpacity activeOpacity={0.95} style={styles.touchable}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: image }} style={styles.image} />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.6)']}
              style={styles.imageOverlay}
            />
            <View style={styles.ratingBadge}>
              <Star size={12} color="#000" fill="#000" />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <TouchableOpacity 
              style={styles.favoriteBtn} 
              onPress={() => toggleFavorite(id)}
              activeOpacity={0.8}
            >
              <Heart size={20} color={isFavorite ? '#ef4444' : '#fff'} fill={isFavorite ? '#ef4444' : 'transparent'} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.name}>{name}</Text>
              <ChevronRight size={18} color="#6366f1" />
            </View>
            
            <Text style={styles.category}>{category} • {priceRange}</Text>
            
            <View style={styles.footer}>
              <View style={styles.addressContainer}>
                <MapPin size={12} color="#6366f1" />
                <Text style={styles.addressText} numberOfLines={1}>{address}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e293b',
    borderRadius: 28,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  touchable: {
    flex: 1,
  },
  imageWrapper: {
    position: 'relative',
    height: 190,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  ratingBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 4,
  },
  ratingText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderRadius: 20,
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  name: {
    color: '#f8fafc',
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
  },
  category: {
    color: '#94a3b8',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.04)',
    paddingTop: 12,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  addressText: {
    color: '#64748b',
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    flex: 1,
  },
});
