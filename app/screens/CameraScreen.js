import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import Hero from "../components/Hero";
import font from "../styles/font";
import RNPickerSelect from "react-native-picker-select";

export default class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    pickedType: false,
    currentType: null
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
        // Photo uri is the location of the photo.
        console.log(photo.base64);

        // This is where we pass `photo` into the API
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { hasCameraPermission, type, pickedType } = this.state;
    if (hasCameraPermission === null) {
      return <Text>No permissions for camera!</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {pickedType ? (
            <View style={camStyles.cameraContainer}>
              <Text>Food type: {pickedType}</Text>
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
          ) : (
            <View style={{ flex: 1 }}>
              <Hero
                message="What type of food are you scanning?"
                icon="camera"
              />

              <RNPickerSelect
                style={pickerStyles}
                onDonePress={done => {
                  this.setState({
                    pickedType: this.state.currentType
                  });
                }}
                onValueChange={value =>
                  this.setState({
                    currentType: value
                  })
                }
                items={[
                  { label: "Football", value: "football" },
                  { label: "Baseball", value: "baseball" },
                  { label: "Hockey", value: "hockey" }
                ]}
              />
            </View>
          )}
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

const pickerStyles = StyleSheet.create({
  inputIOS: {
    margin: 10,
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#4CAF50",
    width: "90%",
    borderRadius: 4,
    paddingLeft: 10,
    color: "#282828"
  },
  inputAndroid: {}
});
