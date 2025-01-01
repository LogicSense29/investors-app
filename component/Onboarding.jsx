import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const flatListRef = useRef();

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === slides.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  });

  function getItemLayout(_, index) {
    return {
      length: width,
      offset: width * index,
      index: index,
    };
  }

  const slides = [
    {
      id: 1,
      image: require("../assets/buy.png"),
      title: "BUY",
      description:
        "Invest in your future with Umera. Secure your slice of prosperity through our exclusive buying opportunities for farm lands",
    },
    {
      id: 2,
      image: require("../assets/own.png"),
      title: "OWN",
      description:
        "Claim your stake in agricultural success with Umera. Discover the power to own and cultivate your own piece of fertile land",
    },
    {
      id: 3,
      image: require("../assets/earn-png.png"),
      title: "EARN",
      description:
        "Harness the potential to earn with Umera. Transform your investment into fruitful returns as you cultivate and harvest with us",
    },
  ];

  function renderItem({ item }) {
    return (
      <View style={{ width: width, gap: 20 }}>
        <View style={{ width: width, alignItems: "center" }}>
          <Image source={item.image} style={{ width: 300, height: 300 }} />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans_700Bold",
              fontSize: 18,
              color: "#890709",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{ textAlign: "center", fontFamily: "OpenSans_400Regular" }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  }

  function handleScroll(event) {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  }

  const renderDot = () => {
    return slides.map((_, index) => {
      if (activeIndex === index) {
        return (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "rgba(128,128,128,0.2)",
              marginHorizontal: 6,
            }}
            key={index}
          />
        );
      } else {
        return (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#890709",
              marginHorizontal: 6,
            }}
            key={index}
          />
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatList}>
        <FlatList
          data={slides}
          renderItem={renderItem}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          pagingEnabled
          onScroll={handleScroll}
          ref={flatListRef}
          getItemLayout={getItemLayout}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.dotContainer}>{renderDot()}</View>
      <View style={styles.onboardingButton}>
        <TouchableOpacity
          styles={styles.touchable}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                backgroundColor: "white",
                fontFamily: "OpenSans_400Regular",
                color: "#890709",
              },
            ]}
          >
            Create Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          styles={styles.touchable}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                borderColor: "white",
                borderWidth: 1,
                color: "white",
                fontFamily: "OpenSans_400Regular",
              },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flatList: {
    flex: 0.65,
    // borderColor: "red",
    // borderWidth:2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dotContainer: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#333"
  },
  onboardingButton: {
    flex: 0.3,
    backgroundColor: "#890709",
    // borderColor: "red",
    // borderWidth:2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: width,
  },
  touchable: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    // paddingHorizontal:20,
    fontSize: 16,
    paddingVertical: 20,
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: width - 80,
  },
});
