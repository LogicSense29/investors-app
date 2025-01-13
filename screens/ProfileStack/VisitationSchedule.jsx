import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { PRIMARY } from "../../constants/Colors";

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

          <View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default VisitationSchedule;
