import { View, Text, ScrollView, RefreshControl, Modal } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { PRIMARY } from "../../constants/Colors";
import React, { useState, useEffect } from "react";
import Press from "../../component/Press";
import { Coins, Earn, Profile } from "../../component/Svg";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Affiliate = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [isShown, setIsShown] = useState(false);

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
        backgroundColor: "#051532",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{ alignSelf: "center", marginTop: 34, marginHorizontal: 15 }}
        >
          <Earn />
          <Text
            style={{
              fontSize: 48,
              fontWeight: "800",
              color: "#fff",
              textAlign: "center",
              marginTop: 24,
            }}
          >
            Earn Money{"\n"}By Refer
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 16,
            marginTop: 24,
            marginHorizontal: 15,
          }}
        >
          <View
            style={{
              width: 220,
              height: 63,
              backgroundColor: "#2F2E41",
              borderRadius: 24,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            <Text style={{ color: "#fff" }}>mir20220320</Text>
            <Text style={{ color: "#fff", fontWeight: "700" }}>Copy</Text>
          </View>
          <Press
            onPress={() => setIsShown(true)}
            style={{
              backgroundColor: "#F10086",
              width: 88,
              height: 63,
              borderRadius: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700" }}>Share</Text>
          </Press>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isShown}
            onRequestClose={() => {
              setIsShown(false);
            }}
          >
            <ScrollView
              style={{ flex: 1, backgroundColor: "rgba(1.6, 0.7, 0.5, 0.7)" }}
            >
              <View
                style={{
                  borderRadius: 16,
                  height: 628,
                  backgroundColor: '#fff',
                  marginTop: 50,
                  marginHorizontal: 11,
                }}
              >
                <View style={{ marginHorizontal: 11 }}>
                  <Press
                    style={{ alignSelf: "flex-end", marginTop: 16 }}
                    onPress={() => setIsShown(false)}
                  >
                    <Feather name="x" size={24} color="black" />
                  </Press>
                  <View style={{ alignSelf: "center", marginTop: 11 }}>
                    <Coins />
                  </View>
                  <View style={{ marginTop: 12 }} className="mt-10">
                    <Text
                      style={{
                        fontWeight: "800",
                        fontSize: 24,
                        textAlign: "center",
                        color: "#000",
                        marginTop: 17
                      }}
                      className="font-semibold text-2xl text-center text-black-900"
                    >
                      Congratulations!{"\n"}
                      You have just earned $50
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: "center",
                        color: "#000",
                        marginTop: 8,
                        textAlign: "center",
                        marginTop: 22,
                        fontWeight: '500'
                      }}
                    >
                      One of your friends has joined by{"\n"}your referral code.
                      Do more{"\n"}invitations to earn more.
                    </Text>
                  </View>
                  <Press
                    onPress={() => router.push("/Affiliate")}
                    style={{
                      height: 65,
                      borderRadius: 24,
                      backgroundColor: '#F10086',
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 40,
                      marginHorizontal: 16,
                    }}
                  >
                    <Text style={{ fontWeight: "600", color: '#fff' }}>
                      INVITE ANOTHER
                    </Text>
                  </Press>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            height: 454,
            marginTop: 24,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <View style={{ marginHorizontal: 32, marginTop: 32 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ color: "#051532", fontSize: 24, fontWeight: "800" }}
              >
                Invite a friend
              </Text>
              <Press>
                <AntDesign name="search1" size={24} color="black" />
              </Press>
            </View>

            <View style={{ marginTop: 40 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Profile />
                <View style={{ marginLeft: "-28%" }}>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Tongkun Lee
                  </Text>
                  <Text>Faceebook</Text>
                </View>
                <Press
                  style={{
                    backgroundColor: "#F0BCD9",
                    height: 38,
                    width: 58,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Invite
                  </Text>
                </Press>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 24,
                }}
              >
                <Profile />
                <View style={{ marginLeft: "-28%" }}>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Tongkun Lee
                  </Text>
                  <Text>Faceebook</Text>
                </View>
                <Press
                  style={{
                    backgroundColor: "#F0BCD9",
                    height: 38,
                    width: 58,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Invite
                  </Text>
                </Press>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 24,
                }}
              >
                <Profile />
                <View style={{ marginLeft: "-28%" }}>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Tongkun Lee
                  </Text>
                  <Text>Faceebook</Text>
                </View>
                <Press
                  style={{
                    backgroundColor: "#F0BCD9",
                    height: 38,
                    width: 58,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Invite
                  </Text>
                </Press>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 24,
                }}
              >
                <Profile />
                <View style={{ marginLeft: "-28%" }}>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Tongkun Lee
                  </Text>
                  <Text>Faceebook</Text>
                </View>
                <Press
                  style={{
                    backgroundColor: "#F0BCD9",
                    height: 38,
                    width: 82,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                  }}
                >
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    Accepted
                  </Text>
                </Press>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 24,
                }}
              >
                <Profile />
                <View style={{ marginLeft: "-28%" }}>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Tongkun Lee
                  </Text>
                  <Text>Faceebook</Text>
                </View>
                <Press
                  style={{
                    backgroundColor: "#F0BCD9",
                    height: 38,
                    width: 58,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Invite
                  </Text>
                </Press>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Affiliate;
