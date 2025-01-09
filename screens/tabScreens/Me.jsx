import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileText from "../../component/ProfileText";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Products from "../../component/Products";
import Test2 from "../../component/Test2";

const { width, height } = Dimensions.get("window");
const placeholderImageSource = { uri: "https://picsum.photos/100/100" };

const tabs = ["Crypto", "Stocks", "ETFs", "Options"];

export default function Person() {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImageOptions, setShowImageOptions] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
    // Handle the selected index change
  };

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 150,
                  width: 150,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#890709", fontWeight: "bold" }}>
                  91%
                </Text>
                <Text style={{ color: "#890709" }}>Crypto</Text>
              </View>

              <View>
                <View
                  style={{
                    backgroundColor: "gray",
                    height: 90,
                    width: 90,
                    borderRadius: 100,
                    marginLeft: -10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>9%</Text>
                  <Text style={{ color: "#fff" }}>Stocks</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "gray",
                    height: 75,
                    width: 75,
                    borderRadius: 100,
                    marginLeft: -15,
                    marginTop: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>0%</Text>
                  <Text style={{ color: "#fff" }}>Options</Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "gray",
                  height: 75,
                  width: 75,
                  borderRadius: 100,
                  marginLeft: -30,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>0%</Text>
                <Text style={{ color: "#fff" }}>ETFs</Text>
              </View>
            </View>
          </View>
        );
      case 1:
        return (
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "gray",
                  height: 150,
                  width: 150,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  91%
                </Text>
                <Text style={{ color: "#fff" }}>Crypto</Text>
              </View>

              <View>
                <View
                  style={{
                    backgroundColor: "#fff",
                    height: 90,
                    width: 90,
                    borderRadius: 100,
                    marginLeft: -10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#890709", fontWeight: "bold" }}>9%</Text>
                  <Text style={{ color: "#890709" }}>Stocks</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "gray",
                    height: 75,
                    width: 75,
                    borderRadius: 100,
                    marginLeft: -15,
                    marginTop: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>0%</Text>
                  <Text style={{ color: "#fff" }}>Options</Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "gray",
                  height: 75,
                  width: 75,
                  borderRadius: 100,
                  marginLeft: -30,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>0%</Text>
                <Text style={{ color: "#fff" }}>ETFs</Text>
              </View>
            </View>
          </View>
        )
      case 2:
        return (
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "gray",
                  height: 150,
                  width: 150,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  91%
                </Text>
                <Text style={{ color: "#fff" }}>Crypto</Text>
              </View>

              <View>
                <View
                  style={{
                    backgroundColor: "gray",
                    height: 90,
                    width: 90,
                    borderRadius: 100,
                    marginLeft: -10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>9%</Text>
                  <Text style={{ color: "#fff" }}>Stocks</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "gray",
                    height: 75,
                    width: 75,
                    borderRadius: 100,
                    marginLeft: -15,
                    marginTop: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>0%</Text>
                  <Text style={{ color: "#fff" }}>Options</Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#fff",
                  height: 75,
                  width: 75,
                  borderRadius: 100,
                  marginLeft: -30,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#890709", fontWeight: "bold" }}>0%</Text>
                <Text style={{ color: "#890709" }}>ETFs</Text>
              </View>
            </View>
          </View>
        )
      case 3:
        return (
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "gray",
                  height: 150,
                  width: 150,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  91%
                </Text>
                <Text style={{ color: "#fff" }}>Crypto</Text>
              </View>

              <View>
                <View
                  style={{
                    backgroundColor: "gray",
                    height: 90,
                    width: 90,
                    borderRadius: 100,
                    marginLeft: -10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>9%</Text>
                  <Text style={{ color: "#fff" }}>Stocks</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#fff",
                    height: 75,
                    width: 75,
                    borderRadius: 100,
                    marginLeft: -15,
                    marginTop: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#890709", fontWeight: "bold" }}>0%</Text>
                  <Text style={{ color: "#890709" }}>Options</Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "gray",
                  height: 75,
                  width: 75,
                  borderRadius: 100,
                  marginLeft: -30,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>0%</Text>
                <Text style={{ color: "#fff" }}>ETFs</Text>
              </View>
            </View>
          </View>
        )
    }
  };

  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  const handleBackButton = () => {
    navigation.goBack();
  };
  const handleEditProfile = () => {
    navigation.navigate("ProfileDetail");
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      // showImageOptions(true);
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  const onPressList = (whichButtonWasPressed) => {
    switch (whichButtonWasPressed) {
      case "ProfileDetail":
        navigation.navigate("ProfileDetail");
        break;
      case "Documentation":
        navigation.navigate("Documentation");
        break;
      case "Investment":
        navigation.navigate("Investment");
        break;
      default:
      // code block
    }
  };

  // ...rest of the code remains same
  const onReset = () => {
    setShowImageOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  StatusBar.setBackgroundColor("#890709");
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: height + 100 }}>
        <View style={styles.mainContainer}>
          <View style={[styles.profileInfo, { zIndex: 1000 }]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={30}
                color="white"
                onPress={handleBackButton}
              />
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  justifyContent: "center",
                  width: 100,
                }}
                onPress={handleEditProfile}
              >
                <Text
                  style={{ fontFamily: "OpenSans_400Regular", color: "white" }}
                >
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 20, }}>
              <View style={{ backgroundColor: "#890709" }}>
                <View style={{ flexDirection: "row", gap: 50 }}>
                  {tabs.map((data, index) => (
                    <TouchableOpacity
                      style={{}}
                      onPress={() => handleIndexChange(index)}
                    >
                      <Text
                        style={[
                          styles.close,
                          selectedIndex === index
                            ? styles.active
                            : styles.inactive,
                        ]}
                      >
                        {data}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                {/* Display the content returned by renderContent */}
              </View>
              {renderContent()}
            </ScrollView>

            {/* Product Section  */}
          </View>

          <View
            style={{
              width: width,
              paddingHorizontal: 20,
              gap: 20,
            }}
          >
            <View style={styles.profileItem}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  onPressList("Documentation");
                }}
              >
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <MaterialCommunityIcons
                    name="file-document-outline"
                    size={26}
                    color="black"
                  />
                  <ProfileText>
                    <Text>Documentation</Text>
                  </ProfileText>
                </View>
                <MaterialIcons name="arrow-right" size={24} color="black" />
              </TouchableOpacity>

              {/* Payment History */}
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  onPressList("Payment History");
                }}
              >
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <MaterialIcons name="payment" size={24} color="black" />
                  <ProfileText>
                    <Text>Payment History</Text>
                  </ProfileText>
                </View>
                <MaterialIcons name="arrow-right" size={24} color="black" />
              </TouchableOpacity>

              {/* Investment History */}
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  onPressList("Investment");
                }}
              >
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <MaterialIcons name="attach-money" size={24} color="black" />
                  <ProfileText>
                    <Text>Investment History</Text>
                  </ProfileText>
                </View>
                <MaterialIcons name="arrow-right" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  onPressList("Visitation Schedule");
                }}
              >
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <MaterialIcons name="schedule-send" size={24} color="black" />
                  <ProfileText>
                    <Text>Visitation Schedule</Text>
                  </ProfileText>
                </View>
                <MaterialIcons name="arrow-right" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.profileItem}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  onPressList("Customer Service");
                }}
              >
                {/* customer Service */}
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <AntDesign name="customerservice" size={24} color="black" />
                  <ProfileText>
                    <Text>Customer Service</Text>
                  </ProfileText>
                </View>
                <MaterialIcons name="arrow-right" size={24} color="black" />
              </TouchableOpacity>

              {/* Affliate */}

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <FontAwesome5 name="people-arrows" size={24} color="black" />
                  <ProfileText>
                    <Text>Affiliate</Text>
                  </ProfileText>
                </View>
                <MaterialIcons name="arrow-right" size={24} color="black" />
              </TouchableOpacity>

              {/* Rate Us */}
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <MaterialIcons name="star-rate" size={24} color="black" />
                  <ProfileText>
                    <Text>Rate Us</Text>
                  </ProfileText>
                </View>
                <MaterialIcons name="arrow-right" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.profileItem}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  onPressList("Customer Service");
                }}
              >
                {/* customer Service */}
                <View style={{ flexDirection: "row", gap: 20 }}>
                  <MaterialIcons name="logout" size={24} color="#890709" />
                  <ProfileText>
                    <Text style={{ color: "#890709" }}>Log Out</Text>
                  </ProfileText>
                </View>
                <MaterialIcons name="arrow-right" size={24} color="#890709" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
    // </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    height: height + 150,
    paddingHorizontal: 20,
    gap: 25,
  },
  profileInfo: {
    backgroundColor: "#890709",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: "stretch",
    justifyContent: "space-between",
    height: "40%",
    width: width,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addImageIcon: {
    position: "absolute",
    // bottom: 50,
    right: 125,
  },
  profileItem: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    width: "100%",
    gap: 20,
  },
  close: {
    textAlign: "center",
    fontSize: 14,
    alignSelf: 'center',
  },
  active: {
    color: "white",
    borderRadius: 100,
    fontSize: 18,
  },
  inactive: {
    color: "gray",
    lineHeight: 20,
    borderRadius: 100,
  },
});
