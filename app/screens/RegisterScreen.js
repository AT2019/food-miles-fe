import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default class RegisterScreen extends Component {
  static navigationOptions = {
    title: "Register for a FoodMiles account"
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.mainContainer}></View>;
  }
}

const styles = StyleSheet.create({});
