import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { PRIMARY } from "../../constants/Colors";
import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  Text,
} from "react-native";
import { Calendar } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const VisitationSchedule = ({}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [markedDates, setMarkedDates] = useState({});
  const [refreshing, setRefreshing] = useState(false); // For pull-to-refresh

  const fetchEvents = async () => {
    const savedEvents = await AsyncStorage.getItem("events");
    if (savedEvents) {
      const events = JSON.parse(savedEvents);
      const newMarkedDates = {};
      events.forEach((event) => {
        newMarkedDates[event.date] = { marked: true, dotColor: "blue" };
      });
      setMarkedDates(newMarkedDates);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle the pull-to-refresh action
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchEvents(); // Re-fetch the events when user pulls to refresh
    setRefreshing(false);
  };

  const onDayPress = (day) => {
    router.push({ pathname: "Event", params: { date: day.dateString } }); // Corrected navigation
  };

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
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
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: PRIMARY,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Schedule a visit
          </Text>
          <View style={{ marginTop: "30%" }}>
            <Calendar markedDates={markedDates} onDayPress={onDayPress} />
            <Button title="Add Event" onPress={() => router.push("Event")} />
            {/* // Add this button in CalendarScreen.js to navigate to SavedEventsScreen */}
            <View style={{ marginVertical: 20 }} />
            <Button
              title="View Saved Events"
              onPress={() => router.push("SavedEventsScreen")}
            />
          </View>{" "}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default VisitationSchedule;
