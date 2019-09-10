import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Homepage"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Hero message="Welcome to FoodMiles!" />

        <View style={styles.buttonList}>
          <TouchableOpacity
            title="Login to FoodMiles"
            style={styles.loginButton}
            onPress={() => navigate("Login")}
          >
            <Text style={styles.white}>Login to FoodMiles!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="Login to FoodMiles"
            style={styles.registerButton}
          >
            <Text style={styles.white}>Register for FoodMiles!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonList: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
    // alignItems: "center"
  },
  loginButton: {
    backgroundColor: "#388E3C",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10
  },
  registerButton: {
    backgroundColor: "#8BC34A",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10
  },
  white: {
    color: "#ffffff"
  }
});
