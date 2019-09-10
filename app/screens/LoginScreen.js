import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import Icon from "react-native-vector-icons/FontAwesome";

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login to FoodMiles"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Hero message="Login to FoodMiles!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
