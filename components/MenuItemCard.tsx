import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Plus, Minus, Heart } from 'lucide-react-native';
import { useStore } from '../store/useStore';
import { LinearGradient } from 'expo-linear-gradient';

interface MenuItemCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  restaurantId: string;
}

export default function MenuItemCard({ id, name, description, price, image, restaurantId }: MenuItemCardProps) {
  const { cart, addToCart, updateQuantity, favorites, toggleFavorite } = useStore();
  
  const cartItem = cart.find(item => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const isFavorite = favorites.includes(id);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('uz-UZ').format(price) + " so'm";

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity onPress={() => toggleFavorite(id)} style={styles.favBtn}>
            <Heart size={18} color={isFavorite ? '#ef4444' : '#64748b'} fill={isFavorite ? '#ef4444' : 'transparent'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
        <Text style={styles.price}>{formatPrice(price)}</Text>
      </View>
      
      <View style={styles.actionContainer}>
        {quantity > 0 ? (
          <View style={styles.quantityControl}>
            <TouchableOpacity 
              onPress={() => updateQuantity(id, quantity - 1)}
              style={styles.qtyBtn}
              activeOpacity={0.7}
            >
              <Minus size={16} color="#fff" strokeWidth={3} />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity 
              onPress={() => updateQuantity(id, quantity + 1)}
              style={styles.qtyBtn}
              activeOpacity={0.7}
            >
              <Plus size={16} color="#fff" strokeWidth={3} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity 
            onPress={() => addToCart({ id, name, price, quantity: 1, restaurantId, image })}
            activeOpacity={0.8}
            style={styles.addBtnContainer}
          >
            <LinearGradient
              colors={['#6366f1', '#4f46e5']}
              style={styles.addBtn}
            >
              <Plus size={20} color="#fff" strokeWidth={3} />
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 24,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 18,
  },
  content: {
    flex: 1,
    marginLeft: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    flex: 1,
    color: '#f8fafc',
    fontSize: 17,
    fontFamily: 'Outfit-Bold',
  },
  favBtn: {
    padding: 4,
    marginLeft: 8,
  },
  description: {
    color: '#94a3b8',
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    marginTop: 4,
    marginBottom: 8,
    lineHeight: 18,
  },
  price: {
    color: '#6366f1',
    fontSize: 15,
    fontFamily: 'Outfit-Bold',
  },
  actionContainer: {
    marginLeft: 10,
  },
  addBtnContainer: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  addBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#334155',
    borderRadius: 14,
    padding: 6,
    gap: 12,
  },
  qtyBtn: {
    padding: 4,
  },
  qtyText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Outfit-Bold',
    minWidth: 20,
    textAlign: 'center',
  },
});
