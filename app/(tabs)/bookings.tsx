import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Dimensions, Modal, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Calendar, ChevronRight, Moon, Sun, CreditCard, ChevronLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { useStore } from '../../store/useStore';

const { width } = Dimensions.get('window');

const TABLES = [
  { id: '1', name: 'Deraza yonida 1', status: 'available', capacity: 2 },
  { id: '2', name: 'Markaziy 2', status: 'booked', capacity: 4 },
  { id: '3', name: 'VIP Hudud', status: 'available', capacity: 6 },
  { id: '4', name: 'Hovli 1', status: 'available', capacity: 4 },
  { id: '5', name: 'Deraza yonida 2', status: 'available', capacity: 2 },
  { id: '6', name: 'Markaziy 3', status: 'available', capacity: 8 },
];

export default function EnhancedBookingsScreen() {
  const router = useRouter();
  const { theme, toggleTheme, user, bookings, addBooking } = useStore();
  const [showTablePicker, setShowTablePicker] = useState(false);
  const [selectedTable, setSelectedTable] = useState<any>(null);

  const colors = theme === 'dark' ? {
    bg: '#0a0b14',
    card: '#1e293b',
    text: '#f8fafc',
    subtext: '#94a3b8',
    border: 'rgba(255, 255, 255, 0.05)',
  } : {
    bg: '#f8fafc',
    card: '#ffffff',
    text: '#0f172a',
    subtext: '#64748b',
    border: 'rgba(0, 0, 0, 0.05)',
  };

  const handleBookTable = (id: string, name: string) => {
    if (!user) {
      Alert.alert("Xatolik", "Stol band qilish uchun akkauntingizga kiring.", [{ text: "Kirish", onPress: () => router.push('/login') }]);
      return;
    }
    
    setSelectedTable({ id, name });
    Alert.alert(
      "Band qilish",
      `${name} muvaffaqiyatli tanlandi. To'lovni amalga oshirasizmi?`,
      [
        { text: "Keyinroq", onPress: () => {
             addBooking({
               restaurantId: '1',
               restaurantName: 'Asosiy Restoran',
               tableId: id,
               tableName: name,
               date: new Date().toISOString()
             });
             setShowTablePicker(false);
          } 
        },
        { text: "To'lov qilish", onPress: () => {
             addBooking({
               restaurantId: '1',
               restaurantName: 'Asosiy Restoran',
               tableId: id,
               tableName: name,
               date: new Date().toISOString()
             });
             setShowTablePicker(false);
             Alert.alert("To'lov", "Payme tizimiga yo'naltirilmoqda...");
          } 
        }
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <LinearGradient 
        colors={theme === 'dark' ? ['#0f172a', '#0a0b14'] : ['#f1f5f9', '#f8fafc']} 
        style={styles.container}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            
            {/* Header with Theme Toggle */}
            <View style={styles.header}>
              <Text style={[styles.title, { color: colors.text }]}>Sozlamalar & Bandlov</Text>
              <TouchableOpacity onPress={toggleTheme} style={[styles.themeBtn, { backgroundColor: colors.card, borderColor: colors.border }]}>
                {theme === 'dark' ? <Sun size={20} color="#f59e0b" /> : <Moon size={20} color="#6366f1" />}
              </TouchableOpacity>
            </View>

            {/* 4. Dark/Light Mode Section */}
            <Animated.View entering={FadeInUp} style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
               <View style={styles.cardHeader}>
                  <Text style={[styles.cardTitle, { color: colors.text }]}>Mavzu (Theme)</Text>
                  <Text style={[styles.cardBadge, { backgroundColor: theme === 'dark' ? 'rgba(245,158,11,0.1)' : 'rgba(99,102,241,0.1)', color: theme === 'dark' ? '#f59e0b' : '#6366f1' }]}>{theme === 'dark' ? "Qorong'u" : "Yorug'"}</Text>
               </View>
               <Text style={[styles.cardDesc, { color: colors.subtext }]}>Ilova dizaynini o'zingizga qulay ko'rinishga keltiring.</Text>
            </Animated.View>

            {/* 2. Interactive Table Selection */}
            <Animated.View entering={FadeInUp.delay(100)} style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
               <View style={styles.cardHeader}>
                  <Text style={[styles.cardTitle, { color: colors.text }]}>Stol tanlash</Text>
                  <TouchableOpacity onPress={() => setShowTablePicker(true)}>
                    <Text style={styles.linkText}>Xaritani ko'rish</Text>
                  </TouchableOpacity>
               </View>
               <Text style={[styles.cardDesc, { color: colors.subtext }]}>{selectedTable ? `Tanlangan: ${selectedTable.name}` : "O'zingizga ma'qul stolni xaritadan belgilang."}</Text>
               
               <View style={styles.miniMap}>
                  {TABLES.slice(0, 3).map(t => (
                    <View key={t.id} style={[styles.tableIndicator, t.status === 'booked' && styles.tableBooked]}>
                      <Text style={styles.tableId}>{t.id}</Text>
                    </View>
                  ))}
                  <View style={styles.mapLabel}><Text style={styles.mapLabelText}>Haqiqiy xarita uchun tugmani bosing</Text></View>
               </View>
            </Animated.View>

            {/* 3. Payment Systems (Mock) */}
            <Animated.View entering={FadeInUp.delay(200)} style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
               <View style={styles.cardHeader}>
                  <Text style={[styles.cardTitle, { color: colors.text }]}>To'lov tizimi</Text>
                  <CreditCard size={20} color={colors.subtext} />
               </View>
               <View style={styles.paymentMethods}>
                  <TouchableOpacity style={styles.payBtn}>
                    <Text style={{color: colors.text, fontWeight: 'bold'}}>Payme</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.payBtn}>
                    <Text style={{color: colors.text, fontWeight: 'bold'}}>Click</Text>
                  </TouchableOpacity>
               </View>
            </Animated.View>

            {/* Bookings List */}
            {user && bookings.length > 0 && (
              <Animated.View entering={FadeInUp.delay(300)} style={{marginTop: 10}}>
                <Text style={[styles.cardTitle, { color: colors.text, marginBottom: 15 }]}>Mening bandlovlarim</Text>
                {bookings.map(b => (
                  <View key={b.id} style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, padding: 15 }]}>
                    <Text style={{color: colors.text, fontWeight: 'bold', fontSize: 16}}>{b.tableName}</Text>
                    <Text style={{color: colors.subtext, marginTop: 5}}>{new Date(b.date).toLocaleDateString()} - {b.restaurantName}</Text>
                  </View>
                ))}
              </Animated.View>
            )}

          </ScrollView>
        </SafeAreaView>

        {/* Full Screen Table Picker Modal */}
        <Modal visible={showTablePicker} animationType="slide" transparent>
          <View style={[styles.modalOverlay, { backgroundColor: colors.bg }]}>
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.modalHeader}>
                <TouchableOpacity onPress={() => setShowTablePicker(false)} style={styles.modalBack}>
                  <ChevronLeft size={24} color={colors.text} />
                </TouchableOpacity>
                <Text style={[styles.modalTitle, { color: colors.text }]}>Stol band qilish</Text>
                <View style={{ width: 40 }} />
              </View>

              <ScrollView contentContainerStyle={styles.modalContent}>
                <Text style={[styles.modalSubtitle, { color: colors.subtext }]}>Restoran xaritasidan stolni tanlang</Text>
                
                <View style={styles.tableGrid}>
                  {TABLES.map((table) => (
                    <TouchableOpacity 
                      key={table.id}
                      disabled={table.status === 'booked'}
                      onPress={() => handleBookTable(table.id, table.name)}
                      style={[
                        styles.tableCard, 
                        { backgroundColor: colors.card, borderColor: colors.border },
                        table.status === 'booked' && styles.tableCardBooked,
                        selectedTable?.id === table.id && { borderColor: '#6366f1', borderWidth: 2 }
                      ]}
                    >
                      <Text style={[styles.tableName, { color: colors.text }, table.status === 'booked' && { color: '#64748b' }]}>{table.name}</Text>
                      <Text style={styles.tableCapacity}>{table.capacity} kishilik</Text>
                      <View style={[styles.statusIndicator, { backgroundColor: table.status === 'available' ? '#10b981' : '#ef4444' }]} />
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </SafeAreaView>
          </View>
        </Modal>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Outfit-Bold',
  },
  themeBtn: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  card: {
    borderRadius: 25,
    padding: 22,
    marginBottom: 20,
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
  },
  cardBadge: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    textTransform: 'uppercase',
  },
  cardDesc: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    lineHeight: 22,
  },
  linkText: {
    color: '#6366f1',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  miniMap: {
    marginTop: 20,
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderStyle: 'dashed',
  },
  tableIndicator: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableBooked: {
    backgroundColor: '#ef4444',
  },
  tableId: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mapLabel: {
    position: 'absolute',
    bottom: 5,
  },
  mapLabelText: {
    color: '#64748b',
    fontSize: 10,
    fontFamily: 'Inter-Medium',
  },
  paymentMethods: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
  },
  payBtn: {
    flex: 1,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  payLogo: {
    width: 80,
    height: 30,
  },
  modalOverlay: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  modalBack: {
    padding: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
  },
  modalContent: {
    paddingHorizontal: 25,
  },
  modalSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    marginBottom: 30,
    textAlign: 'center',
  },
  tableGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  tableCard: {
    width: (width - 65) / 2,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
  },
  tableCardBooked: {
    opacity: 0.5,
    backgroundColor: 'transparent',
  },
  tableName: {
    fontSize: 16,
    fontFamily: 'Outfit-Bold',
    marginBottom: 5,
  },
  tableCapacity: {
    color: '#94a3b8',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginBottom: 15,
  },
  statusIndicator: {
    width: 30,
    height: 6,
    borderRadius: 3,
  },
});
