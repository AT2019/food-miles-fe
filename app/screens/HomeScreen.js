import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Hero from '../components/Hero.js';

import styles from '../styles/main';
import font from '../styles/font';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Homepage'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View
          style={{
            flex: 1,
            resizeMode: 'cover'
          }}
        >
          <Image
            source={require('../../assets/bg.jpeg')}
            style={{ opacity: 0.5 }}
          />
        </View>
        <Hero message='Welcome to FoodMiles!' />

        <View style={styles.buttonList}>
          <TouchableOpacity
            title='Login to FoodMiles'
            style={styles.loginButton}
            onPress={() => navigate('Login')}
          >
            <Text style={font.white}>Login to FoodMiles!</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title='Login to FoodMiles'
            style={styles.registerButton}
            onPress={() => navigate('Register')}
          >
            <Text style={font.white}>Register for FoodMiles!</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            title="DASH  - temp"
            style={styles.registerButton}
            onPress={() => navigate("Dashboard")}
          >
            <Text style={font.white}>Dashboard - Temp!</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}
