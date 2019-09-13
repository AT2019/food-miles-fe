import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Hero from '../components/Hero.js';
import { Input } from 'react-native-elements';

import styles from '../styles/main';
import font from '../styles/font';
import UsersLists from '../components/UsersLists.js';

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: ''
  };
  static navigationOptions = {
    title: 'Login to FoodMiles'
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Hero message='Login to FoodMiles!' icon='user' />
        <UsersLists />
        <View style={loginStyles.loginContainer}>
          <Input
            placeholder='Your email'
            onChangeText={text => this.setState({ email: text })}
          />
          <Input
            placeholder='Your password'
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />
          <TouchableOpacity style={loginStyles.loginButton}>
            <Text
              style={[font.white, font.center]}
              onPress={_ => this.checkLogin()}
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
    if (email === 'admin@test.com' && password === 'admin') {
      this.props.navigation.navigate('Dashboard');
    } else {
      Alert.alert('Error', 'Incorrect Email or Password', [{ text: 'OK' }]);
    }
  }
}

const loginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
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
