import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const VisitationSchedule = ({}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

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
      >
        <View>
          <Text>Visitation Schedule</Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default VisitationSchedule;
