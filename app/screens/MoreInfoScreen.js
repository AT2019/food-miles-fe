import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";

export default class CameraScreen extends Component {
  static navigationOptions = {
    title: "More information!"
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Hero message="Where did your food come from?" />

        <View></View>

        <Text>MAP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  camera: {
    width: 250,
    height: 250
  },
  snapButton: {
    backgroundColor: "#388E3C",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10,
    width: 250,
    marginTop: 10,
    alignItems: "center"
  },
  infoButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10,
    width: 250,
    marginTop: 10,
    alignItems: "center"
  },
  white: {
    color: "#FFFFFF"
  }
});
