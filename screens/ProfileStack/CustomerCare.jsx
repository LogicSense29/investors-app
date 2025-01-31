import { View, Text, ScrollView, RefreshControl } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { PRIMARY } from "../../constants/Colors";
import React, { useState, useEffect } from "react";
import Press from "../../component/Press";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CustomerCare = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);

  // Handle the pull-to-refresh action
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchEvents(); // Re-fetch the events when user pulls to refresh
    setRefreshing(false);
  };

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 15 }}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className="mt-8 ">
          <Text className="text-2xl font-bold text-[#890709] text-center">
            Contact Us
          </Text>
          <Text className="text-sm font-medium text-[#890709] text-center">
            Any question or remarks? {"\n"} Just write us a message!
          </Text>
        </View>

        <View className=" mt-6 ">
          <View
            style={{ borderRadius: 8 }}
            className="rounded-xl bg-black h-[397] "
          >
            <View className="items-center ">
              <Text
                style={{ marginTop: 16 }}
                className="text-xl font-bold text-white text-center "
              >
                Contact Information
              </Text>
              <Text
                style={{ marginTop: 6 }}
                className="text-xs font-normal text-white text-center "
              >
                Say something to start a live chat!
              </Text>
            </View>
            <View style={{ marginTop: 12 }}>
              <Feather
                name="phone-call"
                size={24}
                color="white"
                className="text-center"
              />
              <Text
                style={{ marginTop: 10 }}
                className="text-xs font-normal text-white text-center"
              >
                +1012 3456 789
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Feather
                name="mail"
                size={24}
                color="white"
                className="text-center"
              />
              <Text
                style={{ marginTop: 10 }}
                className="text-xs font-normal text-white text-center"
              >
                demo@gmail.com
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Entypo
                name="location-pin"
                size={24}
                color="white"
                className="text-center"
              />
              <Text
                style={{ marginTop: 10 }}
                className="text-xs font-normal text-white text-center"
              >
                132 Dartmouth Street Boston, {"\n"} Massachusetts 02156 United States
              </Text>
            </View>
            <View style={{marginTop: 58}} className="flex-row justify-evenly ">
              <Entypo name="twitter" size={24} color="white" />
              <Entypo name="instagram" size={24} color="white" />
              <FontAwesome name="whatsapp" size={24} color="white" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default CustomerCare;
