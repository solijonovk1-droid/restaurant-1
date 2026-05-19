import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Mail, Lock, ChevronLeft, User, ArrowRight } from 'lucide-react-native';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useStore } from '../../store/useStore';

const { width } = Dimensions.get('window');

export default function RegisterScreen() {
  const router = useRouter();
  const { login } = useStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (email && name) {
      login(email, name);
      router.replace('/(tabs)');
    } else {
      login('newuser@mail.com', 'Yangi Foydalanuvchi');
      router.replace('/(tabs)');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0a0b14', '#111827', '#0a0b14']} style={styles.gradient}>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.inner}
          >
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
              <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                  <ChevronLeft size={24} color="#f8fafc" />
                </TouchableOpacity>
              </View>

              <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.logoContainer}>
                <LinearGradient
                  colors={['#6366f1', '#4f46e5']}
                  style={styles.logoIcon}
                >
                  <Text style={styles.logoText}>T</Text>
                </LinearGradient>
              </Animated.View>

              <Animated.View entering={FadeInUp.delay(200).duration(800)} style={styles.header}>
                <Text style={styles.title}>Ro'yxatdan o'tish ✨</Text>
                <Text style={styles.subtitle}>Premium imkoniyatlardan foydalanish uchun hisob yarating</Text>
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(400).duration(800)} style={styles.form}>
                <View style={styles.inputGroup}>
                  <View style={styles.inputWrapper}>
                    <User size={20} color="#6366f1" />
                    <TextInput
                      style={styles.input}
                      placeholder="To'liq ismingiz"
                      placeholderTextColor="#475569"
                      value={name}
                      onChangeText={setName}
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <View style={styles.inputWrapper}>
                    <Mail size={20} color="#6366f1" />
                    <TextInput
                      style={styles.input}
                      placeholder="Email manzilingiz"
                      placeholderTextColor="#475569"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <View style={styles.inputWrapper}>
                    <Lock size={20} color="#6366f1" />
                    <TextInput
                      style={styles.input}
                      placeholder="Parol yarating"
                      placeholderTextColor="#475569"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                    />
                  </View>
                </View>

                <TouchableOpacity 
                   style={styles.registerBtn} 
                   onPress={handleRegister}
                   activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#6366f1', '#4f46e5']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnGradient}
                  >
                    <ArrowRight size={22} color="#fff" style={styles.btnIcon} />
                    <Text style={styles.btnText}>Hisob yaratish</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.footer}>
                  <Text style={styles.footerText}>Hisobingiz bormi? </Text>
                  <TouchableOpacity onPress={() => router.replace('/login')}>
                    <Text style={styles.loginLink}>Kirish</Text>
                  </TouchableOpacity>
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
  inner: {
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
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  logoContainer: {
    marginTop: 10,
    marginBottom: 25,
    alignItems: 'center',
  },
  logoIcon: {
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  logoText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Outfit-Black',
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
    lineHeight: 24,
  },
  form: {
    width: '100%',
    gap: 20,
  },
  inputGroup: {
    width: '100%',
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
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  btnGradient: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  btnIcon: {
    position: 'absolute',
    left: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#94a3b8',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
  loginLink: {
    color: '#6366f1',
    fontSize: 15,
    fontFamily: 'Inter-Bold',
  },
});
