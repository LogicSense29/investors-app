import { View, Text, ScrollView, RefreshControl } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import { useNavigation } from "@react-navigation/native";
import { PRIMARY } from "../../constants/Colors";
import React, { useState, useEffect } from "react";
import Press from "../../component/Press";

const Affiliate = () => {

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

        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Affiliate