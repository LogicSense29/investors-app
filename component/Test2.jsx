import { StyleSheet, Text, View, Dimensions } from "react-native";

import React from "react";

const list = [
  {
    id: 1,
    name: "Oluwabukola Odunsi",
    product: "Royal Palms",
    productPercent: 90,
  },
  {
    id: 2,
    name: "Oluwabukola Odunsi",
    product: "A'Maize",
    productPercent: 50,
  },
  {
    id: 3,
    name: "Oluwabukola Odunsi",
    product: "Cattle Park",
    productPercent: 30,
  },
  {
    id: 4,
    name: "Oluwabukola Odunsi",
    product: "Nutty Park",
    productPercent: 0,
  },
];

const { width, height } = Dimensions.get("window");

const Test2 = () => {
  const circleSize = (stock) => stock + 100;
  const center = { x: width / 2, y: height / 2 };
  return (
    <View style={{ flex: 1 }}>
      {list.map((item, index) => {
        const angle = (index / list.length - 1) * 2 * Math.PI;
        const width = circleSize(item.productPercent);
        const height = circleSize(item.productPercent);
        const radius = width / 2;
        const positionX = radius * Math.cos(angle);
        const positionY = radius * Math.sin(angle);
        return (
          <View
            key={item.id}
            style={[
              styles.itemContainer,
              {
                width: width,
                height: height,
                borderRadius: width / 2,
                right: 150 / 2 + positionX - 25,
                top: 150 / 2 + positionY - 25,
              },
            ]}
          >
            <Text>{item.productPercent}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Test2;

const styles = StyleSheet.create({
  itemContainer: {
    color: "#000",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});
