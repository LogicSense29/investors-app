import React from "react";
import Press from "./Press";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { router } from "expo-router";

const Back = ({children}) => {
  return (
      <Press
        onPress={() => router.back()}
        style={{
          backgroundColor: '#fff',
          width: 24,
          height: 24,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          // marginTop: 24,
        }}
      >
        {children}
      </Press>
  );
};

export default Back;
