import React from 'react';
import { StyleSheet, Text, View, Alert, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

export default function SignOut(props) {
  signOutUser = () => {
    Alert.alert(
      'ARE YOU SURE YOU WANT TO LOG OUT?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => this.removeData()
        }
      ],
      { cancelable: false }
    );
  };
  removeData = async () => {
    try {
      await props.navigation.navigate('Home');
      await AsyncStorage.removeItem('key:JWT');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Button title='Sign Out' onPress={this.signOutUser} />
    </View>
  );
}
