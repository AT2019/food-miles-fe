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
      <View style={styles.mainContainer}>
        <Hero message="Add more information to your shop" icon="plus" />

        <View style={infoStyles.banner}>
          <Text style={[font.white, font.center]}>The map will go here</Text>
        </View>
      </View>
    );
  }
}

const infoStyles = StyleSheet.create({
  banner: {
    backgroundColor: "#4CAF50",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4
  },
  menu: {}
});
