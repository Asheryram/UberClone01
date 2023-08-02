import { View, Text, TouchableOpacity ,FlatList,Image} from 'react-native'
import React from 'react'
import {s} from 'react-native-wind'
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
    title: "Delivery",
    image: "https://links.papareact.com/28w",
    screen: "DeliveryScreen",
    message: "Where is it going?"
  },
  {
    id: "789",
    title: "Package",
    image: "https://img.icons8.com/arcade/100/box.png",
    screen: "MapScreen",
    message: "Where is it going?"
  },

];

const ServiceScreen = ({navigation}) => {
  return (
    <View style={s`flex-1 pt-6 px-2`}>
    <Text style={s`text-6xl mt-4 font-bold`}>Services</Text>
    <Text style={s`text-3xl mt-4`}>Go anywhere, get anything</Text>

    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    horizontal
    renderItem={({ item }) => (
      <TouchableOpacity 
      style={s`bg-gray-200 m-4 w-20 h-20 rounded-md`}
       onPress={() => navigation.navigate(item.screen , { message:item.message })} 
      // disabled= {!origin}
      >
        <View  style={s`ml-10 h-15`}>
          <Image
            style={{ width: 40, height: 40, resizeMode: "contain"}}
            source={{ uri: item.image }}
          />
        </View>
          <Text style={s`ml-2 mb-2`}>{item.title}</Text>
      </TouchableOpacity>
    )} 
    />
  </View>
  )
}

export default ServiceScreen
