import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { s } from "react-native-wind";

const AccountScreen = () => {
  // Sample user data (replace with your actual user data)
  const userData = {
    name: "John Doe",
    wallet: "0.00",
    profileImage: require("../../assets/icon.png"), // Replace with the path to your profile image
  };

  const handleSignOut = () => {
    // Implement your sign-out logic here
    // For example, you can clear user session, remove tokens, etc.
    // This function will be executed when the user taps on "Sign Out"
  };

  return (
    <View style={s`flex-1 items-center justify-center p-4`}>
      <Image
        source={userData.profileImage}
        style={s`w-32 h-32 rounded-full mb-4`}
      />
      <Text style={s`text-6xl font-bold mb-2`}>{userData.name}</Text>

      <View style={s`bg-gray-200 flex-row mb-40 justify-center items-center h-28 w-56 rounded-2xl`}>
      <Text style={s`text-3xl font-bold mb-2`}>Wallet : </Text>
        <Text style={s`text-4xl font-bold mb-2`}>GH {userData.wallet}</Text>
      </View>
       

      <TouchableOpacity
        style={s`bg-red-500 mb-10 py-2 px-6 mt-7 rounded-md`}
        onPress={handleSignOut}
      >
        <Text style={s`text-white font-bold text-lg`}>Sign Out</Text>
      </TouchableOpacity>

      <View style={s`mb-20 flex-row`}>
        <Ionicons name="logo-github" size={20} color="black" style={s`mr-4`} />
        <Ionicons name="logo-twitter" size={20} color="black" style={s`mr-4`} />
        <Ionicons
          name="logo-linkedin"
          size={20}
          color="black"
          style={s`mr-4`}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
