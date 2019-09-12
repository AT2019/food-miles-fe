import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Hero from "../components/Hero.js";

import styles from "../styles/main";

export default class PreviousShopsScreen extends Component {
  static navigationOptions = {
    title: "Your Previous Shops"
  };

  // We need to use a list view - I haven't done this only because you need to specify data
  // in the ListView

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Hero message="Your previous shops!" icon="shopping-basket" />

        <View style={styles.banner}>
          <Text style={prevShopStyles.bannerInnerHeader}>
            30th September 2019
          </Text>
          <Text style={prevShopStyles.bannerInner}>Mile total: 740 miles</Text>
          <Text style={prevShopStyles.bannerInner}>Total items: 7</Text>
        </View>
        <View style={styles.banner}>
          <Text style={prevShopStyles.bannerInnerHeader}>2nd October 2020</Text>
          <Text style={prevShopStyles.bannerInner}>
            Mile total: 999,999 miles
          </Text>
          <Text style={prevShopStyles.bannerInner}>Total items: 756</Text>
        </View>
        <View style={styles.banner}>
          <Text style={prevShopStyles.bannerInnerHeader}>
            1st December 3009
          </Text>
          <Text style={prevShopStyles.bannerInner}>Mile total: 20 miles</Text>
          <Text style={prevShopStyles.bannerInner}>Total items: 1</Text>
        </View>
        <View style={styles.banner}>
          <Text style={prevShopStyles.bannerInnerHeader}>
            1st December 3009
          </Text>
          <Text style={prevShopStyles.bannerInner}>Mile total: 20 miles</Text>
          <Text style={prevShopStyles.bannerInner}>Total items: 1</Text>
        </View>
        <View style={styles.banner}>
          <Text style={prevShopStyles.bannerInnerHeader}>
            1st December 3009
          </Text>
          <Text style={prevShopStyles.bannerInner}>Mile total: 20 miles</Text>
          <Text style={prevShopStyles.bannerInner}>Total items: 1</Text>
        </View>
        <View style={styles.banner}>
          <Text style={prevShopStyles.bannerInnerHeader}>
            1st December 3009
          </Text>
          <Text style={prevShopStyles.bannerInner}>Mile total: 20 miles</Text>
          <Text style={prevShopStyles.bannerInner}>Total items: 1</Text>
        </View>
      </View>
    );
  }
}

const prevShopStyles = StyleSheet.create({
  bannerInner: {
    paddingLeft: 10,
    color: "#FFFFFF"
  },
  bannerInnerHeader: {
    paddingLeft: 10,
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
    paddingBottom: 6
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
