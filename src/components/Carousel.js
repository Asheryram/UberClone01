import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    LogBox,
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
  import { s } from "react-native-wind";
  
  const Carousel = () => {
    const flatlistRef = useRef();
    // Get Dimensions
    const screenWidth = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);
  
    const getItemLayout = (data, index) => ({
      length: screenWidth,
      offset: screenWidth * index,
      index: index,
    });
  
    // Data for carousel
    const carouselData = [
      {
        id: "01",
        image: require("../../assets/icon.png"),
        text: "Send supplies across town",
      },
      {
        id: "02",
        image: require("../../assets/icon.png"),
        text: "Get out and about",
      },
      //   {
      //     id: "03",
      //     image: require("../../assets/icon.png"),
      //   },
    ];
  
    //  Display Images // UI
    const renderItem = ({ item, index }) => {
      return (
        <View style={{ width: screenWidth-60  }}>
          <Image
            source={item.image}
            style={{ height: 130, width: screenWidth-60, }}
          />
          <View style={[s`text-wrap w-52`, { position: "absolute" }]}>
            <Text style={s`font-bold text-2xl`}>{item.text}</Text>
          </View>
        </View>
      );
    };
  
    // Handle Scroll
    const handleScroll = (event) => {
      // Get the scroll position
      const scrollPosition = event.nativeEvent.contentOffset.x;
      // Get the index of the current active item
      const index = Math.round(scrollPosition / screenWidth);
      // Update the index
      setActiveIndex(index);
    };
  
    // Render Dot Indicators
    const renderDotIndicators = () => {
      return carouselData.map((dot, index) => {
        // if the active index === index
        if (activeIndex === index) {
          return (
            <View
              key={index}
              style={{
                backgroundColor: "black",
                height: 10,
                width: 20,
                borderRadius: 5,
                marginHorizontal: 6,
              }}
            ></View>
          );
        } else {
          return (
            <View
              key={index}
              style={{
                backgroundColor: "tomato",
                height: 10,
                width: 10,
                borderRadius: 5,
                marginHorizontal: 6,
              }}
            ></View>
          );
        }
      });
    };
  
    return (
      <View style={s`mx-10 my-8`}>
        <FlatList
          data={carouselData}
          ref={flatlistRef}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          style={{ width: screenWidth * 0.8 }} // Set the total width of the FlatList
          contentContainerStyle={{
            alignItems: "center", // Center the items horizontally within the FlatList
          }}
        />
  
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          {renderDotIndicators()}
        </View>
      </View>
    );
  };
  
  export default Carousel;
  
  const styles = StyleSheet.create({});
  