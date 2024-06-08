import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";

// const ForgetPassword = ({ navigation }) => {
const ForgetPassword = () => {
  const [value, setValue] = useState("");
  // const [isSwitched, setLoginByEmail] = useState(true); //? What i did without the data
  const [username, setUsername] = useState("");

  //?
  const [email, setEmail] = useState("");
  const [userphone, setUserphone] = useState();
  const [isSwitched, setSwitched] = useState(true);
  //?

  //!
  const navigation = useNavigation();
  const route = useRoute();
  const selectedCode = route.params?.selectedCode || "+1";
  //!

  const handleForgetAccount = () => {
    // Add your account creation logic here (e.g., API call)

    // navigation.navigate("");  //This is not where we want to nagigate to but is for trying

    navigation.navigate("Home");
  };

  const handleCountryCodeInput = () => {
    navigation.navigate("CountryCodeInput");
  };

  // Change the value of text input to number
  const handelChange = (text) => {
    setValue(Number(text));
  };

  //?
  const handelEmailChange = (text) => {
    setEmail(text);
    console.log(email);
  };
  const handelPhoneChange = (text) => {
    setUserphone(text);
    console.log(userphone);
  };
  const goBack = () => {
    navigation.navigate("Login");
  };

  const handleToggleLoginMethod = () => {
    setSwitched(!isSwitched);
    // setEmail(""); //!Clear the email input when switching
  };
  //?

  //? What i did without the data
  // const handleToggleLoginMethod = () => {
  //   setLoginByEmail(!loginByEmail);
  //   setUsername(""); //!Clear the username input when switching
  // };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons
          name="chevron-back"
          size={24}
          //   color="black"
          onPress={goBack}
        />
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>
          {isSwitched ? "Enter your phone number" : "Enter your email address"}
        </Text>

        {/* <View style={styles.inputContainer}>
          <Text style={styles.inputText}>
            {isSwitched ? "Phone Number" : "Email"}
          </Text>

          <View style={styles.codeContainer}>
            {isSwitched ? (
              <View style={styles.codeContain}>
                <Text style={styles.codeText}>{selectedCode}</Text>
                <Ionicons
                  name="chevron-down"
                  size={20}
                  color="black"
                  marginRight={10}
                  onPress={handleCountryCodeInput}
                />
              </View>
            ) : (
              ""
            )}

            <TextInput
              style={styles.inputCode}
              placeholder={
                isSwitched
                  ? "Enter your phone number"
                  : "Enter your email address"
              }
              value={isSwitched ? username : value.toString()}
              onChangeText={isSwitched ? setUsername : handelChange}
              keyboardType={isSwitched ? "email-address" : "numeric"}
            />
          </View>
        </View> */}

        <View style={styles.codeContainer}>
          {isSwitched ? (
            <View style={styles.codeContain}>
              <Text style={styles.codeText}>{selectedCode}</Text>
              <Ionicons
                name="chevron-down"
                size={20}
                color="black"
                marginRight={10}
                onPress={handleCountryCodeInput}
              />

              <TextInput
                style={styles.inputCode}
                placeholder="Enter your phone number"
                value={userphone}
                onChangeText={(text) => handelPhoneChange(text)}
                keyboardType="numeric"
              />
            </View>
          ) : (
            <TextInput
              style={styles.inputCode}
              placeholder="Enter your email address"
              value={email}
              onChangeText={(text) => handelEmailChange(text)}
              keyboardType="email-address"
            />
          )}
        </View>

        <Pressable style={styles.button} onPress={handleForgetAccount}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>

        <Text style={styles.textBlue} onPress={handleToggleLoginMethod}>
          {isSwitched
            ? "Find your password by email"
            : "Find your password by phone"}
        </Text>
        <View style={styles.push}></View>
      </View>
    </View>
  );
};

ForgetPassword.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  icon: {
    marginTop: 40,
    marginBottom: 50,
    fontSize: 25,
  },
  innerContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 40,
  },
  inputText: {
    fontSize: 16,
    color: "grey",
    marginTop: 10,
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginTop: 7,
    marginBottom: 8,
  },
  codeContain: {
    flexDirection: "row",
    alignItems: "center",
  },
  codeText: {
    fontSize: 18,
    marginRight: 3,
  },
  inputCode: {
    marginBottom: 2,
  },
  textBlue: {
    color: "#007bff",
    marginTop: 15,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 10,
    marginTop: 7,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  push: {
    height: 450,
  },
});

export default ForgetPassword;
