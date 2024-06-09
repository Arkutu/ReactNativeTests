import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({ route, navigation }) => {
  const { organizationName } = route.params;

  const [channels, setChannels] = useState([
    { name: 'general', description: 'General is a messaging app for groups of people who work together. You can send updates, share files, and organize conversations so that everyone is in the loop.' },
    { name: 'meeting', description: 'Meeting channel for discussing various topics and holding meetings.' },
    { name: 'random', description: 'Random channel for off-topic discussions and fun.' },
  ]);

  const addChannel = (name, description) => {
    setChannels([...channels, { name, description }]);
  };

  const firstLetter = organizationName ? organizationName.charAt(0).toUpperCase() : '';

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{firstLetter}</Text>
          </View>
          <Text style={styles.headerTitle}>{organizationName}</Text>
          <TouchableOpacity>
            <Ionicons name="person-circle" size={40} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" />
          <Text style={styles.searchText}>Jump to or search...</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Workspace</Text>
          {channels.map((channel, index) => (
            <TouchableOpacity
              key={index}
              style={styles.channelItem}
              onPress={() => navigation.navigate('Chat', { channelName: channel.name, channelDescription: channel.description })}
            >
              <Text style={styles.channelText}># {channel.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.addChannel}
            onPress={() => navigation.navigate('CreateChannel', { addChannel })}
          >
            <Text style={styles.addChannelText}>+ Add channel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Direct messages</Text>
          <TouchableOpacity style={styles.channelItem} onPress={() => navigation.navigate('Chat', { channelName: 'arkutumelike (you)', channelDescription: 'Direct messages with yourself.' })}>
            <Text style={styles.channelText}>arkutumelike (you)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.suggestion}>
          <Text style={styles.suggestionText}>Next, you could...</Text>
          <TouchableOpacity style={styles.suggestionButton}>
            <Text style={styles.suggestionButtonText}>Add teammates</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={28} color="#FFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="office-building" size={28} color="#FFF" />
          <Text style={styles.navTextInactive}>Office</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications" size={28} color="#FFF" />
          <Text style={styles.navTextInactive}>Activity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00072d',
  },
  headerContainer: {
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#0d6efd',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFF',
    paddingVertical: 10,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2b40',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 20,
  },
  searchText: {
    color: '#888',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
  },
  channelItem: {
    paddingVertical: 10,
  },
  channelText: {
    color: '#FFF',
    fontSize: 16,
  },
  addChannel: {
    paddingVertical: 10,
  },
  addChannelText: {
    color: '#0d6efd',
    fontSize: 16,
  },
  suggestion: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  suggestionText: {
    color: '#888',
    marginBottom: 10,
  },
  suggestionButton: {
    backgroundColor: '#1a1a2e',
    padding: 10,
    borderRadius: 10,
  },
  suggestionButtonText: {
    color: '#0d6efd',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1a1a2e',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#FFF',
    fontSize: 12,
  },
  navTextInactive: {
    color: '#888',
    fontSize: 12,
  },
});

export default HomeScreen;
