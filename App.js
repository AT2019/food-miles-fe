import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import CameraScreen from "./app/screens/CameraScreen";
import Dashboard from "./app/screens/Dashboard";

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  Camera: {
    screen: CameraScreen
  },
  Dashboard: {
    screen: Dashboard
  }
});

const App = createAppContainer(MainNavigator);
export default App;
