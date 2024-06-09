import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const CreateChannelScreen = ({ navigation, route }) => {
  const [channelName, setChannelName] = useState('');
  const [channelDescription, setChannelDescription] = useState('');

  const handleCreateChannel = () => {
    if (channelName.trim()) {
      route.params.addChannel(channelName, channelDescription);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Channel Name</Text>
      <TextInput
        style={styles.input}
        value={channelName}
        onChangeText={setChannelName}
        placeholder="Enter channel name"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={channelDescription}
        onChangeText={setChannelDescription}
        placeholder="Enter channel description"
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateChannel}>
        <Text style={styles.buttonText}>Create Channel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00072d',
    padding: 20,
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1a1a2e',
    color: '#FFF',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0d6efd',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateChannelScreen;
