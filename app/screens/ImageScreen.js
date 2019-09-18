import React, { Component } from "react";
import { View, Image } from "react-native";

export default class ImageScreen extends Component {
  static navigationOptions = {
    title: "Show your image!"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image
          source={{ uri: "data:image/png;base64," + this.props.base64 }}
        ></Image>
      </View>
    );
  }
}
