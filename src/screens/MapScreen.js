import { View, Text,StyleSheet } from 'react-native'
import React ,{ useCallback}  from 'react'
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../slices/navSlice";
import { useFocusEffect, useNavigation } from 
"@react-navigation/native";
import { s } from "react-native-wind";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Map from '../components/Map';

const apiKey = process.env.EXPO_PUBLIC_API_KEY;


const MapScreen = ({ route }) => {

    const dispatch = useDispatch();
    const { message } = route.params;
    const navigation = useNavigation()
   
  
    useFocusEffect(
      useCallback(() => {
        dispatch(setOrigin(null));
        dispatch(setDestination(null));
      }, [])
    );
  
  return (
    <View style={s`bg-blue-200 flex-1 pt-10`}>
      <View style={s`h-1/2`}>
      <Text style={s`text-3xl ml-5 font-bold  items-center justify-center`}>{message}</Text>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={toInputBoxStyles}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
          }}
          query={{
            key: apiKey,
            language: "en",
          }}
          fetchDetails={true}
          returnKeyType={true}
          minLength={2}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          //   currentLocation={true}
          //   currentLocationLabel='Current location'
        />

        
<GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={toInputBoxStyles}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate('RideOptionsCard');
          }}
          query={{
            key: apiKey,
            language: "en",
          }}
          fetchDetails={true}
          returnKeyType={true}
          minLength={2}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          //   currentLocation={true}
          //   currentLocationLabel='Current location'
        />
     </View>
      <View style={s`flex-1 `}>
        <Map />
      </View>
    </View>
  );
};

export default MapScreen;

const toInputBoxStyles = StyleSheet.create({
    container: {
    //   backgroundColor: "white",
      paddingTop: 20,
      flex: 0,
  },
  textInput: {
      backgroundColor: "rgb(221, 221, 223)",
      borderRadius: 8,
      fontSize: 15,
  },
  textInputContainer: {
      paddingHorizontal: 15,
      paddingBottom: 10,
  },
  });