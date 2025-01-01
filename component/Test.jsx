import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

// Sample stock data
const stockData = [
  { user: "User1", stock: 50 },
  { user: "User2", stock: 70 },
  { user: "User3", stock: 10 },
  { user: "User4", stock: 90 },
  { user: "User5", stock: 20 },
];

const { width, height } = Dimensions.get("window");

const StockCircles = () => {
  // Sort data by stock in descending order
  const sortedData = [...stockData].sort((a, b) => b.stock - a.stock);

  // Calculate sizes for circles
  const maxStock = sortedData[0].stock; //First and Highest Stock
  const circleSize = (stock) => (stock / maxStock) * 100 + 60; // Base size + scaled size

  // Calculate positions in an arc around the largest circle
  const arcRadius = 110;
  const center = { x: width / 2, y: height / 2 };

  return (
    <View style={styles.container}>
      {sortedData.map((item, index) => {
        const size = circleSize(item.stock);
        const angle = (index / (sortedData.length - 1)) * Math.PI * 2;
        const x = center.x + arcRadius * Math.cos(angle) - size / 2;
        const y = center.y + arcRadius * Math.sin(angle) - size / 2;

        return (
          <View
            key={item.user}
            style={[
              styles.circle,
              {
                width: size,
                height: size,
                left: x,
                top: y,
              },
            ]}
          >
            <Text style={styles.text}>{item.user}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  circle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    backgroundColor: "#3498db",
  },
  text: {
    color: "#fff",
  },
});

export default StockCircles;
