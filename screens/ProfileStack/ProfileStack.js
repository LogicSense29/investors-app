import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Person from "../tabScreens/Me";
import ProfileDetailScreen from "./ProfileDetailScreen";
import DocumentationScreen from "./DocumentationScreen";
import InvestmentScreen from "./InvestmentScreen";
import PaymentHistoryScreen from "./PaymentHistoryScreen";
import VisitationSchedule from "./VisitationSchedule";
import EventScreen from "./Event";
import SavedEventsScreen from "./SavedEventsScreen";
import PaymentHistory from "./PaymentHistory";
import Affiliate from "./Affiliate";
import CustomerCare from "./CustomerCare";

const ProfileStacks = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <ProfileStacks.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Person"
    >
      <ProfileStacks.Screen name="Person" component={Person} />
      <ProfileStacks.Group
        screenOptions={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      >
        <ProfileStacks.Screen
          name="ProfileDetail"
          component={ProfileDetailScreen}
        />
        <ProfileStacks.Screen
          name="Documentation"
          component={DocumentationScreen}
        />
        <ProfileStacks.Screen
          name="Payment History"
          component={PaymentHistoryScreen}
        />
        <ProfileStacks.Screen name="Investment" component={InvestmentScreen} />
        <ProfileStacks.Screen
          name="VisitationSchedule"
          component={VisitationSchedule}
        />
        <ProfileStacks.Screen name="Event" component={EventScreen} />
        <ProfileStacks.Screen
          name="SavedEventsScreen"
          component={SavedEventsScreen}
        />
        <ProfileStacks.Screen name="CustomerCare" component={CustomerCare} />
        <ProfileStacks.Screen name="Affiliate" component={Affiliate} />
        <ProfileStacks.Screen
          name="PaymentHistory"
          component={PaymentHistory}
        />
      </ProfileStacks.Group>
    </ProfileStacks.Navigator>
  );
}
