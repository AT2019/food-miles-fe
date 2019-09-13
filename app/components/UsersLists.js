import React, { Component } from 'react';
import { getUsers } from '../../utils/api';
import { Text, View } from 'react-native';

export class UsersLists extends Component {
  state = {
    users: null
  };
  render() {
    const { users } = this.state;
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = () => {
    getUsers();
    // .then(users => {
    //   this.setState({
    //     users
    //   });
    // });
  };
}

export default UsersLists;
