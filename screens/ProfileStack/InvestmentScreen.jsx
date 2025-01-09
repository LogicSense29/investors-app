import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import BackButton from "../../component/BackButton";
import Invest from "../../component/Invest"

const InvestmentScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        position: "relative",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text>InvestmentScreen</Text>
      {/* <Invest /> */}
      <BackButton />
    </SafeAreaProvider>
  );
};

export default InvestmentScreen;

const styles = StyleSheet.create({});
