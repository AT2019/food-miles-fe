import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  AsyncStorage,
  Alert
} from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import Hero from "../components/Hero";
import font from "../styles/font";
import styles from "../styles/main";
import RNPickerSelect from "react-native-picker-select";
import { getCountryFromPhoto, postNewShoppingList, getCountryWithTypedInput } from "../../utils/api";
import { ListItem } from "react-native-elements"

export default class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    pickedType: false,
    currentType: null,
    currentShop: []
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { status2 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  }

  static navigationOptions = {
    title: ""
  };

  componentDidUpdate(prevProps, prevState) {
    const country = this.props.navigation.getParam("country")
    if (prevProps !== this.props) {
      const newData = { food_category: this.state.pickedType, latitude: country.latitude, longitude: country.longitude, distance: country.distance, country: country._id }
      this.setState(() => {
        this.state.pickedType = false
        return this.state.currentShop = [newData, ...this.state.currentShop]
      })
    }
  }
  // pick new product type
  // display on camera screen
  // on endShop make post request to DB and got to previous shop screen to view map

  async snapPhoto() {
    if (this.camera) {
      // alert("Taking a photo!");
      const options = {
        quality: 1,
        base64: true,
        fixOrientation: true,
        exif: true
      };

      await this.camera.takePictureAsync(options).then(async photo => {
        photo.exif.Orientation = 1;
        // Photo uri is the location of the photo.
        getCountryFromPhoto(photo)
          .then(country => {
            if (country.msg === "No country identified") {
              alert("Country not found, please try again or type manually")
            } else
              this.setState(country => {
                this.state.currentShop = [country, ...this.state.currentShop]
              })
          })
        // This is where we pass `photo` into the API
      });
    } Alert.alert("Country", "Morocco")
    getCountryWithTypedInput("China")
      .then(country => {
        // console.log("navigate")
        return this.props.navigation.navigate("Camera", { country })
      })
  }
  postShoppingList = async () => {
    try {
      const email = await AsyncStorage.getItem("email")
      const newObj = await { email, items: this.state.currentShop }
      postNewShoppingList(newObj)
        .then(() => this.props.navigation.navigate("PreviousShops"))

    } catch (error) {
      console.log(error)
    }

    // const objToSend = {}

    // this.props.navigation.navigate("PreviousShops")
  }

  render() {
    console.log(this.state.currentShop, "render")
    const { navigate } = this.props.navigation;
    const { hasCameraPermission, type, pickedType } = this.state;
    // const country = this.props.navigation.getParam("country")
    // if (country) {
    //   this.setState({ urrentShop: country, ...this.state.currentShop })
    // }
    // console.log(this.state.currentShop)
    if (hasCameraPermission === null) {
      return <Text>No permissions for camera!</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View>
          {pickedType ? (
            <View>
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
                  onPress={() => navigate("PreviousShops")}
                >
                  <Text style={font.white}>End Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={camStyles.infoButton}
                  onPress={() => navigate("NotWorking")}
                >
                  <Text style={font.white}>Not working?</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
              <View>
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
                    { label: "Dairy", value: "Dairy" },
                    { label: "Fruit", value: "Fruit" },
                    { label: "Vegetable", value: "Vegetable" },
                    { label: "Juice", value: "Juice" },
                    { label: "Meat", value: "Meat" },
                    { label: "Fish", value: "Fish" },
                    { label: "Tinned Goods", value: "Tinned Goods" },
                    { label: "Frozen", value: "Frozen" },
                    { label: "Chilled Meals", value: "Chilled" },
                    { label: "Snacks", value: "Snacks" },
                    { label: "Dried Food", value: "Dried Foods" }
                  ]}
                />
                <View style={camStyles.cameraContainer}>
                  <TouchableOpacity
                    style={camStyles.infoButton}
                    onPress={() => this.postShoppingList()}
                  >
                    <Text style={font.white}>End Shop</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={this.state.currentShop}
                  renderItem={({ item, index }) => (
                    <View style={styles.banner}>
                      <Text style={prevShopStyles.bannerInnerHeader}>
                        Type: {item.food_category}
                      </Text>
                      <Text style={prevShopStyles.bannerInner}>
                        Distance: {item.distance}
                      </Text>
                      <Text style={prevShopStyles.bannerInner}>
                        Country: {item.country}
                      </Text>
                    </View>
                    // <ListItem
                    //   style={styles.banner}
                    //   title={item.country}
                    //   subtitle={item.distance.toString()}
                    // />
                  )} keyExtractor={(item, index) => item.country}
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
const prevShopStyles = StyleSheet.create({
  bannerInner: {
    fontWeight: "bold",
    paddingLeft: 10,
    color: "#FFFFFF"
  },
  bannerBestShop: {
    margin: 5,
    textAlign: "center",
    color: "#FFD700",
    textShadowColor: "rgba(0,0,0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  bannerInnerHeader: {
    fontWeight: "bold",
    paddingLeft: 10,
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
    paddingBottom: 6
  }
})
