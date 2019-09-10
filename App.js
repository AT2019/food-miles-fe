import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./app/screens/HomeScreen";

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const App = createAppContainer(MainNavigator);
export default App;
