import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, Image, Dimensions, ScrollView } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { Mail, Lock, ChevronLeft, Github, ArrowRight, User as UserIcon } from 'lucide-react-native';
import Animated, { FadeInUp, FadeInDown, FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useStore } from '../store/useStore';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email) {
      login(email, email.split('@')[0]);
    } else {
      login('test@mail.com', 'Foydalanuvchi');
    }
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0a0b14', '#111827', '#0a0b14']} style={styles.gradient}>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.inner}
          >
            <View style={styles.headerRow}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                <ChevronLeft size={24} color="#f8fafc" />
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
              <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.logoContainer}>
                <LinearGradient
                  colors={['#6366f1', '#4f46e5']}
                  style={styles.logoIcon}
                >
                  <Text style={styles.logoText}>T</Text>
                </LinearGradient>
              </Animated.View>

              <Animated.View entering={FadeInUp.delay(200).duration(800)} style={styles.header}>
                <Text style={styles.title}>Xush kelibsiz!</Text>
                <Text style={styles.subtitle}>TableBook AI platformasiga kiring</Text>
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(400).duration(800)} style={styles.form}>
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
                      placeholder="Parolingiz"
                      placeholderTextColor="#475569"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                    />
                  </View>
                </View>

                <TouchableOpacity 
                  style={styles.loginBtn} 
                  onPress={handleLogin}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#6366f1', '#4f46e5']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.loginGradient}
                  >
                    <ArrowRight size={22} color="#fff" style={styles.btnIcon} />
                    <Text style={styles.loginBtnText}>Kirish</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.dividerRow}>
                  <View style={styles.line} />
                  <Text style={styles.dividerText}>YOKI</Text>
                  <View style={styles.line} />
                </View>

                <View style={styles.socialRow}>
                  <TouchableOpacity 
                    style={styles.socialBtn} 
                    onPress={() => {
                      login('google-user@mail.com', 'Google User');
                      router.replace('/(tabs)');
                    }}
                  >
                    <Image 
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }} 
                      style={styles.socialIcon} 
                    />
                    <Text style={styles.socialBtnText}>Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.socialBtn}
                    onPress={() => {
                      login('github-user@mail.com', 'Github User');
                      router.replace('/(tabs)');
                    }}
                  >
                    <Github size={20} color="#fff" />
                    <Text style={styles.socialBtnText}>Github</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                  <Text style={styles.footerText}>Akkountingiz yo'qmi? </Text>
                  <Link href="/register" asChild>
                    <TouchableOpacity>
                      <Text style={styles.registerLink}>Ro'yxatdan o'ting</Text>
                    </TouchableOpacity>
                  </Link>
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
    paddingHorizontal: 25,
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
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  logoIcon: {
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
  },
  logoText: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Outfit-Black',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
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
  loginBtn: {
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  loginGradient: {
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
  loginBtnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  dividerText: {
    color: '#64748b',
    fontSize: 12,
    fontFamily: 'Inter-Bold',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 15,
  },
  socialBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  socialBtnText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
  },
  socialIcon: {
    width: 22,
    height: 22,
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
  registerLink: {
    color: '#6366f1',
    fontSize: 15,
    fontFamily: 'Inter-Bold',
  },
});
