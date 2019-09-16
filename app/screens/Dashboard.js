import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Hero from '../components/Hero.js';

import styles from '../styles/main';
import font from '../styles/font';
import SignOut from '../components/SignOut.js';

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Hero message='Your Dashboard' icon='user' />
        <SignOut navigation={this.props.navigation} />
        <View style={styles.buttonList}>
          <TouchableOpacity
            title='Take a photo'
            style={styles.loginButton}
            onPress={() => navigate('Camera')}
          >
            <Text style={font.white}>Start a Shop!</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title='Previous shops'
            style={styles.registerButton}
            onPress={() => navigate('PreviousShops')}
          >
            <Text style={font.white}>Your Previous Shops</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
