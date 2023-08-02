import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../../slices/navSlice';
import {s} from "react-native-wind"



const data = [
    {
      id: "123",
      title: "Ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
      message: "Where do you want to go?"
    },
    {
      id: "456",
      title: "Package",
      image: "https://img.icons8.com/arcade/100/box.png",
      screen: "MapScreen",
      message: "Where is it going?"
    },

  ];
export default function NavOptions() {
 const navigation = useNavigation()
 const origin = useSelector(selectOrigin)

  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    horizontal
    renderItem={({ item }) => (
      <TouchableOpacity 
      style={s`bg-gray-200 m-4 w-36 h-20 rounded-md`}
       onPress={() => navigation.navigate(item.screen , { message:item.message })} 
      // disabled= {!origin}
      >
        <View  style={s`ml-16 h-15`}>
          <Image
            style={{ width: 60, height: 60, resizeMode: "contain"}}
            source={{ uri: item.image }}
          />
        </View>
          <Text style={s`ml-2 mb-2`}>{item.title}</Text>
      </TouchableOpacity>
    )} 
    />
  )
};
