import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Send, Bot, User, Sparkles, Trash2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInRight, FadeInLeft } from 'react-native-reanimated';
import { useStore } from '../../store/useStore';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export default function AIAssistantScreen() {
  const { theme } = useStore();
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Assalomu alaykum! Men TableBook AI yordamchisiman. Rayhon restorani menyusi haqida nima so'ramoqchisiz?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const colors = theme === 'dark' ? {
    bg: '#0a0b14',
    card: '#1e293b',
    text: '#f8fafc',
    aiMsg: '#1e293b',
    userMsg: '#6366f1',
  } : {
    bg: '#f8fafc',
    card: '#ffffff',
    text: '#0f172a',
    aiMsg: '#f1f5f9',
    userMsg: '#6366f1',
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Mock AI Response
    setTimeout(() => {
      let aiText = "Kechirasiz, hozircha bu savolga javob bera olmayman. Lekin restoranimizning 'To'y Oshi' taomini albatta tatib ko'rishingizni tavsiya qilaman!";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('salom')) aiText = "Assalomu alaykum! Silliq va mazali taomlar kashf etishga tayyormisiz?";
      if (lowerInput.includes('osh') || lowerInput.includes('palov')) aiText = "Bizda haqiqiy Toshkent To'y Oshi bor! Narxi: 35 000 so'm.";
      if (lowerInput.includes('shashlik')) aiText = "Qiyma, bo'lak va mol go'shtidan shashliklarimiz mavjud. Hammasi issiq va yangi!";
      
      const aiMsg: Message = { id: (Date.now() + 1).toString(), text: aiText, sender: 'ai' };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <LinearGradient colors={theme === 'dark' ? ['#0f172a', '#0a0b14'] : ['#f1f5f9', '#f8fafc']} style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.botInfo}>
              <View style={styles.botIcon}>
                <Bot size={24} color="#fff" />
              </View>
              <View>
                <Text style={[styles.botName, { color: colors.text }]}>TableBook AI</Text>
                <View style={styles.onlineBadge}>
                  <View style={styles.onlineDot} />
                  <Text style={styles.onlineText}>Online</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => setMessages([messages[0]])}>
              <Trash2 size={20} color="#64748b" />
            </TouchableOpacity>
          </View>

          <ScrollView 
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            contentContainerStyle={styles.chatContent}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((msg) => (
              <Animated.View 
                key={msg.id}
                entering={msg.sender === 'user' ? FadeInRight : FadeInLeft}
                style={[
                  styles.messageBubble,
                  msg.sender === 'user' ? styles.userBubble : [styles.aiBubble, { backgroundColor: colors.aiMsg }],
                  msg.sender === 'user' && { backgroundColor: colors.userMsg }
                ]}
              >
                <Text style={[styles.messageText, msg.sender === 'user' ? styles.userText : { color: colors.text }]}>
                  {msg.text}
                </Text>
              </Animated.View>
            ))}
          </ScrollView>

          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={100}>
            <View style={[styles.inputArea, { backgroundColor: colors.card }]}>
              <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Xabar yozing..."
                placeholderTextColor="#64748b"
                value={input}
                onChangeText={setInput}
              />
              <TouchableOpacity onPress={handleSend} style={styles.sendBtn}>
                <Send size={20} color="#fff" strokeWidth={2.5} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  botInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  botIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  botName: {
    fontSize: 18,
    fontFamily: 'Outfit-Bold',
  },
  onlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
  },
  onlineText: {
    color: '#64748b',
    fontSize: 12,
    fontFamily: 'Inter-Medium',
  },
  chatContent: {
    padding: 20,
    paddingBottom: 40,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
  },
  userBubble: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 5,
  },
  messageText: {
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    lineHeight: 22,
  },
  userText: {
    color: '#fff',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },
  sendBtn: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
