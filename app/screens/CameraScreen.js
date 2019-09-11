import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

import font from "../styles/font";

export default class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  }

  static navigationOptions = {
    title: "Scan your food!"
  };

  async snapPhoto() {
    if (this.camera) {
      alert("Taking a photo!");
      const options = {
        quality: 1,
        base64: true,
        fixOrientation: true,
        exif: true
      };

      await this.camera.takePictureAsync(options).then(photo => {
        photo.exif.Orientation = 1;
        console.log(photo);

        // This is where we pass `photo` into the API
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { hasCameraPermission, type } = this.state;
    if (hasCameraPermission === null) {
      return <Text>No permissions for camera!</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <View style={camStyles.cameraContainer}>
            <Camera
              type={type}
              ref={ref => (this.camera = ref)}
              style={camStyles.camera}
            ></Camera>
            <TouchableOpacity
              style={camStyles.snapButton}
              onPress={() => this.snapPhoto()}
            >
              <Text style={font.white}>Snap Photo!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={camStyles.infoButton}
              onPress={() => navigate("MoreInfo")}
            >
              <Text style={font.white}>More Information</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={camStyles.infoButton}
              onPress={() => navigate("NotWorking")}
            >
              <Text style={font.white}>Not working?</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const camStyles = StyleSheet.create({
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
    marginBottom: 3,
    width: 250,
    marginTop: 10,
    alignItems: "center"
  },
  infoButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 3,
    width: 250,
    marginTop: 10,
    alignItems: "center"
  }
});
