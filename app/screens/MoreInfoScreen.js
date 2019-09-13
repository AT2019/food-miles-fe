import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import Hero from "../components/Hero.js";

import styles from "../styles/main";
import font from "../styles/font";

export default class CameraScreen extends Component {
  state = {
    // countries: [
    //   {
    //     _id: "Scotland",
    //     capital: "Edinburgh",
    //     Distance: 534,
    //     Latitude: 55.953251,
    //     Longtitude: -3.70379
    //     // },
    //     // {
    //     //   _id: "Spain",
    //     //   capital: "Madrid",
    //     //   Distance: 1265,
    //     //   Latitude: 40.416775,
    //     //   Longtitude: -3.70379
    //     // },
    //     // {
    //     //   _id: "Wales",
    //     //   capital: "Cardiff",
    //     //   Distance: 212,
    //     //   Latitude: 51.481583,
    //     //   Longtitude: -3.17909
    //     // }
    // ]
  };

  static navigationOptions = {
    title: "More information!"
  };

  render() {
    console.log(this.props.navigation.state.params.countries);
    return (
      <>
        <View
        // style={styles.mainContainer}
        >
          <Hero message="Add more information to your shop" icon="plus" />
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
          <View>
            {this.props.navigation.state.params.countries.map(country => {
              return (
                <>
                  <Marker
                    key={country._id}
                    coordinate={{
                      latitude: country.Latitude,
                      longitude: country.Longtitude
                    }}
                    title={country.capital}
                  />
                  <Polyline
                    coordinates={[
                      {
                        latitude: country.Latitude,
                        longitude: country.Longtitude
                      },
                      {
                        latitude: 51.5074,
                        longitude: 0.1278
                      }
                    ]}
                    strokeWidth={2}
                    strokeColor={"#FF0000"}
                    lineCap={"round"}
                    geodesic={true}
                  />
                </>
              );
            })}
          </View>
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
