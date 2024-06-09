import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import ForgetPassword from "./Screens/ForgetPassword";
import CreateNewAccount from "./Screens/CreateNewAccount";
import CreateOrganization from "./Screens/CreateOrganization";
import OrganizationScreen from "./Screens/OrganizationScreen";
import ChatScreen from "./Screens/ChatScreen"; 
import CreateChannelScreen from "./Screens/CreateChannelScreen";



const Stack = createStackNavigator();

const screens = [
  { name: "Login", component: LoginScreen },
  { name: "Home", component: HomeScreen },
  { name: "CreateAccount", component: CreateNewAccount },
  { name: "ForgetPassword", component: ForgetPassword },
  { name: "CreateOrganization", component: CreateOrganization },
  { name: "OrganizationScreen", component: OrganizationScreen },
  { name: "Chat", component: ChatScreen },
  { name: "CreateChannelScreen", component: CreateChannelScreen },
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CreateOrganization"
        screenOptions={{ headerShown: false }}
      >
        {screens.map((screen, index) => (
          <Stack.Screen key={index} name={screen.name} component={screen.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
