import {
    SafeAreaView,
    Text,
    Image,
    View,
    TouchableOpacity
  } from "react-native";
  import React from "react";
  import { AntDesign } from "@expo/vector-icons";
  import {s} from "react-native-wind"

  
  const OnBoardingScreen = ({navigation}) => {
  
    return (
      <SafeAreaView style={s`flex-1 pt-14 items-center bg-sky-500`}>
        <Text style={s`text-5xl mt-10 text-white font-bold`}>Uber</Text>
  
        <View
          style={s`mt-12 items-center justify-center`}>
          <Image
           style={{ width: 100, height: 100, resizeMode: "contain"}}
            source={{uri:"https://img.icons8.com/pastel-glyph/64/car--v1.png"}}
          />
        </View>
  
        <Text style={s`text-4xl text-white mt-24 font-bold mt-40`}>Move With Safety</Text>
        <View style={s`mt-24`}>
        <TouchableOpacity
      style={s`bg-black h-10 w-80 mt-24 items-center justify-center flex flex-row rounded`}
      onPress={() => navigation.navigate("MainScreen")}
    >
      <Text style={s`text-2xl ml-16 text-white  `}>Get Started</Text>
      <View style={s`h-5 w-5 ml-16 -mr-20`}>
        <AntDesign name="arrowright" size={24} color="white" />
      </View>
    </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default OnBoardingScreen;
  