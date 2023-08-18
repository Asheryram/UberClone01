import {StyleSheet,View,TouchableOpacity,Text} from 'react-native'
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { s } from "react-native-wind";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import {  useNavigation } from "@react-navigation/native";
import RideCardScreen from '../screens/RideCardScreen';
import BottomSheet from '@gorhom/bottom-sheet';

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const defaultMapRegion = {
  latitude: 1.505,
  longitude: 16.032,
  latitudeDelta: 70,
  longitudeDelta: 70,
};

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.animateToRegion(["origin", "destination"],{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }, 1000); // Adjust the duration (in milliseconds) for the animation as needed
    // Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

 

  
  

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };

    getTravelTime();
  }, [origin, destination, apiKey]);

  return (
    <View style={s`flex-1`}>

    <MapView
      ref={mapRef}
      style={s`flex-1`}
      mapType="mutedStandard"
      initialRegion={
        origin?.location
          ? {
              latitude: origin.location.lat,
              longitude: origin.location.lng,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }
          : defaultMapRegion
      }
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={apiKey}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
     
    </MapView>
    <View style ={[s`items-center justify-center   mb-3`,{position:"absolute"}]}>
      <TouchableOpacity style={s`w-20 h-10 items-center justify-center  bg-white`}
      onPress={()=>{ navigation.navigate('RideCardScreen')
      }}>
        <Text style ={s`text-xl`}>Confirm</Text>
      </TouchableOpacity >
      </View >
    </View>
  );
};
export default Map;

