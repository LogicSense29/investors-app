import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const DocumentationScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaProvider
      style={[
        styles.main,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* <DocStyle>
        <View style={styles.dot}></View>
        <View style={styles.line}></View>
        <TextHeading>RECEIPT</TextHeading>
        <TextSub>Download</TextSub>
      </DocStyle>
      <DocStyle>
        <View style={styles.dot}></View>
        <TextHeading>MAO</TextHeading>
        <TextSub>Download</TextSub>
      </DocStyle>
      <DocStyle>
        <View style={styles.dot}></View>
        <TextHeading>Certificate</TextHeading>
        <TextSub>Download</TextSub>
      </DocStyle>
      <DocStyle>
        <View style={styles.dot}></View>
        <TextHeading>DAO</TextHeading>
        <TextSub>Download</TextSub>
      </DocStyle> */}
      <View>
        <Text
          style={{
            fontFamily: "OpenSans_400Regular",
            fontSize: 16,
            paddingHorizontal: 50,
          }}
        >
          Your Documents will be Available for Downloads when its Ready.
        </Text>
      </View>
      <View
        style={{
          width: "40%",
          height: "60%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.itemContainer}>
          <View View style={styles.dot}></View>
          <View style={styles.itemSubCon}>
            <TextHeading>RECEIPT</TextHeading>
            <TextSub>Upload</TextSub>
          </View>
        </View>
        <View style={styles.line}></View>

        <View style={styles.itemContainer}>
          <View View style={styles.dot}></View>
          <View style={styles.itemSubCon}>
            <TextHeading>MOA</TextHeading>
            <TextSub>Download</TextSub>
          </View>
        </View>
        <View style={styles.line}></View>

        <View style={styles.itemContainer}>
          <View View style={styles.dot}></View>
          <View style={styles.itemSubCon}>
            <TextHeading>CERT</TextHeading>
            <TextSub>Download</TextSub>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.itemContainer}>
          <View View style={styles.dot}></View>
          <View style={styles.itemSubCon}>
            <TextHeading>DOA</TextHeading>
            <TextSub>Download</TextSub>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "#890709",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-left"
          size={30}
          color="white"
          onPress={handleBackButton}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default DocumentationScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dot: {
    backgroundColor: "#890709",
    width: 20,
    height: 20,
    borderRadius: 20,
    position: "absolute",
    left: 0,
    top: 0,
  },
  line: {
    borderLeftColor: "#890709",
    borderLeftWidth: 3,
    width: 100,
    height: "93%",
    position: "absolute",
    left: 9,
    top: 0,
  },
  itemContainer: {
    width: "100%",
    alignItems: "space-between",
  },
  itemSubCon: {
    alignItems: "center",
  },
  textheading: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 16,
  },
  textsub: {
    fontFamily: "OpenSans_300Light",
    fontSize: 16,
  },
});

const DocStyle = styled.View`
  color: black;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding-bottom: 70px;
  border: 1px solid red;
`;

const TextHeading = styled.Text`
  font-family: "OpenSans_700Bold";
  font-size: 16px;
`;

const TextSub = styled.Text`
  font-family: "OpenSans_300Light";
  font-size: 16px;
`;
