import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function Hero(props) {
  return (
    <View style={styles.hero}>
      <Text style={styles.white}>{props.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#4CAF50",
    height: 100,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#388E3C"
  },
  white: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20
  }
});
