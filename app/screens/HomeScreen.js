import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Homepage"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Hero message="Welcome to FoodMiles!" />

        <TouchableOpacity title="Login to FoodMiles" style={styles.loginButton}>
          <Text style={styles.white}>Login to FoodMiles!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {},
  loginButton: {
    backgroundColor: "#388E3C"
  },
  white: {
    color: "#ffffff"
  }
});
