import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import { Input } from "react-native-elements";

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login to FoodMiles"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Hero message="Login to FoodMiles!" icon="user" />

        <View style={styles.loginContainer}>
          <Input placeholder="Your username" />
          <Input placeholder="Your password" />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.white}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
  white: {
    color: "#FFFFFF",
    textAlign: "center"
  }
});
