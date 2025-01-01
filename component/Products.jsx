import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const list = [
  {
    id: 1,
    name: "Oluwabukola Odunsi",
    product: "Royal Palms",
    productPercent: "90%",
  },
  {
    id: 1,
    name: "Oluwabukola Odunsi",
    product: "A'Maize",
    productPercent: "50%",
  },
  {
    id: 1,
    name: "Oluwabukola Odunsi",
    product: "Cattle Park",
    productPercent: "30%",
  },
  {
    id: 1,
    name: "Oluwabukola Odunsi",
    product: "Nutty Park",
    productPercent: "0%",
  },
];
export default function Products() {
  // const [isActive, setIsActive] = useState(true);
  // const [index, setIndex] = useState(0);

  const [circleProperty, isCircleProperty] = useState({
    isActive: true,
    index: 0,
  });

  const onProductClick = (index) => {
    isCircleProperty({
      isActive: true,
      index: index,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            gap: 50,
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 20,
          }}
        >
          <Text>Royal Palms</Text>
          <Text>A´maize</Text>
          <Text>Cattle Park</Text>
          <Text>Nutty Park</Text>
        </View>
      </ScrollView>
      <View style={{ alignItems: "center" }}>
        {list.map(() => (
          <View></View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
  },
});
