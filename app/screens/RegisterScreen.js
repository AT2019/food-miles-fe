import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: "Register for FoodMiles"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Hero message="Register for FoodMiles!" />

        <View style={styles.loginContainer}>
          <Input placeholder="Your username" />
          <Input placeholder="Your password" />

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.white}>Register</Text>
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
  registerButton: {
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
