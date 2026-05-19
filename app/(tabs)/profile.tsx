import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useStore } from '../../store/useStore';
import { User, Bell, Shield, CircleHelp, LogOut, ChevronRight, Moon, Sparkles } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const { theme, toggleTheme, user, logout } = useStore();
  const isDark = theme === 'dark';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#0F172A' : '#F8FAFC',
    },
    header: {
      padding: 24,
      paddingTop: 60,
      backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#334155' : '#E2E8F0',
      alignItems: 'center',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: isDark ? '#334155' : '#E2E8F0',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDark ? '#F8FAFC' : '#0F172A',
      marginBottom: 4,
    },
    email: {
      fontSize: 16,
      color: isDark ? '#94A3B8' : '#64748B',
    },
    section: {
      marginTop: 24,
      paddingHorizontal: 16,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: isDark ? '#94A3B8' : '#64748B',
      marginBottom: 8,
      marginLeft: 8,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
      borderRadius: 16,
      marginBottom: 8,
    },
    menuIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: isDark ? '#334155' : '#F1F5F9',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    menuText: {
      flex: 1,
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#F8FAFC' : '#1E293B',
    },
    logoutItem: {
      marginTop: 24,
      marginBottom: 48,
    },
    logoutText: {
      color: '#EF4444',
    },
    premiumBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#6366f1',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 12,
      marginTop: 15,
      gap: 6,
    },
    premiumText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
      fontFamily: 'Inter-Bold',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <User color={isDark ? '#94A3B8' : '#64748B'} size={48} />
        </View>
        <Text style={styles.name}>{user?.name || 'Mehmon'}</Text>
        <Text style={styles.email}>{user?.email || 'Tizimga kirmagansiz'}</Text>
        {user && (
          <View style={styles.premiumBadge}>
            <Sparkles size={14} color="#fff" />
            <Text style={styles.premiumText}>Premium Member</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sozlamalar (Settings)</Text>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Moon color={isDark ? '#F8FAFC' : '#0F172A'} size={20} />
          </View>
          <Text style={styles.menuText}>Tungi rejim</Text>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Bell color={isDark ? '#F8FAFC' : '#0F172A'} size={20} />
          </View>
          <Text style={styles.menuText}>Push Xabarnomalar</Text>
          <ChevronRight color={isDark ? '#94A3B8' : '#64748B'} size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ma'lumot (Info)</Text>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <Shield color={isDark ? '#F8FAFC' : '#0F172A'} size={20} />
          </View>
          <Text style={styles.menuText}>Xavfsizlik va Maxfiylik</Text>
          <ChevronRight color={isDark ? '#94A3B8' : '#64748B'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <CircleHelp color={isDark ? '#F8FAFC' : '#0F172A'} size={20} />
          </View>
          <Text style={styles.menuText}>Yordam</Text>
          <ChevronRight color={isDark ? '#94A3B8' : '#64748B'} size={20} />
        </TouchableOpacity>
      </View>

      <View style={[styles.section, styles.logoutItem]}>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => {
            logout();
            router.replace('/login');
          }}
        >
          <View style={[styles.menuIcon, { backgroundColor: '#FEE2E2' }]}>
            <LogOut color="#EF4444" size={20} />
          </View>
          <Text style={[styles.menuText, styles.logoutText]}>Tizimdan chiqish</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
