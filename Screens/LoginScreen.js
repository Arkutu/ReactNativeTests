import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";

// const LoginScreen = ({ navigation }) => {
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  //const [isSwitched, setSwitched] = useState(true);
  // const [countryCode, setCountryCode] = useState("+1");

  const navigation = useNavigation();
  const route = useRoute();
  // const selectedCode = route.params?.selectedCode || "+1";

  // useEffect(() => {
  //   if (route.params?.selectedCode) {
  //     setCountryCode(route.params.selectedCode);
  //   }
  //}, [route.params?.selectedCode]);

  const handleLogin = () => {
    // Add your login logic here (e.g., API call)
    if (!email || !password) {
      alert("Enter email and password");
    } else {
      navigation.navigate("Home");
    }
  };

  const handelEmailChange = (text) => {
    setEmail(text);
    console.log(email);
  };
  const handelPhoneChange = (text) => {
    setPassword(text);
    console.log(password);
  };

  const handleCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  return (
    <View style={styles.container}>
        <View style={styles.image}>
          {/* <image source={require("../assets/")} style={styles.logo} /> */}
        </View>

        <Text style={styles.headerTextOne}>Make it yours!</Text>
        <Text style={styles.headerTextTwo}>Sign In {"\n"}Now</Text>

        <View style={styles.inputContainer}>
          <TextInput
                style={styles.inputCode}
                placeholder="Email"
                value={email}
                onChangeText={(text) => handelEmailChange(text)}
                keyboardType="email-address"
              />
         
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}   
            onChangeText={(text) => handelPhoneChange(text)}
          />
        </View>

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <View style={styles.textContainer}>
          <Text style={styles.textTwo} onPress={handleForgetPassword}>
            Forget Password
          </Text>
        </View>

        <View>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          <Pressable style={styles.buttonTwo} onPress={handleCreateAccount}>
            <Text style={styles.buttonTextTwo}>Create New Account</Text>
          </Pressable>
        </View>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginLeft: 16,
    marginRight: 16,
    // backgroundColor: "#fff",
  },
  image: {
    marginBottom: 110,
  },
  headerTextOne: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  headerTextTwo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 50,
  },
  inputCode: {
    marginBottom: 30,
    borderWidth: 1,
    padding: 7,
    borderRadius: 50,
    paddingHorizontal: 20,
  },input: {
    marginBottom: 50,
    borderWidth: 1,
    padding: 7,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 50,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 14,
    marginBottom: 140,
  },
  textOne: {
    color: "#007bff",
    fontWeight: "500",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
    marginBottom: 16,
  },
  line: {
    width: 80,
    height: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  orText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  buttonTwo: {
    backgroundColor: "#7EA1FF",
    padding: 12,
    borderRadius: 50,
  },
  buttonTextTwo: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;