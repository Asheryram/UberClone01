import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RideScreen from './RideScreen';
import DeliveryScreen from './DeliveryScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context'
const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarStyle: { backgroundColor: 'white' ,marginTop: insets.top ,right:20,left:20,borderRadius:10, position:'absolute'}
    } }
    >
    <Tab.Screen name="Ride" component={RideScreen} />
    <Tab.Screen name="Delivery" component={DeliveryScreen} />
  </Tab.Navigator>
  )
}

export default HomeScreen;
