import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Picker
} from 'react-native';
import Hero from '../components/Hero.js';
import { Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import styles from '../styles/main';
import font from '../styles/font';
import SignOut from '../components/SignOut.js';

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Not Working?'
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Hero message='Fill in Information' icon='user' />
        <SignOut navigation={this.props.navigation} />

        <View style={styles.container}>
          <Input placeholder='What country is the food from?' />
          <View style={notWorkingStyle.banner}>
            <Text style={[font.white, font.center]}>Something here</Text>
          </View>

          <TouchableOpacity style={notWorkingStyle.button}>
            <Text style={[font.white, font.center]}>Submit Information</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const notWorkingStyle = StyleSheet.create({
  button: {
    backgroundColor: '#388E3C',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  banner: {
    backgroundColor: '#4CAF50',
    alignSelf: 'stretch',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4
  }
});
