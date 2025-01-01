import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const ProfileDetailScreen = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={30}
            color="#890709"
            onPress={handleBackButton}
          />
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({});
