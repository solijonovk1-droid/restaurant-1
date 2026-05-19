import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  Dimensions, 
  ImageBackground,
  StatusBar,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { 
  Search, 
  ShoppingBag, 
  User, 
  Calendar, 
  ArrowRight,
  Clock,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react-native';
import Animated, { 
  FadeInDown, 
  FadeInUp,
  FadeInRight,
  FadeIn,
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const FEATURED_DISHES = [
  { id: '1', name: "To'y Oshi", price: "35 000 s.", desc: "Go'sht, mayiz va no'hot bilan pishirilgan maxsus palov.", image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80' },
  { id: '2', name: "Qiyma Shashlik", price: "15 000 s.", desc: "Yumshoq mol go'shtidan tayyorlangan shashlik.", image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80' },
  { id: '3', name: "Manti", price: "8 000 s.", desc: "Yumshoq xamir ichida mayda to'g'rilgan go'shtli manti.", image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80' },
  { id: '4', name: "Achchiq-Chuchuk", price: "12 000 s.", desc: "Pomidor va bodringdan tayyorlangan klassik salat.", image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80' },
];

export default function SingleRestaurantHome() {
  const router = useRouter();
  const scrollY = useSharedValue(0);
  const [contentLoading, setContentLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for premium feel
    const timer = setTimeout(() => {
      setContentLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 50], [0, 1], Extrapolate.CLAMP);
    return {
      opacity,
      backgroundColor: 'rgba(10, 11, 20, 0.98)',
      transform: [{ translateY: interpolate(scrollY.value, [0, 50], [-20, 0], Extrapolate.CLAMP) }]
    };
  });

  if (contentLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <StatusBar barStyle="light-content" />
        <Animated.View entering={FadeIn.duration(800)} style={styles.loadingInner}>
          <LinearGradient
            colors={['#6366f1', '#4f46e5']}
            style={styles.logoLoader}
          >
            <Text style={styles.logoLoaderText}>T</Text>
          </LinearGradient>
          <Animated.View entering={FadeInDown.delay(300).duration(800)} style={styles.loadingBar}>
            <LinearGradient
              colors={['#6366f1', '#4f46e5']}
              style={styles.loadingFill}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </Animated.View>
          <Text style={styles.loadingText}>Yuklanmoqda...</Text>
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Dynamic Header */}
      <Animated.View style={[styles.header, headerStyle]}>
        <SafeAreaView style={styles.headerBlur}>
          <View style={styles.headerInner}>
            <View style={styles.logoMiniGroup}>
              <View style={styles.logoMini}>
                  <Text style={styles.logoMiniText}>T</Text>
              </View>
              <Text style={styles.brandNameHeader}>TableBook AI</Text>
            </View>
            <View style={styles.navLinks}>
              <Text style={[styles.navText, styles.activeNav]}>Asosiy</Text>
              <Text style={styles.navText}>Menyu</Text>
              <Text style={styles.navText}>Band qilish</Text>
              <Text style={styles.navText}>Biz haqimizda</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity><Search size={20} color="#fff" strokeWidth={2.5} /></TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/cart')}><ShoppingBag size={20} color="#fff" strokeWidth={2.5} /></TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/login')} style={styles.loginBtnHeader}>
                <User size={14} color="#fff" strokeWidth={2.5} />
                <Text style={styles.loginBtnHeaderText}>Kirish</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Animated.View>

      <Animated.ScrollView 
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={Platform.OS === 'web'}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Hero Section */}
        <ImageBackground 
          source={{ uri: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80' }} 
          style={styles.hero}
        >
          <LinearGradient
            colors={['rgba(10, 11, 20, 0.5)', 'rgba(10, 11, 20, 0.3)', 'rgba(10, 11, 20, 0.95)']}
            style={StyleSheet.absoluteFill}
          />
          
          <SafeAreaView style={styles.heroContent}>
            {/* Top Bar for Hero */}
            <View style={styles.heroTopBar}>
              <View style={styles.heroLogo}>
                <View style={styles.logoBox}><Text style={styles.logoBoxText}>T</Text></View>
                <Text style={styles.heroLogoText}>TableBook AI</Text>
              </View>
              <View style={styles.heroNav}>
                <Text style={[styles.navText, styles.heroActiveNav]}>Asosiy</Text>
                <Text style={styles.navText}>Menyu</Text>
                <Text style={styles.navText}>Band qilish</Text>
                <Text style={styles.navText}>Biz haqimizda</Text>
              </View>
              <View style={styles.heroIcons}>
                <TouchableOpacity><Search size={22} color="#fff" strokeWidth={2.5} /></TouchableOpacity>
                <TouchableOpacity><ShoppingBag size={22} color="#fff" strokeWidth={2.5} /></TouchableOpacity>
                <TouchableOpacity style={styles.heroUserBtn}>
                  <User size={16} color="#fff" strokeWidth={2.5} />
                  <Text style={styles.heroUsername}>kamronbek</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.heroMain}>
              <Animated.Text entering={FadeInUp.delay(200).duration(800)} style={styles.heroTitle}>
                Rayhon Milliy{"\n"}Taomlar
              </Animated.Text>
              <Animated.Text entering={FadeInUp.delay(400).duration(800)} style={styles.heroSubtitle}>
                "Rayhon Milliy Taomlar - bu Toshkent shahridagi eng mashhur va sevimli maskanlardan biri. Haqiqiy o'zbek mehmondo'stligi ..."
              </Animated.Text>
              
              <Animated.View entering={FadeInDown.delay(600).duration(800)} style={styles.heroButtons}>
                <TouchableOpacity style={styles.menuBtn}>
                  <LinearGradient colors={['#6366f1', '#4b49ac']} style={styles.btnGradient}>
                    <ShoppingBag size={20} color="#fff" strokeWidth={2.5} />
                    <Text style={styles.menuBtnText}>Menyuni ko'rish</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookBtn}>
                  <Calendar size={20} color="#000" strokeWidth={2.5} />
                  <Text style={styles.bookBtnText}>Stol band qilish</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>

            <View style={styles.heroFooter}>
              <View style={styles.footerItem}>
                <MapPin size={14} color="#6366f1" strokeWidth={2.5} />
                <Text style={styles.footerText}>Toshkent shahri, Lutfiy ko'chasi, 24</Text>
              </View>
              <View style={styles.footerItem}>
                <Clock size={14} color="#6366f1" strokeWidth={2.5} />
                <Text style={styles.footerText}>Har kuni: 09:00 - 23:00</Text>
              </View>
              <View style={styles.footerItem}>
                <Phone size={14} color="#6366f1" strokeWidth={2.5} />
                <Text style={styles.footerText}>+998 71 200 66 66</Text>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>

        {/* Featured Dishes Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Eng sara <Text style={styles.highlightText}>taomlarimiz</Text></Text>
              <Text style={styles.sectionSubtitle}>Mijozlarimizning sevimli tanlovlari</Text>
            </View>
            <TouchableOpacity style={styles.allMenuLink}>
              <Text style={styles.allMenuText}>Barcha menyu</Text>
              <ArrowRight size={18} color="#6366f1" strokeWidth={2.5} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dishesList}>
            {FEATURED_DISHES.map((dish, index) => (
              <Animated.View 
                key={dish.id} 
                entering={FadeInRight.delay(index * 150)}
                style={styles.dishCard}
              >
                <Image source={{ uri: dish.image }} style={styles.dishImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.5)', '#000']}
                  style={styles.dishGradient}
                />
                <View style={styles.dishContent}>
                  <Text style={styles.dishName}>{dish.name}</Text>
                  <Text style={styles.dishDesc} numberOfLines={2}>{dish.desc}</Text>
                  <View style={styles.dishFooter}>
                    <Text style={styles.dishPrice}>{dish.price}</Text>
                    <TouchableOpacity style={styles.dishAddBtn}>
                      <ArrowRight size={20} color="#000" strokeWidth={2.5} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Animated.View>
            ))}
          </ScrollView>
        </View>

        {/* About Section Banner */}
        <View style={styles.aboutSection}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80' }}
            style={styles.aboutBanner}
            imageStyle={{ borderRadius: 30 }}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.7)']}
              style={[StyleSheet.absoluteFill, { borderRadius: 30 }]}
            />
            <View style={styles.aboutContent}>
              <Text style={styles.aboutTag}>BIZ HAQIMIZDA</Text>
              <Text style={styles.aboutTitle}>O'zbekona mehmondo'stlik{"\n"}<Text style={styles.aboutTitleItalic}>an'analari</Text></Text>
              <TouchableOpacity style={styles.aboutBtn}>
                <Text style={styles.aboutBtnText}>Batafsil o'qish</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* About Section Detailed */}
        <View style={styles.premiumAboutSection}>
           <Animated.View entering={FadeInUp.delay(200)} style={styles.aboutCard}>
              <View style={styles.aboutIconContainer}>
                <Sparkles size={30} color="#6366f1" />
              </View>
              <Text style={styles.aboutCardTitle}>Haqiqiy Ta'm</Text>
              <Text style={styles.aboutCardDesc}>Biz faqatgina saralangan, eng yangi va sifatli mahsulotlardan foydalanamiz.</Text>
           </Animated.View>
           
           <Animated.View entering={FadeInUp.delay(400)} style={styles.aboutCard}>
              <View style={styles.aboutIconContainer}>
                <Clock size={30} color="#6366f1" />
              </View>
              <Text style={styles.aboutCardTitle}>Tezkor Xizmat</Text>
              <Text style={styles.aboutCardDesc}>Sizning vaqtingiz biz uchun qadrli. Stol band qilish va buyurtmalar 1 daqiqada.</Text>
           </Animated.View>
        </View>

        <View style={{ height: 120 }} />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b14',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  headerBlur: {
    paddingVertical: 10,
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
    justifyContent: 'space-between',
  },
  logoMini: {
    width: 38,
    height: 38,
    backgroundColor: '#6366f1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  logoMiniText: {
    color: '#fff',
    fontFamily: 'Outfit-Black',
    fontSize: 22,
  },
  logoMiniGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  brandNameHeader: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Outfit-Bold',
    letterSpacing: -0.5,
  },
  navLinks: {
    flexDirection: 'row',
    gap: 20,
  },
  navText: {
    color: '#94a3b8',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  activeNav: {
    color: '#6366f1',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  userIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  username: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
  },
  loginBtnHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  loginBtnHeaderText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-Bold',
  },
  hero: {
    width: '100%',
    height: height * 0.9,
  },
  heroContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  heroTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heroLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoBox: {
    width: 36,
    height: 36,
    backgroundColor: '#6366f1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBoxText: {
    color: '#fff',
    fontFamily: 'Outfit-Black',
    fontSize: 20,
  },
  heroLogoText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    letterSpacing: -0.5,
  },
  heroNav: {
    flexDirection: 'row',
    gap: 25,
  },
  heroActiveNav: {
    color: '#6366f1',
  },
  heroIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  heroUserBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  heroUsername: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  heroMain: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 62,
    fontFamily: 'Outfit-Black',
    textAlign: 'center',
    lineHeight: 70,
    letterSpacing: -1,
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
    marginTop: 25,
    fontFamily: 'Inter-Regular',
    paddingHorizontal: 10,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 45,
  },
  menuBtn: {
    borderRadius: 18,
    overflow: 'hidden',
    width: 200,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  btnGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 18,
  },
  menuBtnText: {
    color: '#fff',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
  bookBtn: {
    backgroundColor: '#fff',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: 200,
    paddingVertical: 18,
  },
  bookBtnText: {
    color: '#000',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
  heroFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    paddingBottom: 40,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  section: {
    marginTop: 80,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    marginBottom: 35,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 34,
    fontFamily: 'Outfit-Bold',
    letterSpacing: -0.5,
  },
  highlightText: {
    color: '#6366f1',
  },
  sectionSubtitle: {
    color: '#64748b',
    fontSize: 15,
    marginTop: 6,
    fontFamily: 'Inter-Regular',
  },
  allMenuLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 5,
  },
  allMenuText: {
    color: '#6366f1',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
  dishesList: {
    paddingLeft: 25,
    gap: 25,
    paddingRight: 25,
  },
  dishCard: {
    width: width * 0.52,
    height: 380,
    borderRadius: 45,
    overflow: 'hidden',
    backgroundColor: '#1e293b',
  },
  dishImage: {
    width: '100%',
    height: '100%',
  },
  dishGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  dishContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
  },
  dishName: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Outfit-Bold',
  },
  dishDesc: {
    color: '#94a3b8',
    fontSize: 13,
    marginTop: 8,
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
  },
  dishFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  dishPrice: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
  },
  dishAddBtn: {
    backgroundColor: '#fff',
    width: 42,
    height: 42,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutSection: {
    paddingHorizontal: 25,
    marginTop: 100,
  },
  aboutBanner: {
    width: '100%',
    height: 420,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutContent: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  aboutTag: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 11,
    letterSpacing: 5,
    fontFamily: 'Inter-Bold',
    marginBottom: 25,
  },
  aboutTitle: {
    color: '#fff',
    fontSize: 52,
    lineHeight: 62,
    fontFamily: 'Outfit-Black',
    textAlign: 'center',
  },
  aboutTitleItalic: {
    fontStyle: 'italic',
    color: '#6366f1',
    fontFamily: 'Outfit-Regular',
  },
  aboutBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 35,
    paddingVertical: 18,
    borderRadius: 15,
    marginTop: 45,
  },
  aboutBtnText: {
    color: '#000',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingInner: {
    alignItems: 'center',
    gap: 25,
  },
  logoLoader: {
    width: 100,
    height: 100,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
  logoLoaderText: {
    color: '#fff',
    fontSize: 50,
    fontFamily: 'Outfit-Black',
  },
  loadingBar: {
    width: 200,
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  loadingFill: {
    width: '100%',
    height: '100%',
  },
  loadingText: {
    color: '#94a3b8',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  premiumAboutSection: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    gap: 15,
    marginTop: 30,
  },
  aboutCard: {
    flex: 1,
    backgroundColor: 'rgba(30, 41, 59, 0.4)',
    padding: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  aboutIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  aboutCardTitle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
    marginBottom: 10,
  },
  aboutCardDesc: {
    color: '#94a3b8',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'Inter-Regular',
  },
});
