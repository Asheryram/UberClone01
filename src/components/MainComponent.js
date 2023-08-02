import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from "../screens/HomeScreen";
import ServiceScreen from "../screens/ServiceScreen";
import AccountScreen from "../screens/AccountScreen";

const homeName = "Home";
const serviceName = "Service";
const accountName = "Account";
const Tab = createBottomTabNavigator();

const MainComponent = () => {
  return (
         <Tab.Navigator
         initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Service') {
              iconName = focused ? 'apps' : 'apps-outline';
            }
            
             else if (route.name === 'Account') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: { backgroundColor: 'white',marginBottom:20,right:20,left:20,borderRadius:10, position:'absolute'}
        })}
       >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={serviceName} component={ServiceScreen} />
        <Tab.Screen name={accountName} component={AccountScreen} />
      </Tab.Navigator>
    
  );
};

export default MainComponent;
