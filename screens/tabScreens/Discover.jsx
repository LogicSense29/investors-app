import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");

export default function Discover() {
  const [selectedButton, setSelectedButton] = useState("products");

  const [searchedItem, setSearchedItem] = useState("");
  const [ourProducts, setOurProducts] = useState([
    {
      image: require("../../assets/sales-flyer.png"),
      name: "UMéRA Homes",
      description: "UméRA Farmland allows you own a Farmland at ease",
    },
    {
      image: require("../../assets/farmm-flyer.png"),
      name: "UMéRA Business School",
      description: "UméRA Farmland allows you own a Farmland at ease",
    },
    {
      image: require("../../assets/sales-flyer.png"),
      name: "Farmland",
      description: "UméRA Farmland allows you own a Farmland at ease",
    },
    {
      image: require("../../assets/sales-flyer.png"),
      name: "AgroPark Services",
      description: "UméRA Farmland allows you own a Farmland at ease",
    },
    {
      image: require("../../assets/sales-flyer.png"),
      name: "Nutty Park",
      description: "UméRA Farmland allows you own a Farmland at ease",
    },
    {
      image: require("../../assets/sales-flyer.png"),
      name: "A'MAIZE",
      description: "UméRA Farmland allows you own a Farmland at ease",
    },
    {
      image: require("../../assets/amaize-flyer.png"),
      name: "CattlePark",
      description: "UméRA Farmland allows you own a Farmland at ease",
    },
  ]);

  const [visitation, setVisitation] = useState([
    {
      image: require("../../assets/sales-flyer.png"),
      description: "Mr Abu Visit",
      date: "May 26th 2024",
    },
    {
      image: require("../../assets/sales-flyer.png"),
      description: "Mr Abu Visit",
      date: "May 26th 2024",
    },
    {
      image: require("../../assets/sales-flyer.png"),
      description: "Mr Abu Visit",
      date: "May 26th 2024",
    },
    {
      image: require("../../assets/sales-flyer.png"),
      description: "Mr Abu Visit",
      date: "May 26th 2024",
    },
    {
      image: require("../../assets/sales-flyer.png"),
      description: "Mr Abu Visit",
      date: "May 26th 2024",
    },
    {
      image: require("../../assets/sales-flyer.png"),
      description: "Mr Abu Visit",
      date: "May 26th 2024",
    },
  ]);
  const [likedArray, setLikedArray] = useState(Array(ourProducts).fill(false));
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const handleIsActive = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleLike = (index) => {
    const updatedLikedArray = [...likedArray]; // Create a copy of the likedArray
    updatedLikedArray[index] = !updatedLikedArray[index]; // Toggle the liked state for the clicked index
    setLikedArray(updatedLikedArray); // Update the state with the new array
  };

  function products() {
    return (
      <>
        <View
          style={{
            flex: 1,
            gap: 40,
          }}
        >
          {ourProducts.map((item, index) => (
            <View style={styles.discoverItemContainer} key={index}>
              <View style={styles.discoverImageContainer}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={styles.discoverImage}
                />
              </View>
              <View
                style={{
                  flex: 0.2,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 0.8, paddingLeft: 10 }}>
                  <Text style={styles.discoverHeadingText}>{item.name}</Text>
                  <Text style={styles.discoverBodyText}>
                    {item.description}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    // backgroundColor: "red",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={() => {
                      handleLike(index);
                    }}
                  >
                    <View
                      style={{
                        borderWidth: 0.5,
                        borderColor: "black",
                        borderRadius: 25,
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1,
                      }}
                    >
                      {likedArray[index] ? (
                        <FontAwesome name="heart-o" size={26} color="black" />
                      ) : (
                        <FontAwesome name="heart" size={26} color="#890709" />
                      )}
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
        </View>
      </>
    );
  }

  function visitationGallery() {
    return (
      <View>
        <Text>Visit Gallery</Text>
      </View>
    );
  }

  function farmGallery() {
    return (
      <View>
        <Text>Farm Gallery</Text>
      </View>
    );
  }

  const displayDiscoverContent = () => {
    if (selectedButton === "products") {
      return products();
    } else if (selectedButton === "visitationGallery") {
      return visitationGallery();
    } else if (selectedButton === "farmGallery") {
      return visitationGallery();
    } else {
      setSelectedButton("products"); // or you can return a default content here
    }
  };

  const handleSearchItem = (inputText) => {
    setSearchedItem(inputText);
  };

  const listOfOurProducts = () => {
    return <View></View>;
  };

  const listOfVisitationGallery = () => {
    return <View></View>;
  };

  const listOfFarmGallery = () => {
    return <View></View>;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: height }}>
      <View style={styles.main}>
        <View style={styles.discoverTop}>
          <View style={styles.headingTop}>
            <Text style={{ fontFamily: "OpenSans_500Medium", fontSize: 20 }}>
              Discover
            </Text>
            <View style={styles.heartsContainer}>
              <FontAwesome name="heart" size={26} color="#890709" />
            </View>
          </View>
          <View>
            <TextInput
              style={styles.searchTopContainer}
              autoCapitalize="none"
              spellCheck={false}
              cursorColor="black"
              selectionColor="rgba(0,0,0,0.2)"
              selectTextOnFocus={true}
              value={searchedItem}
              onChangeText={handleSearchItem}
            />
            <View style={styles.searchTop}>
              <FontAwesome name="search" size={26} color="gray" />
            </View>
          </View>
        </View>

        {/* Discover options */}
        <View style={{ width: width }}>
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
              <Text
                style={[
                  styles.textOptions,
                  selectedButton === "products" && styles.activeOption,
                ]}
                onPress={() => {
                  handleIsActive("products");
                }}
              >
                Product
              </Text>
              <Text
                style={[
                  styles.textOptions,
                  selectedButton === "visitationGallery" && styles.activeOption,
                ]}
                onPress={() => {
                  handleIsActive("visitationGallery");
                }}
              >
                Visitation Gallery
              </Text>
              <Text
                style={[
                  styles.textOptions,
                  selectedButton === "farmGallery" && styles.activeOption,
                ]}
                onPress={() => {
                  handleIsActive("farmGallery");
                }}
              >
                Farm Gallery
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* List of Discover options */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* <FlatList data={{}} renderItem={listOfItems} /> */}
            {displayDiscoverContent()}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 25,
  },
  discoverTop: {
    width: "100%",
  },
  headingTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heartsContainer: {
    backgroundColor: "transparent",
    padding: 5,
    borderRadius: 50,
    justifyContent: "center",
  },
  searchTopContainer: {
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 50,
    fontFamily: "OpenSans_400Regular",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 20,
  },
  searchTop: {
    position: "absolute",
    top: "30%",
    left: "5%",
  },
  textOptions: {
    fontFamily: "OpenSans_500Medium",
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  activeOption: {
    fontFamily: "OpenSans_500Medium",
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 2,
    color: "black",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  discoverItemContainer: {
    height: 400,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
  },
  discoverImageContainer: {
    flex: 0.8,
  },
  discoverImage: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: "100%",
    height: "100%",
  },
  discoverHeadingText: {
    fontFamily: "OpenSans_500Medium",
    fontSize: 16,
  },
  discoverBodyText: {
    fontFamily: "OpenSans_400Regular",
    color: "gray",
  },
});
