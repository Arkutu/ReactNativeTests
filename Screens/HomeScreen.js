import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate("Chat")} />
      <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate("Tasks")}
      />
      <Button
        title="Go to Calendar"
        onPress={() => navigation.navigate("Calendar")}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
