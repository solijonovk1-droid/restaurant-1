import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Store, MapPin, Phone, Mail, ChevronLeft, ArrowRight, Clock } from 'lucide-react-native';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function RestaurantRegisterScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    phone: '',
    address: '',
    category: '',
  });

  const handleRegister = () => {
    if (formData.name && formData.phone) {
      Alert.alert(
        "Muvaffaqiyatli",
        "Sizning so'rovingiz qabul qilindi. 24 soat ichida mutaxassisimiz siz bilan bog'lanadi.",
        [{ text: "Tushunarli", onPress: () => router.replace('/') }]
      );
    } else {
      Alert.alert("Xatolik", "Iltimos, barcha maydonlarni to'ldiring.");
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0a0b14', '#111827']} style={styles.gradient}>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
              <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                  <ChevronLeft size={24} color="#f8fafc" />
                </TouchableOpacity>
              </View>

              <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.logoContainer}>
                <LinearGradient
                  colors={['#f59e0b', '#d97706']}
                  style={styles.logoIcon}
                >
                  <Store size={30} color="#fff" />
                </LinearGradient>
              </Animated.View>

              <Animated.View entering={FadeInUp.delay(200).duration(800)} style={styles.header}>
                <Text style={styles.title}>Restoran Hamkorligi 🤝</Text>
                <Text style={styles.subtitle}>O'z biznesingizni biz bilan kengaytiring</Text>
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(400).duration(800)} style={styles.form}>
                <View style={styles.inputWrapper}>
                  <Store size={20} color="#f59e0b" />
                  <TextInput
                    style={styles.input}
                    placeholder="Restoran nomi"
                    placeholderTextColor="#475569"
                    value={formData.name}
                    onChangeText={(t) => setFormData({...formData, name: t})}
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Phone size={20} color="#f59e0b" />
                  <TextInput
                    style={styles.input}
                    placeholder="Telefon raqamingiz"
                    placeholderTextColor="#475569"
                    value={formData.phone}
                    onChangeText={(t) => setFormData({...formData, phone: t})}
                    keyboardType="phone-pad"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <MapPin size={20} color="#f59e0b" />
                  <TextInput
                    style={styles.input}
                    placeholder="Restoran manzili"
                    placeholderTextColor="#475569"
                    value={formData.address}
                    onChangeText={(t) => setFormData({...formData, address: t})}
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Clock size={20} color="#f59e0b" />
                  <TextInput
                    style={styles.input}
                    placeholder="Oshxona turi (Masalan: Milliy, Italyan)"
                    placeholderTextColor="#475569"
                    value={formData.category}
                    onChangeText={(t) => setFormData({...formData, category: t})}
                  />
                </View>

                <TouchableOpacity 
                   style={styles.registerBtn} 
                   onPress={handleRegister}
                   activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#f59e0b', '#d97706']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnGradient}
                  >
                    <ArrowRight size={22} color="#fff" />
                    <Text style={styles.btnText}>Hamkor bo'lish</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.infoBox}>
                  <Text style={styles.infoText}>
                    ✨ Ro'yxatdan o'tgandan so'ng, sizga boshqaruv paneli va mijozlar oqimi taqdim etiladi.
                  </Text>
                </View>
              </Animated.View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b14',
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 40,
    alignItems: 'center',
  },
  headerRow: {
    width: '100%',
    paddingVertical: 15,
  },
  backBtn: {
    backgroundColor: '#1e293b',
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 10,
    marginBottom: 25,
    alignItems: 'center',
  },
  logoIcon: {
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#f59e0b',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 35,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
  form: {
    width: '100%',
    gap: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 65,
    gap: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },
  registerBtn: {
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  btnGradient: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  infoBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'rgba(245, 158, 11, 0.05)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.1)',
  },
  infoText: {
    color: '#f59e0b',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
});
