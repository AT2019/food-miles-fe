import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  Image
} from "react-native";
import Hero from "../components/Hero.js";
import { Input } from "react-native-elements";
import { loginUser } from "../../utils/api";
import styles from "../styles/main";
import font from "../styles/font";

export default class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };
  static navigationOptions = {
    title: ""
  };

  render() {
    return (
      <View>
        <Hero message="Login to FoodMiles!" icon="user" />
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
        <View style={loginStyles.loginContainer}>
          <Input
            placeholder="Your email"
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
          />
          <Input
            placeholder="Your password"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />
          <TouchableOpacity style={loginStyles.loginButton}>
            <Text
              style={[font.white, font.center]}
              onPress={() => this.checkLogin()}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  checkLogin() {
    const { email, password } = this.state;
    loginUser(email, password).then(token => {
      if (!token.msg) {
        AsyncStorage.setItem("email", email);
        AsyncStorage.setItem("jwt", token);
        this.props.navigation.navigate("Dashboard");
      } else {
        Alert.alert("Error", "Incorrect Email or Password", [{ text: "OK" }]);
      }
    });
  }
}

const loginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
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
