import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store";
import MapScreen from "./src/screens/MapScreen";
import MainScreen from "./src/screens/MainScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="OnboardingScreen"
        >
          <Stack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
