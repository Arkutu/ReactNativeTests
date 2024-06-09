import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = ({ route, navigation }) => {
  const { channelName, channelDescription, memberCount } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: Date.now(), text: message }]);
      setMessage('');
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={styles.container}>

<View style={{ marginBottom: 40 }} />


      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>#{channelName}</Text>
          <Text style={styles.memberCount}>{memberCount} member{memberCount !== 1 ? 's' : ''}</Text>
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="add" size={24} color="#FFF" style={styles.headerIcon} />
          <Ionicons name="headset" size={24} color="#FFF" style={styles.headerIcon} />
        </View>
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.chatContainer} ref={scrollViewRef}>
          {messages.length === 0 ? (
            <View>
              <Text style={styles.welcomeText}>Welcome!</Text>
              <Text style={styles.description}>
                {channelDescription}
              </Text>
              <View style={styles.actionItems}>
                <TouchableOpacity style={styles.actionItem}>
                  <Ionicons name="information-circle" size={24} color="#FFF" />
                  <Text style={styles.actionText}>Learn about {channelName}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionItem}>
                  <Ionicons name="person-add" size={24} color="#FFF" />
                  <Text style={styles.actionText}>Invite people</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionItem}>
                  <Ionicons name="link" size={24} color="#FFF" />
                  <Text style={styles.actionText}>Connect apps</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            messages.map((msg) => (
              <View key={msg.id} style={styles.message}>
                <Ionicons name="person-circle" size={24} color="#FFF" />
                <View style={styles.messageContent}>
                  <Text style={styles.messageUser}>User</Text>
                  <Text style={styles.messageText}>{msg.text}</Text>
                </View>
              </View>
            ))
          )}
        </ScrollView>
        <View style={styles.messageInputContainer}>
          <Ionicons name="add-circle" size={28} color="#FFF" />
          <TextInput
            style={styles.messageInput}
            placeholder={`Message #${channelName}`}
            placeholderTextColor="#888"
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={handleSendMessage}
          />
          <TouchableOpacity onPress={handleSendMessage}>
            <Ionicons name="send" size={28} color="#FFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00072d',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#1a1a2e',
    height: 50,
  },
  headerInfo: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberCount: {
    color: '#888',
    fontSize: 14,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  chatContainer: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#888',
    fontSize: 16,
    marginBottom: 20,
  },
  actionItems: {
    marginBottom: 20,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 10,
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  messageContent: {
    marginLeft: 10,
  },
  messageUser: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageText: {
    color: '#FFF',
    fontSize: 16,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#1a1a2e',
  },
  messageInput: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default ChatScreen;
