import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Hero from "../components/Hero.js";
import { Input } from "react-native-elements";
import styles from "../styles/main";
import font from "../styles/font";
import SignOut from "../components/SignOut.js";
import api from "../../utils/api";

export default class Dashboard extends Component {
  state = {
    inputCountry: null,
    countryInfo: undefined
  };

  static navigationOptions = {
    title: ""
  };

  notWorkingCall = () => {
    console.log("Called notWorkingCall!");
    const country = this.state.inputCountry;
    console.log(country);

    return api
      .get(`/countries/${country}`)
      .then(body => {
        console.log(body.body.country);
        console.log("Inside of API then block");
        this.setState({
          countryInfo: body.body.country
        });
      })
      .catch(err => console.log(err));

    // return api.getCountry(country).then(countryInfo => {
    // });
  };

  render() {
    return (
      <View>
        <Hero message="Fill in Information" icon="user" />
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
        <SignOut navigation={this.props.navigation} />

        <View>
          <Input
            placeholder="What country is the food from?"
            onChangeText={inputCountry => this.setState({ inputCountry })}
          />

          <TouchableOpacity
            style={notWorkingStyle.button}
            onPress={() => this.notWorkingCall()}
          >
            <Text style={[font.white, font.center]}>Submit Information</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const notWorkingStyle = StyleSheet.create({
  cont: {
    flex: 1
  },
  button: {
    backgroundColor: "#388E3C",
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: "stretch",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  banner: {
    backgroundColor: "#4CAF50",
    alignSelf: "stretch",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4
  }
});
