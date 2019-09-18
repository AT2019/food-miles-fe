import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import Hero from "../components/Hero.js";
import { Input } from "react-native-elements";
import { createUser } from "../../utils/api";
import styles from "../styles/main";
import font from "../styles/font";

export default class RegisterScreen extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };
  static navigationOptions = {
    title: ""
  };

  render() {
    return (
      <View>
        <Hero message="Register for FoodMiles!" icon="user" />

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

        <View style={regStyles.loginContainer}>
          <Input
            placeholder="Your email"
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
          />
          <Input
            placeholder="Your username"
            autoCapitalize="none"
            onChangeText={text => this.setState({ username: text })}
          />
          <Input
            placeholder="Your password"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />
          <TouchableOpacity style={regStyles.registerButton}>
            <Text
              style={[font.white, font.center]}
              onPress={() => this.signUp()}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  signUp() {
    const { username, email, password } = this.state;
    createUser(username, email, password).then(user => {
      if (user) {
        Alert.alert(`${user} successfully signed up!`);
        this.props.navigation.navigate("Dashboard");
      } else {
        Alert.alert("Error", "Incorrect Username, Email or Password", [
          { text: "OK" }
        ]);
      }
    });
  }
}

const regStyles = StyleSheet.create({
  loginContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  registerButton: {
    backgroundColor: "#388E3C",
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: "stretch",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  }
});
