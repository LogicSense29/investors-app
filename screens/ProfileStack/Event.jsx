// screens/EventScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  Platform,
  Text,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Press from "../../component/Press";
import { router } from "expo-router";

export default function EventScreen() {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(""); // Use Date object for date and time
  const [time, setTime] = useState(new Date()); // Initialize with a new Date object
  const [showTimePicker, setShowTimePicker] = useState(false);
  const route = useRoute();
  const {
    title: initialTitle,
    date: initialDate,
    time: initialTime,
    index,
  } = route.params || {}; // Get event data if passed

  // Set the date if passed from CalendarScreen
  useEffect(() => {
    if (route.params && route.params.date) {
      setDate(route.params.date);
    }
  }, [route.params]);

  // Function to handle saving the event (update or add new)
  const saveEvent = async () => {
    const event = { title, date, time: time.toISOString() }; // Store time as ISO string
    const existingEvents = await AsyncStorage.getItem("events");
    let events = existingEvents ? JSON.parse(existingEvents) : [];
  
    if (index !== undefined) {
      // Editing an existing event
      events[index] = event;
    } else {
      // Adding a new event
      events.push(event);
    }
  
    // Save updated events back to AsyncStorage
    await AsyncStorage.setItem("events", JSON.stringify(events));
  
    // Navigate back
    navigation.goBack(); // Use `goBack()` to return to the previous screen
  };
  

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false); // Close picker after selecting time
    setTime(currentTime);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 15 }}
      >
        <View style={{ marginTop: "30%" }}>
          {/* Input for Event Title */}
          <TextInput
            placeholder="Event Title"
            value={title}
            onChangeText={setTitle}
            style={{ marginBottom: 20 }}
          />

          {/* Button to show Time Picker */}
          <Press
            style={{
              height: 40,
              backgroundColor: "#890709",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
            onPress={showTimepicker}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              Pick Time
            </Text>
          </Press>
          {showTimePicker && (
            <DateTimePicker
              value={time} // Ensure date is always a Date object
              mode="time"
              display="default"
              onChange={onChangeTime}
            />
          )}

          {/* Display selected time */}
          <Text style={{ marginVertical: 10, fontSize: 18 }}>
            {time.toLocaleTimeString()} {/* Format the time display */}
          </Text>

          {/* Save Event Button */}
          <Text style={{ marginVertical: 10, fontSize: 18 }}>{date}</Text>
          <Press
            style={{
              height: 40,
              backgroundColor: "#890709",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
            onPress={saveEvent}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              Save Event
            </Text>
          </Press>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
