import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import AppLoading from "./component/AppLoading";
import Onboarding from "./component/Onboarding";
import LoginScreen from "./screens/OnboardingStack/LoginScreen";
import SignUpScreen from "./screens/OnboardingStack/SignUpScreen";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_700Bold,
  OpenSans_400Regular_Italic,
} from "@expo-google-fonts/open-sans";
import HomeScreen from "./screens/OnboardingStack/HomeScreen";
import { AuthContext } from "./component/context/Context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useReducer, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

function authReducer(state, action) {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSignedIn: true,
      };
    case "LOGIN":
      return { ...state, user: action.payload, isSignedIn: true };
    case "LOGOUT":
      return { ...state, user: null, isSignedIn: false };
    default:
      return state;
  }
}

const OnboardingStack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_700Bold,
    OpenSans_400Regular_Italic,
  });

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoading: true,
    isSignedIn: false,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        let jsonValue = await SecureStore.getItemAsync("authToken");
        jsonValue != null ? JSON.parse(jsonValue) : null;
        console.log("useEffect Ran again with", jsonValue);
        dispatch({ type: "RESTORE_TOKEN", payload: jsonValue });
      } catch (e) {
        // error reading value
        console.error(e);
      }
    };
    getData();
  }, []);

  const authContext = React.useMemo(() => ({
    login: async (data) => {
      try {
        console.log("I'm logged in");
        // const jsonValue = JSON.stringify(data);
        // await SecureStore.setItemAsync("authToken", jsonValue);
        dispatch({ type: "LOGIN", payload: data });
      } catch (error) {
        console.error("Error storing the authToken:", error);
      }
    },

    logout: async () => {
      dispatch({ type: "LOGOUT" });
    },

    signUp: async (data) => {
      // try {
      //   const jsonValue = JSON.stringify(data);
      //   await SecureStore.setItemAsync("authToken", jsonValue);
      // } catch (e) {
      //   // saving error
      //   console.error(e);
      // }
      dispatch({ type: "LOGIN", payload: data });
    },
  }));

  console.log("AuthContext state :", state);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (state.isLoading) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AuthContext.Provider value={{ ...state, authContext, dispatch }}>
          <NavigationContainer>
            <OnboardingStack.Navigator initialRouteName="Onboarding">
              {state.isSignedIn ? (
                <>
                  <OnboardingStack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                      headerShown: false,
                      headerBackVisible: false,
                      headerBackTitleStyle: { display: "none" },
                    }}
                  />
                </>
              ) : (
                <>
                  <OnboardingStack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                      headerShown: false,
                      navigationBarColor: "#890709",
                    }}
                  />
                  <OnboardingStack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                      title: "Login",
                      headerTitleStyle: {
                        fontFamily: "OpenSans_700Bold",
                        color: "#890709",
                      },
                      headerTintColor: "#890709",
                      headerTitleAlign: "center",
                      headerBackTitleVisible: false,
                      navigationBarColor: "white",
                      animationTypeForReplace: state.isSignedIn
                        ? "push"
                        : "pop",
                    }}
                  />
                  <OnboardingStack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{
                      title: "Sign Up",
                      headerTitleStyle: {
                        color: "#890709",
                        fontFamily: "OpenSans_700Bold",
                      },
                      headerTintColor: "#890709",
                      headerTitleAlign: "center",
                      headerBackTitleVisible: false,
                      navigationBarColor: "white",
                    }}
                  />
                </>
              )}
            </OnboardingStack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
