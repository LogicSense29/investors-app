import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const BackButton = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#890709",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons
        name="keyboard-arrow-left"
        size={30}
        color="white"
        onPress={handleBackButton}
      />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
