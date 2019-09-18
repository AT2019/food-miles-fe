import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image
} from "react-native";
import Hero from "../components/Hero.js";

import styles from "../styles/main";
import font from "../styles/font";
import SignOut from "../components/SignOut.js";

export default class Dashboard extends Component {
  static navigationOptions = {
    title: ""
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Hero message="Your Dashboard" icon="user" />

        <View
          style={{
            flex: 1,
            resizeMode: "cover"
          }}
        >
          <Image
            source={require("../../assets/bg.jpeg")}
            style={{ opacity: 0.5 }}
          />
        </View>

        <View style={styles.buttonList}>
          <TouchableOpacity
            title="Take a photo"
            style={styles.loginButton}
            onPress={() => navigate("Camera")}
          >
            <Text style={font.white}>Start a Shop!</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Previous shops"
            style={styles.registerButton}
            onPress={() => navigate("PreviousShops")}
          >
            <Text style={font.white}>Your Previous Shops</Text>
          </TouchableOpacity>
          <SignOut navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
