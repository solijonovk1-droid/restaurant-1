import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useRouter, Link } from 'expo-router';
import Animated, { FadeInDown, FadeInUp, FadeInRight } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronRight, Star, Users, MapPin, Sparkles } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const STATS = [
  { label: 'Restoranlar', value: '500+', icon: <Star size={16} color="#6366f1" /> },
  { label: 'Foydalanuvchilar', value: '10k+', icon: <Users size={16} color="#6366f1" /> },
  { label: 'Shaharlar', value: '12', icon: <MapPin size={16} color="#6366f1" /> },
];

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80' }}
        style={styles.background}
      >
        <LinearGradient
          colors={['rgba(10, 11, 20, 0.4)', 'rgba(10, 11, 20, 0.8)', '#0a0b14']}
          style={styles.gradient}
        >
          <SafeAreaView style={styles.content}>
            <View style={{ flex: 1 }}>
              <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.logoContainer}>
                <LinearGradient
                  colors={['#6366f1', '#4f46e5']}
                  style={styles.logoIcon}
                >
                  <Text style={styles.logoText}>T</Text>
                </LinearGradient>
                <Text style={styles.brandName}>TableBook AI</Text>
              </Animated.View>

              <View style={styles.statsContainer}>
                {STATS.map((stat, index) => (
                  <Animated.View 
                    key={index} 
                    entering={FadeInRight.delay(index * 200).duration(800)}
                    style={styles.statBox}
                  >
                    {stat.icon}
                    <View>
                      <Text style={styles.statValue}>{stat.value}</Text>
                      <Text style={styles.statLabel}>{stat.label}</Text>
                    </View>
                  </Animated.View>
                ))}
              </View>

              <View style={styles.featuresPreview}>
                <Text style={styles.featuresTitle}>Nega bizni tanlashadi?</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.featuresList}>
                  {[
                    { title: 'Tezkor Bandlov', desc: '1 daqiqada stol band qiling', icon: '⚡' },
                    { title: 'AI Yordamchi', desc: 'Sizga eng yaxshi taomni tavsiya qiladi', icon: '🤖' },
                    { title: 'Eksklyuziv', desc: 'Faqat bizda mavjud maxsus aksiyalar', icon: '🎁' }
                  ].map((f, i) => (
                    <Animated.View key={i} entering={FadeInRight.delay(600 + i * 200)} style={styles.featureCard}>
                      <Text style={styles.featureIcon}>{f.icon}</Text>
                      <Text style={styles.featureCardTitle}>{f.title}</Text>
                      <Text style={styles.featureDesc}>{f.desc}</Text>
                    </Animated.View>
                  ))}
                </ScrollView>
              </View>
            </View>

            <View style={styles.footer}>
              <Animated.View entering={FadeInDown.delay(200).duration(1000)}>
                <View style={styles.tagContainer}>
                  <Sparkles size={14} color="#6366f1" />
                  <Text style={styles.tagText}>O'zbekistondagi №1 Premium Servis</Text>
                </View>
                <Text style={styles.title}>Premium Ta'm va{"\n"}Qulaylik Uyg'unligi</Text>
                <Text style={styles.subtitle}>
                  O'zbekistonning eng sara restoranlarida stol band qiling va eksklyuziv taomlardan bahramand bo'ling.
                </Text>
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(400).duration(1000)} style={styles.bottomActions}>
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={() => router.replace('/(tabs)')}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#6366f1', '#4f46e5']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonGradient}
                  >
                    <Text style={styles.buttonText}>Boshlash</Text>
                    <ChevronRight size={22} color="#fff" strokeWidth={3} />
                  </LinearGradient>
                </TouchableOpacity>

                <Link href="/login" asChild>
                  <TouchableOpacity 
                    style={styles.loginLink} 
                    activeOpacity={0.7}
                  >
                    <Text style={styles.loginLinkText}>
                      Hisobingiz bormi? <Text style={styles.loginHighlight}>Kirish</Text>
                    </Text>
                  </TouchableOpacity>
                </Link>

                <TouchableOpacity 
                  style={styles.restaurantLink}
                  onPress={() => router.push('/register-restaurant')}
                >
                  <Text style={styles.restaurantLinkText}>
                    Restoraningiz bormi? <Text style={styles.restaurantHighlight}>Hamkor bo'ling</Text>
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b14',
  },
  background: {
    flex: 1,
    width: '100%',
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 20,
  },
  logoIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  logoText: {
    color: '#fff',
    fontFamily: 'Outfit-Black',
    fontSize: 22,
  },
  brandName: {
    color: '#f8fafc',
    fontSize: 24,
    fontFamily: 'Outfit-Bold',
    letterSpacing: -0.5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 25,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  featuresPreview: {
    marginTop: 40,
  },
  featuresTitle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
    marginBottom: 15,
  },
  featuresList: {
    gap: 15,
  },
  featureCard: {
    width: 160,
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  featureCardTitle: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    marginBottom: 4,
  },
  featureDesc: {
    color: '#94a3b8',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    lineHeight: 18,
  },
  statBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
  },
  statLabel: {
    color: '#94a3b8',
    fontSize: 11,
    fontFamily: 'Inter-Medium',
    marginTop: 2,
  },
  footer: {
    paddingBottom: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: 'rgba(99, 102, 241, 0.2)',
  },
  tagText: {
    color: '#6366f1',
    fontSize: 12,
    fontFamily: 'Inter-Bold',
  },
  title: {
    color: '#fff',
    fontSize: 48,
    fontFamily: 'Outfit-Black',
    lineHeight: 54,
    letterSpacing: -1,
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 17,
    lineHeight: 26,
    marginTop: 20,
    fontFamily: 'Inter-Regular',
    paddingRight: 20,
  },
  bottomActions: {
    marginTop: 45,
    gap: 20,
  },
  button: {
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  buttonGradient: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontFamily: 'Inter-Bold',
  },
  loginLink: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  loginLinkText: {
    color: '#94a3b8',
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },
  loginHighlight: {
    color: '#6366f1',
    fontFamily: 'Inter-Bold',
  },
  restaurantLink: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  restaurantLinkText: {
    color: '#64748b',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  restaurantHighlight: {
    color: '#f59e0b',
    fontFamily: 'Inter-Bold',
  },
});

