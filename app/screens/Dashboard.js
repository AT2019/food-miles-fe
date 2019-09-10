import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Hero from "../components/Hero.js";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Dashboard extends Component {
  static navigationOptions = {
    title: "Dashboard"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Hero message="Your Dashboard" icon="user" />

        <View style={styles.buttonList}>
          <TouchableOpacity
            title="Take a photo"
            style={styles.loginButton}
            onPress={() => navigate("Camera")}
          >
            <Text style={styles.white}>Start a Shop!</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Previous shops"
            style={styles.registerButton}
            onPress={() => navigate("PreviousShops")}
          >
            <Text style={styles.white}>Your Previous Shops</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="More info"
            style={styles.registerButton}
            onPress={() => navigate("Register")}
          >
            <Text style={styles.white}>More Food Miles Information</Text>
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
