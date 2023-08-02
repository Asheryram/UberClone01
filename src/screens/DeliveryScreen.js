import { View, Text } from 'react-native'
import React from 'react'
import {s} from "react-native-wind"
import {Ionicons} from "@expo/vector-icons"
const DeliveryScreen = () => {
  return (
    <View style={s`flex-1 justify-center items-center p-4`}>
    <Ionicons name="sad-outline" size={100} color="black" style={s`mb-4`} />

    <Text style={s`text-xl text-center mb-6`}>
      We're coming soon.
    </Text>
    <Text style={s`text-lg text-center mb-6`}>
      We are always expanding our coverage area.
    </Text>
    <Text style={s`text-lg text-center mb-6`}>
      Please check back in the future.
    </Text>
  </View>
  )
}

export default DeliveryScreen