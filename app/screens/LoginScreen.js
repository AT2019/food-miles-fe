import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import { Input } from "react-native-elements";

import styles from "../styles/main";
import font from "../styles/font";

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login to FoodMiles"
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Hero message="Login to FoodMiles!" icon="user" />

        <View style={loginStyles.loginContainer}>
          <Input placeholder="Your username" />
          <Input placeholder="Your password" />
          <TouchableOpacity style={loginStyles.loginButton}>
            <Text style={[font.white, font.center]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const loginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    backgroundColor: "#388E3C",
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: "stretch",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  }
});
