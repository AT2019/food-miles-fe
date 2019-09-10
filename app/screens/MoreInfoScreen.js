import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import { Input } from "react-native-elements";

export default class CameraScreen extends Component {
  static navigationOptions = {
    title: "More information!"
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Hero message="Where did your food come from?" />

        <View style={styles.banner}>
          <Input placeholder="Food Type" />
        </View>
        <View style={styles.banner}>
          <Text style={styles.white}>
            Your food has travelled: 923,842 miles!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    margin: 10,
    backgroundColor: "#4CAF50",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4
  },
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
    color: "#FFFFFF",
    textAlign: "center"
  }
});
