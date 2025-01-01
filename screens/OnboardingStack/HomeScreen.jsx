import { View } from "react-native";
import React from "react";
import Tabs from "../../Navigation";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "red", height: 300 }}>
      <Tabs />
    </View>
  );
}
