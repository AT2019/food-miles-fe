import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Hero from "../components/Hero.js";

import styles from "../styles/main";
import font from "../styles/font";

export default class CameraScreen extends Component {
  static navigationOptions = {
    title: "More information!"
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Hero message="Where did your food come from?" />

        <View style={infoStyles.banner}>
          <Text style={[font.white, font.center]}>
            Your food in total has travelled: 923,842 miles!
          </Text>
        </View>
        <View style={infoStyles.banner}>
          <Text style={[font.white, font.center]}>
            Your last shop was 39 miles!
          </Text>
        </View>
      </View>
    );
  }
}

const infoStyles = StyleSheet.create({
  banner: {
    margin: 10,
    backgroundColor: "#4CAF50",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4
  }
});
