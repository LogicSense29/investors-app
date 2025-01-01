import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default ProfileText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 16,
  },
});
