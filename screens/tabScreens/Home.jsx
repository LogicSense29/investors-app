import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  AppState,
  RefreshControl,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../component/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function Home() {

  const [newUser, setNewUser] = useState(false);
  const [showROI, setShowROI] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [product, setProduct] = useState([

    {
      id: 1,
      name: "Cattle Park",
      image: require("../../assets/sales-flyer.png"),
    },
    {
      id: 2,
      name: "Nutty Park",
      image: require("../../assets/amaize-flyer.png"),
    },
    {
      id: 3,
      name: "Amaize",
      image: require("../../assets/farmm-flyer.png") || {
        uri: "https://picsum.photos/100/100",
      },
    },
    {
      id: 4,
      name: "Umera FarmLand",
      image: { uri: "https://picsum.photos/100/100" },
    },
    {
      id: 5,
      name: "Umera Homes",
      image: { uri: "https://picsum.photos/100/100" },
    },
  ]);

  const [numberOfInvestmentors, setNumberOfInvestors] = useState([
    {
      id: 1,
      productName: "Cattle Park",
      numberOfInvestment: 300,
    },
    {
      id: 2,
      productName: "Nutty Park",
      numberOfInvestment: 100,
    },
    {
      id: 3,
      productName: "amaize",
      numberOfInvestment: 200,
    },
    {
      id: 4,
      productName: "farmland",
      numberOfInvestment: 1000,
    },
  ]);

  const [investmentDetails, setInvestmentDetails] = useState([
    {
      id: 1,
      name: "Odunsi Oluwabukola",
      blockName: "BLOC789",
      roi: 700000,
      projectName: "Cattle Park",
    },
  ]);

  useEffect(() => {}, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const todo = () => {
    return <View></View>;
  };

  const products = ({ item }) => {
    return (
      <View style={{ width: width - 40 }}>
        <Image source={item.image} resizeMode="cover" style={styles.spImage} />
      </View>
      // <Image source={item.image} resizeMode='cover' style={styles.spImage}/>
    );
  };

  //Hero-box

  const productROI = ({ item }) => {
    return (
      <View style={styles.herobox}>
        <View style={{ justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "white", fontFamily: "OpenSans_400Regular" }}>
              {item.name}
            </Text>
          </View>
          <View>
            <Text style={{ color: "white", fontFamily: "OpenSans_400Regular" }}>
              ROI
            </Text>

            {/* ROI */}
            <Text
              style={{
                color: "white",
                fontFamily: "OpenSans_700Bold",
                fontSize: 25,
              }}
            >
              {showROI ? `$${item.roi}` : "******"}
            </Text>
            <Text style={{ color: "white", fontFamily: "OpenSans_400Regular" }}>
              {item.projectName}
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* <Text style={{ color:"white", fontFamily:"OpenSans_400Regular",}}>View more</Text> */}
          <Pressable
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setShowROI(!showROI);
            }}
          >
            <FontAwesome
              name={showROI ? "eye" : "eye-slash"}
              size={26}
              color="rgba(255,255,255,0.7)"
              style={styles.eye}
            />
          </Pressable>
          <Text style={{ color: "white", fontFamily: "OpenSans_400Regular" }}>
            Block NC34
          </Text>
        </View>
      </View>
    );
  };

  const numberOfInvestment = ({ item }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 100,
          borderWidth: 0.5,
          borderRadius: 5,
          width: 120,
          marginRight: 20,
          borderColor: "#890709",
        }}
      >
        <Text style={{ fontFamily: "OpenSans_400Regular" }}>
          {item.productName}
        </Text>
        <Text
          style={{
            fontFamily: "OpenSans_700Bold",
            fontSize: 25,
            color: "#890709",
          }}
        >
          {item.numberOfInvestment}+
        </Text>
        <Text style={{ fontFamily: "OpenSans_400Regular" }}>Stakeholders</Text>
      </View>
    );
  };

  function handleScroll(event) {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  }

  function getItemLayout(_, index) {
    return {
      length: width,
      offset: width * index,
      index: index,
    };
  }

  const renderDot = () => {
    return investmentDetails.map((_, index) => {
      if (activeIndex === index) {
        return (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "rgba(128,128,128,0.2)",
              marginHorizontal: 6,
            }}
            key={index}
          />
        );
      } else {
        return (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#890709",
              marginHorizontal: 6,
            }}
            key={index}
          />
        );
      }
    });
  };

  async function getInfo() {
    await AsyncStorage.getItem("token");
  }

  const reloadApp = () => {
    AppState.reload();
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.mainContainer}>
          <Header />
          <View style={styles.rowOne}>
            <FlatList
              data={investmentDetails}
              renderItem={productROI}
              horizontal
              keyExtractor={(item) => item.id.toString()}
              pagingEnabled
              onScroll={handleScroll}
              getItemLayout={getItemLayout}
              showsHorizontalScrollIndicator={false}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 10,
              }}
            >
              {renderDot()}
            </View>
          </View>

          <View style={styles.quickLinkContainer}>
            <Text style={[styles.sectionHeading, { paddingLeft: 0 }]}>
              Documentation
            </Text>

            <View style={styles.quickLink}>
              <TouchableOpacity style={styles.quickLinkItems}>
                <View style={styles.ql}>
                  <MaterialIcons
                    name="now-wallpaper"
                    size={26}
                    color="#890709"
                  />
                </View>
                <Text style={styles.quickLinkItemText}>Receipt</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickLinkItems}>
                <View style={styles.ql}>
                  <FontAwesome name="handshake-o" size={26} color="#890709" />
                </View>
                <Text style={styles.quickLinkItemText}>MOA</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickLinkItems}>
                <View style={styles.ql}>
                  <MaterialCommunityIcons
                    name="certificate-outline"
                    size={26}
                    color="#890709"
                  />
                </View>
                <Text style={styles.quickLinkItemText}>Certificate</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickLinkItems}>
                <View style={styles.ql}>
                  <FontAwesome5 name="landmark" size={26} color="#890709" />
                </View>
                <Text style={styles.quickLinkItemText}>DOA</Text>
              </TouchableOpacity>
            </View>
          </View>
          {newUser && (
            <View
              style={{
                width: width,
                backgroundColor: "#FFF1F1",
                paddingLeft: 20,
                paddingBottom: 10,
                paddingTop: 10,
                gap: 5,
              }}
            >
              {/* <Text style={styles.sectionHeading}>Complete Setup</Text> */}
              <View
                style={{
                  height: 100,
                  borderRadius: 5,
                  alignItems: "center",
                  width: 120,
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                <Text style={{ fontFamily: "OpenSans_400Regular" }}>
                  Complete Bio-Data form 🔖
                </Text>
                <View
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: 20,
                  }}
                >
                  <MaterialIcons name="navigate-next" size={26} color="black" />
                </View>
              </View>
            </View>
          )}

          <View style={styles.activeProducts}>
            <Text style={styles.sectionHeading}>Active Products</Text>
            <View>
              <FlatList
                data={numberOfInvestmentors}
                renderItem={numberOfInvestment}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                style={{ paddingLeft: 20 }}
              />
            </View>
          </View>

          <View style={styles.activeProducts}>
            <Text style={styles.sectionHeading}>Suggested Products</Text>
            <FlatList
              data={product}
              renderItem={products}
              horizontal
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              style={{ paddingLeft: 20 }}
            />
          </View>

          <View style={styles.recentActivity}>
            <Text
              style={{
                fontFamily: "OpenSans_500Medium",
                fontSize: 16,
                color: "white",
              }}
            >
              Recent Activity
            </Text>
            <View style={{ height: 50 }}>
              <Text
                style={{ fontFamily: "OpenSans_400Regular", color: "white" }}
              >
                No Recent Activity
              </Text>
            </View>
            <TouchableOpacity style={styles.refreshButton}>
              <Text
                style={{
                  fontFamily: "OpenSans_500Medium",
                  color: "white",
                  fontSize: 16,
                }}
              >
                Refresh Page
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    // paddingTop:20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    // borderColor:"red",
    // borderWidth:2,
    gap: 25,
  },
  herobox: {
    flexDirection: "row",
    backgroundColor: "#890709",
    borderRadius: 10,
    width: width - 40,
    height: 150,
    padding: 20,
    justifyContent: "space-between",
  },
  rowOne: {
    width: "100%",
    gap: 10,
  },
  rowOneText: {
    paddingHorizontal: 0,
  },
  rowOneImage: {
    width: "100%",
    height: 250,
  },
  sectionHeading: {
    fontFamily: "OpenSans_500Medium",
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
    paddingLeft: 20,
  },
  quickLinkContainer: {
    width: "100%",
    gap: 10,
  },
  quickLink: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  quickLinkItems: {
    alignItems: "center",
    gap: 5,
  },
  ql: {
    borderWidth: 0.5,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#890709",
    justifyContent: "center",
    alignItems: "center",
  },
  quickLinkItemText: {
    fontFamily: "OpenSans_400Regular",
  },
  completeSetup: {},
  activeProducts: {
    width: width,
    gap: 10,
  },
  spImage: {
    height: 200,
    width: 300,
    borderRadius: 10,
  },
  recentActivity: {
    width: "100%",
    backgroundColor: "#890709",
    borderRadius: 5,
    padding: 10,
  },
  refreshButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
  },
});
