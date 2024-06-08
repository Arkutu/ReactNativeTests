import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import ForgetPassword from "./Screens/ForgetPassword";
import CreateNewAccount from "./Screens/CreateNewAccount";
//import CountryCodeInput from "./Screens/CountryCodeInput";
//import PrivacyTermsScreen from "./Screens/PrivacyTermsScreen";
//import HomeScreen from "./Screens/HomeScreen";

const Stack = createStackNavigator();

const screens = [
  { name: "Login", component: LoginScreen  },
  { name: "Home", component: HomeScreen  },
  { name: "CreateAccount", component: CreateNewAccount  },
  { name: "ForgetPassword", component: ForgetPassword  },
 // { name: "CountryCodeInput", component: CountryCodeInput  },
  //{ name: "PrivateTermsScreen", component: PrivateTermsScreen  },
];


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
