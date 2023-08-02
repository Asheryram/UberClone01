import { Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import {s} from "react-native-wind"

const RideOption = () => {
  const navigation = useNavigation();
  return (
    <View style={s`flex flex-row bg-gray-300 ml-4 mr-4 h-12 items-center rounded-3xl`}>
    <TouchableOpacity style={s`border-r border-grey-100 pr-8`}
    onPress={() => navigation.navigate('MapScreen', { message: 'Where do you want to go' })}>
      <View style={s`flex flex-row ml-8`}>
        <Ionicons name="md-search-sharp" size={20} color="black" />
        <Text style={s`text-xl ml-4`}>Where to?</Text>
      </View>
    </TouchableOpacity>
    <View>
      <TouchableOpacity style={s`flex flex-row ml-8 pl-2 bg-white rounded-lg h-7 w-24 items-center`}
       onPress={() => navigation.navigate('MapScreen', { message: 'When do you want to be picked up?' })}>
        <Ionicons name="time" size={20} color="black" />
        <Text style={s`text- ml-2 mr-2`}>Now</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default RideOption