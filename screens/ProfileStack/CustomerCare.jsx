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
        <View>
          <Text className="text-2xl font-bold text-[#890709]">Contact Us</Text>
          <Text className="text-sm font-medium text-[#890709]">
            Any question or remarks? Just write us a message!
          </Text>
        </View>

        <View>
          <View>
            <Text className="text-xl font-bold text-white">
              Contact Information
            </Text>
            <Text className="text-xs font-normal text-white">
              Say something to start a live chat!
            </Text>
          </View>
          <View>
            <Feather name="phone-call" size={24} color="white" />
            <Text className="text-xs font-normal text-white">
              +1012 3456 789
            </Text>
          </View>
          <View>
            <Feather name="mail" size={24} color="white" />
            <Text className="text-xs font-normal text-white">
              demo@gmail.com
            </Text>
          </View>
          <View>
            <Entypo name="location-pin" size={24} color="white" />
            <Text className="text-xs font-normal text-white">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </Text>
          </View>
        </View>

        <View className="flex-row justify-evenly">
          <Entypo name="twitter" size={24} color="black" />
          <Entypo name="instagram" size={24} color="black" />
          <FontAwesome name="whatsapp" size={24} color="black" />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default CustomerCare;
