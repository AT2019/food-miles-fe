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

          <TouchableOpacity style={styles.loginButton}>
            <Text style={font.white}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
