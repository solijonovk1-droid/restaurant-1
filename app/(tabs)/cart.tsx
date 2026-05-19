import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';
import { Minus, Plus, Trash2, ShoppingBag, ChevronRight } from 'lucide-react-native';
import { useStore } from '../../store/useStore';
import Animated, { FadeInRight, FadeOutLeft, FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function CartScreen() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('uz-UZ').format(price) + " so'm";

  const handleCheckout = () => {
    Alert.alert(
      "To'lov usuli",
      "Qaysi to'lov turi orqali to'lamoqchisiz?",
      [
        { text: "Bekor qilish", style: "cancel" },
        { text: "Payme", onPress: () => processPayment('Payme') },
        { text: "Click", onPress: () => processPayment('Click') },
        { text: "Naqd pul", onPress: () => processPayment('Naqd pul') }
      ]
    );
  };

  const processPayment = (method: string) => {
    Alert.alert(
      "Muvaffaqiyatli",
      `Sizning buyurtmangiz ${method} orqali qabul qilindi! Tez orada tayyor bo'ladi.`,
      [{ text: "Tushunarli", onPress: () => clearCart() }]
    );
  };

  if (cart.length === 0) {
    return (
      <View style={styles.safeArea}>
        <LinearGradient colors={['#0f172a', '#0a0b14']} style={styles.container}>
          <SafeAreaView style={styles.emptyContent}>
            <Animated.View entering={FadeInDown.duration(800)} style={styles.emptyContainer}>
              <View style={styles.emptyIconContainer}>
                <ShoppingBag size={48} color="#f59e0b" />
              </View>
              <Text style={styles.emptyTitle}>Savat bo'sh</Text>
              <Text style={styles.emptySubtitle}>Hali hech narsa tanlamadingiz. Mazali taomlar kashf etish vaqti keldi!</Text>
            </Animated.View>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.safeArea}>
      <LinearGradient colors={['#0f172a', '#0a0b14']} style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Savat</Text>

            <FlatList
              data={cart}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Animated.View 
                  entering={FadeInRight.delay(index * 100)}
                  exiting={FadeOutLeft}
                  style={styles.cartItem}
                >
                  <Image source={{ uri: item.image }} style={styles.itemImage} />
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{formatPrice(item.price)}</Text>
                    
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity 
                        onPress={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        style={styles.qtyBtn}
                      >
                        <Minus size={16} color="#f8fafc" />
                      </TouchableOpacity>
                      <Text style={styles.qtyText}>{item.quantity}</Text>
                      <TouchableOpacity 
                        onPress={() => updateQuantity(item.id, item.quantity + 1)}
                        style={styles.qtyBtn}
                      >
                        <Plus size={16} color="#f8fafc" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity 
                    onPress={() => removeFromCart(item.id)}
                    style={styles.removeBtn}
                  >
                    <Trash2 size={20} color="#ef4444" />
                  </TouchableOpacity>
                </Animated.View>
              )}
              contentContainerStyle={styles.listContent}
            />

            <View style={styles.footer}>
              <View style={styles.totalRow}>
                <View>
                  <Text style={styles.totalLabel}>Umumiy summa</Text>
                  <Text style={styles.totalValue}>{formatPrice(total)}</Text>
                </View>
                <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout} activeOpacity={0.8}>
                  <Text style={styles.checkoutText}>To'lov</Text>
                  <ChevronRight size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
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
  innerContainer: {
    flex: 1,
    paddingHorizontal: 25,
  },
  title: {
    color: '#f8fafc',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 25,
  },
  listContent: {
    paddingBottom: 150,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 22,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  itemImage: {
    width: 85,
    height: 85,
    borderRadius: 18,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#f59e0b',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 15,
  },
  qtyBtn: {
    backgroundColor: '#334155',
    padding: 6,
    borderRadius: 10,
  },
  qtyText: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '800',
  },
  removeBtn: {
    padding: 10,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderRadius: 12,
  },
  footer: {
    position: 'absolute',
    bottom: 95,
    left: 20,
    right: 20,
    backgroundColor: '#1e293b',
    borderRadius: 25,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    color: '#94a3b8',
    fontSize: 14,
    marginBottom: 2,
  },
  totalValue: {
    color: '#f8fafc',
    fontSize: 22,
    fontWeight: 'bold',
  },
  checkoutBtn: {
    backgroundColor: '#f59e0b',
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  checkoutText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContent: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIconContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#1e293b',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  emptyTitle: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  emptySubtitle: {
    color: '#64748b',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});
