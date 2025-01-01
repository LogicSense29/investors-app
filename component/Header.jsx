import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const { width } = Dimensions.get("window");
const time = () => {
  const hour = new Date();
  const hourRange = hour.getHours();

  if (hourRange >= 0 && hourRange < 12) {
    return "Good morning";
  } else if (hourRange >= 12 && hourRange < 16) {
    return "Good Afternoon";
  } else if (hourRange >= 16 && hourRange < 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row", gap: 5 }}>
        {/* <Image
          source={{ uri: "https://picsum.photos/100/100" }}
          style={styles.image}
          resizeMode="contain"
        /> */}

        <View>
          <Text
            style={[
              styles.rowOneText,
              { fontFamily: "OpenSans_300Light", fontSize: 16 },
            ]}
          >
            {time()},
          </Text>
          <Text
            style={[
              styles.rowOneText,
              { fontFamily: "OpenSans_500Medium", fontSize: 20 },
            ]}
          >
            Oluwabukola!
          </Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <Ionicons name="notifications-outline" size={26} color="gray" />
        <Text style={styles.notifications}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    // height:"100%",
    flexDirection: "row",
    // gap:145,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  notificationContainer: {
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 5,
    borderRadius: 50,
  },
  notifications: {
    textAlign: "center",
    color: "white",
    // fontSize:15,
    backgroundColor: "#890709",
    width: 5,
    height: 5,
    borderRadius: 2.5,
    position: "absolute",
    right: 5,
    // top:5
  },
});
