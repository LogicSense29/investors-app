import React from "react";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "./screens/tabScreens/Home";
import Discover from "./screens/tabScreens/Discover";
import Person from "./screens/tabScreens/Me";
import ProfileStack from "./screens/ProfileStack/ProfileStack";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Discover") {
            iconName = "agriculture";
          } else if (route.name === "Me") {
            iconName = "person";
          }
          return <MaterialIcons name={iconName} size={26} color={color} />;
        },
        tabBarActiveTintColor: "#890709",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: { paddingHorizontal: 0, paddingVertical: 10 },
        // tabBarActiveBackgroundColor:{color: "blue", borderRadius: 5},
        tabBarLabelStyle: { fontFamily: "OpenSans_400Regular" },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Me" component={ProfileStack} />
    </Tab.Navigator>
  );
}
