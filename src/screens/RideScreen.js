import { SafeAreaView } from "react-native";
import React from "react";
import RideOption from "../components/RideOption";
import NavOptions from "../components/NavOptions";
import {s} from "react-native-wind"
import Carousel from "../components/Carousel";


const RideScreen = ({navigation}) => {
  return (
    <SafeAreaView style={s`mt-24`}>
     <RideOption/>
<NavOptions/>
<Carousel/>

    </SafeAreaView>
  );
};

export default RideScreen;
