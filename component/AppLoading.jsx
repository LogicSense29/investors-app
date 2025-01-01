import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  cancelAnimation,
} from "react-native-reanimated";

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export default function AppLoading() {
  const sv = useSharedValue(0);

  React.useEffect(() => {
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/logo.png")}
        style={[styles.box, animatedStyle]}
      />
      {/* <Text style={styles.text}>
        UMéRa has your data encrypted{" "}
        <FontAwesome name="lock" size={16} color="#890709" />{" "}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {},
  text: {
    fontFamily: "OpenSans_400Regular_Italic",
    textAlign: "center",
    marginTop: 150,
  },
});
