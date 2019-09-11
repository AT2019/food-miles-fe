import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import { Input } from "react-native-elements";

import styles from "../styles/main";
import font from "../styles/font";

export default class Dashboard extends Component {
  static navigationOptions = {
    title: "Not Working?"
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Hero message="Fill in Information" icon="user" />

        <View style={styles.container}>
          <Input placeholder="What country is the food from?" />
          <Input placeholder="What is the food type? (dairy, etc)" />

          <TouchableOpacity style={notWorkingStyle.button}>
            <Text style={[font.white, font.center]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const notWorkingStyle = StyleSheet.create({
  button: {
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
