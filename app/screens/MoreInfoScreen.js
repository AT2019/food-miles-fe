import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import Hero from "../components/Hero.js";

import styles from "../styles/main";
import font from "../styles/font";
import SignOut from "../components/SignOut.js";

export default class CameraScreen extends Component {
  state = {

    countries: null
  };

  static navigationOptions = {
    title: ""
  };

  render() {
    const { navigation } = this.props;
    const items = navigation.getParam('items');
    return (
      <>
        <View
        // style={styles.mainContainer}
        >
          <Hero message="Add more information to your shop" icon="plus" />

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
          <SignOut navigation={this.props.navigation} />
          {/* <View style={infoStyles.banner}></View> */}
        </View>
        <MapView
          style={mapStyles.map}
          region={{
            latitude: 51.5074,
            longitude: 0.1278,
            latitudeDelta: 20,
            longitudeDelta: 20
          }}
          showsUserLocation={true}
        >

          {items.map(country => {
            return (
              <View key={country._id}>
                <Marker
                  coordinate={{
                    latitude: country.latitude,
                    longitude: country.longitude
                  }}
                  title={country.capital}
                />
                <Polyline
                  coordinates={[
                    {
                      latitude: country.latitude,
                      longitude: country.longitude
                    },
                    {
                      latitude: 51.5074,
                      longitude: 0.1278
                    }
                  ]}
                  strokeWidth={2}
                  strokeColor={'#FF0000'}
                  lineCap={'round'}
                  geodesic={true}
                />
              </View>
            );
          })}
          <Marker
            coordinate={{
              latitude: 51.5074,
              longitude: 0.1278
            }}
            title={"London"}
          />
        </MapView>
        <Text style={[font.white, font.center]}>The map will go here</Text>
      </>
    );
  }
}

// const infoStyles = StyleSheet.create({
//   banner: {
//     backgroundColor: "#4CAF50",
//     marginTop: 10,
//     marginLeft: 10,
//     marginRight: 10,
//     paddingTop: 5,
//     paddingBottom: 5,
//     borderRadius: 4
//   },
//   menu: {}
// });

const mapStyles = StyleSheet.create({
  map: {
    borderRadius: 4,
    borderWidth: 2,
    width: 350,
    height: 450,
    marginTop: 20,
    marginBottom: 80,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: "center"
  }
});
