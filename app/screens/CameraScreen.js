import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import Hero from "../components/Hero";
import font from "../styles/font";
import RNPickerSelect from "react-native-picker-select";
import { getCountryFromPhoto } from "../../utils/api";

export default class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    pickedType: false,
    currentType: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { status2 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
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

      await this.camera.takePictureAsync(options).then(async photo => {
        photo.exif.Orientation = 1;
        // Photo uri is the location of the photo.
        // console.log(photo.base64);
        // const manipPhoto = await ImageManipulator.manipulateAsync(
        //   photo.uri,
        //   [],
        //   {
        //     compress: 0.05,
        //     format: ImageManipulator.SaveFormat.PNG,
        //     base64: true
        //   }
        // );
        getCountryFromPhoto(photo);
        // This is where we pass `photo` into the API
      });
      // const image = await ImagePicker.launchCameraAsync({
      //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
      //   quality: 0.1
      // });
      // getCountryFromPhoto(image);
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
              <View style={camStyles.infoButton}>
                <Text style={font.white}>Food type: {pickedType}</Text>
              </View>
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
                    { label: "Dairy", value: "dairy" },
                    { label: "Fruit", value: "fruit" },
                    { label: "Vegetables", value: "veg" },
                    { label: "Juice", value: "juice" },
                    { label: "Meat", value: "meat" },
                    { label: "Fish", value: "fish" },
                    { label: "Tinned Goods", value: "tins" },
                    { label: "Frozen", value: "frozen" },
                    { label: "Chilled Meals", value: "chilled" },
                    { label: "Snacks", value: "snacks" },
                    { label: "Dried Food", value: "dried" }
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
    color: "white"
  },
  inputAndroid: {}
});
