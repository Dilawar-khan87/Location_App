import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import database from '@react-native-firebase/database';

const Home = () => {
  // initialLocation will show the initial region which will be shown on map when we open the app
  const [initialLocation, setinitialLocation] = React.useState({
    latitude: 25.396,
    longitude: 68.3578,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  React.useEffect(() => {
    getLocation();
  }, []);

  // this function will get the latitude and longitude of user and store them in firebase realtime databse
  const getLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log('getting location', info.coords.longitude);
      database()
        .ref('users/1')
        .set({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        })
        .then(e => {
          console.log(e);
        })
        .catch(err => console.log(err));
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={initialLocation}
        showsUserLocation={true}
        showsCompass={true}
        loadingEnabled={true}></MapView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
