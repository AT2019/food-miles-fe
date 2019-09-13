import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Hero from '../components/Hero.js';
import { Input } from 'react-native-elements';

import styles from '../styles/main';
import font from '../styles/font';

export default class RegisterScreen extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  };
  static navigationOptions = {
    title: 'Register for FoodMiles'
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Hero message='Register for FoodMiles!' icon='user' />

        <View style={regStyles.loginContainer}>
          <Input
            placeholder='Your email'
            onChangeText={text => this.setState({ email: text })}
          />
          <Input
            placeholder='Your username'
            onChangeText={text => this.setState({ username: text })}
          />
          <Input
            placeholder='Your password'
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />
          <TouchableOpacity style={regStyles.registerButton}>
            <Text style={[font.white, font.center]} onPress={this.signUp}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  signUp() {}
}

const regStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerButton: {
    backgroundColor: '#388E3C',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  }
});
