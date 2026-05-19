import { Tabs } from 'expo-router';
import { Home, UtensilsCrossed, Bot, ShoppingBag, BookmarkCheck, User, MapPin } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 95 : 82,
          backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'rgba(10, 11, 20, 0.98)',
          paddingBottom: Platform.OS === 'ios' ? 30 : 15,
        },
        tabBarBackground: () => (
          Platform.OS === 'ios' ? (
            <BlurView intensity={95} tint="dark" style={StyleSheet.absoluteFill} />
          ) : null
        ),
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#64748b',
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'Inter-SemiBold',
        },
        tabBarIconStyle: {
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Asosiy',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Menyu',
          tabBarIcon: ({ color, size }) => <UtensilsCrossed size={size} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: 'AI Yordamchi',
          tabBarIcon: ({ color, size }) => <Bot size={size} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Savat',
          tabBarIcon: ({ color, size }) => <ShoppingBag size={size} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Xarita',
          tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bronlar',
          tabBarIcon: ({ color, size }) => <BookmarkCheck size={size} color={color} strokeWidth={2.5} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} strokeWidth={2.5} />,
        }}
      />
    </Tabs>
  );
}
