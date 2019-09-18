import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,

  FlatList
} from 'react-native';
import Hero from '../components/Hero.js';
import font from '../styles/font';
import styles from '../styles/main';
import SignOut from '../components/SignOut.js';
import { getPrevShoppingLists } from '../../utils/api';


export default class PreviousShopsScreen extends Component {
  state = {
    prevShoppingLists: null,
    isLoading: true,
    error: null
  };
  static navigationOptions = {
    title: ""
  };

  // We need to use a list view - I haven't done this only because you need to specify data
  // in the ListView

  render() {
    const { navigate } = this.props.navigation;
    const { prevShoppingLists, isLoading, error } = this.state;

    return (
      <>

        <View style={{ flex: 0 }}>
          <Hero message='Your previous shops!' icon='shopping-basket' />
          <SignOut navigation={this.props.navigation} />

          {/* <TouchableOpacity

        <View>
          <Hero message="Your previous shops!" icon="shopping-basket" />
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
          <TouchableOpacity

            style={styles.banner}
            onPress={() => navigate("MoreInfo")}
          >
            <Text style={[font.white, font.center]}>View the map</Text>
          </TouchableOpacity> */}
        </View>
        <FlatList

          style={{ height: 1 }}

          data={prevShoppingLists}
          renderItem={({ item }) => (
            <View style={styles.banner}>
              <TouchableOpacity
                style={styles.banner}
                onPress={() =>
                  navigate('MoreInfo', {
                    items: item.items
                  })
                }
              >
                {item === this.calcLowestDist(prevShoppingLists) && (
                  <Text style={prevShopStyles.bannerBestShop}>
                    Congratulations! This is your Best Shop!
                  </Text>
                )}
                <Text style={prevShopStyles.bannerInnerHeader}>
                  {new Date(item.date).toDateString()}
                </Text>
                <Text style={prevShopStyles.bannerInner}>
                  Mile Total: {item.total_distance} miles
                </Text>
                <Text style={prevShopStyles.bannerInner}>
                  Total Items: {item.total_items}
                </Text>
                <Text style={prevShopStyles.bannerInner}>
                  Average Distance: {this.calcAverage(item)} miles
                </Text>
                <Text style={prevShopStyles.bannerInner}>
                  Shopping List: {this.formatString(item.items)}
                </Text>
                {item === this.calcLowestDist(prevShoppingLists) && (
                  <Text style={prevShopStyles.bannerBestShop}>
                    Congratulations! This is your Best Shop!
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item._id}
        />
      </>
    );
  }

  calcLowestDist = prevShoppingLists => {
    return prevShoppingLists.reduce((acc, loc) =>
      acc.total_distance / acc.total_items <
      loc.total_distance / acc.total_items
        ? acc
        : loc
    );
  };

  formatString = items => {
    const foodCatArray = items.map(
      item => item.food_category + ' - ' + item.country
    );
    return foodCatArray.join(", ");
  };

  calcAverage = item => {
    let average = item.total_distance / item.total_items;
    return average;
  };

  componentDidMount() {
    this.fetchPrevShoppingLists();
  }

  fetchPrevShoppingLists = async () => {
    let email = await AsyncStorage.getItem("email");
    getPrevShoppingLists(email).then(prevShoppingLists => {
      this.setState({
        prevShoppingLists,
        error: null
      });
    });
  };
}

const prevShopStyles = StyleSheet.create({
  bannerInner: {
    paddingLeft: 10,
    color: "#FFFFFF"
  },
  bannerBestShop: {
    margin: 5,
    textAlign: 'center',
    color: '#FFD700',
    textShadowColor: 'rgba(0,0,0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  bannerInnerHeader: {
    paddingLeft: 10,
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
    paddingBottom: 6
  },
  cameraContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  camera: {
    width: 250,
    height: 250
  },
  snapButton: {
    backgroundColor: "#388E3C",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10,
    width: 250,
    marginTop: 10,
    alignItems: "center"
  },
  infoButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10,
    width: 250,
    marginTop: 10
  },
  white: {
    color: "#FFFFFF",
    textAlign: "center"
  }
});
