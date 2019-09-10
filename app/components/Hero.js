import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function Hero(props) {
  const getHeight = props.height || 110;
  return (
    <View style={styles.hero}>
      <Text style={styles.white}>{props.message}</Text>
      <Icon name="plane" size={15} style={styles.whiteIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#4CAF50",
    height: 110,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#388E3C"
  },
  white: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20
  },
  whiteIcon: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10
  }
});
