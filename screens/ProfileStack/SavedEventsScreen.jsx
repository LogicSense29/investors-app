// screens/SavedEventsScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-paper";
// import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Press from "../../component/Press";

export default function SavedEventsScreen() {
  const navigation = useNavigation();

  const [events, setEvents] = useState([]); // State to hold the saved events
  const [refreshing, setRefreshing] = useState(false); // For pull-to-refresh

  // Function to fetch events from AsyncStorage
  const fetchEvents = async () => {
    const savedEvents = await AsyncStorage.getItem("events");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents)); // Update state with the saved events
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

  // Function to delete an event
  const deleteEvent = async (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    await AsyncStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  // Confirm deletion with an alert
  const confirmDelete = (index) => {
    Alert.alert(
      "Delete Event",
      "Are you sure you want to delete this event?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteEvent(index),
        },
      ],
      { cancelable: true }
    );
  };

  // Function to edit an event (navigate back to EventScreen with event details)
  const editEvent = (event, index) => {
    navigation.push({
      pathname: "Event", // Assuming 'Event' is your EventScreen route
      params: { ...event, index }, // Pass the event details to the EventScreen
    });
  };

  // Function to render each event item
  const renderItem = ({ item, index }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.date}</Text>
      <Text>{new Date(item.time).toLocaleTimeString()}</Text>

      {/* Edit and Delete buttons */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Button
          mode="outlined"
          onPress={() => editEvent(item, index)}
          style={{ marginRight: 10 }}
        >
          Edit
        </Button>
        <Button
          mode="outlined"
          onPress={() => confirmDelete(index)}
          style={{color: '890709'}}
        >
          Delete
        </Button>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ marginTop: "20%", marginHorizontal: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#890709", }}>
            Saved Events
          </Text>

          {events.length > 0 ? (
            <FlatList
              data={events}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <Text>No events saved yet.</Text>
          )}

          <Press
            mode="contained"
            style={{
              height: 40,
              backgroundColor: "#890709",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
            onPress={() => navigation.push("VisitationSchedule")} // Button to go back to the previous screen
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              Back
            </Text>
          </Press>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
