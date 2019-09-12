import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import { Input } from "react-native-elements";

import styles from "../styles/main";
import font from "../styles/font";

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: "Register for FoodMiles"
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Hero message="Register for FoodMiles!" icon="user" />

        <View style={regStyles.loginContainer}>
          <Input placeholder="Your username" />
          <Input placeholder="Your password" />

          <TouchableOpacity style={regStyles.registerButton}>
            <Text style={[font.white, font.center]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const regStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  registerButton: {
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
