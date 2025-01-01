import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useAuthContext } from "./hooks/useAuthContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";

import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const { height } = Dimensions.get("window");
const statusBarHeight = Constants.statusBarHeight;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Must be at least 10 digits")
    .max(13, "Must be at most 13 digits")
    .required("Required")
    .matches(/^[0-9]+$/, "Can not take in Strings"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "password must be at least 8 characters")
    .required("Please input password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "password must be contain Capital letters and symbols"
    ),
  cpassword: Yup.string()
    .min(8, "confirm password must be at least 8 characters")
    .oneOf([Yup.ref("password")], "Password does not match")
    .required("Confirm password is required"),
});

export default function SignUp() {
  const { authContext } = useAuthContext();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [messages, setMessages] = useState({ message: "Nothing Here" });
  const [inputBackground, setInputBackground] = useState("white");

  async function handleSignUp(credentials, setSubmitting) {
    const url = "https://df7a-105-113-18-155.ngrok-free.app/api/user/register";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const json = await response.json();
        setSubmitting(false);
        console.log(JSON.stringify(credentials));
        return Alert.alert("ERROR", `${json.message}`, [
          {
            text: "OK",
            onPress: () => console.log("alert closed"),
          },
        ]);
      } else {
        const json = await response.json();
        // AsyncStorage.setItem("token", json.info.token);
        // navigation.navigate("Home", info);
        authContext.signUp(json);

        addDoc(collection(db, "investors"), {
          ...credentials,
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      return Alert.alert("ERROR", `${err}`, [
        {
          text: "OK",
          onPress: () => console.log("alert closed"),
        },
      ]);
    }
  }

  // function handleMessage(dataMessage){
  //   setMessages(dataMessage);
  // }

  return (
    <KeyboardAvoidingWrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          password: "",
          cpassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (
            values.firstName == "" &&
            values.phoneNumber == "" &&
            values.email == "" &&
            values.password == ""
          ) {
            handleMessage("Please Fill all The needed Info");
            setSubmitting(false);
          } else {
            handleSignUp(
              {
                firstName: values.firstName,
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                email: values.email,
                password: values.password,
              },
              setSubmitting
            );
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isValid,
          setFieldTouched,
          isSubmitting,
          /* and other goodies */
        }) => (
          <View style={styles.formContainer}>
            <Text style={styles.heading}>Become a Stakeholder.</Text>
            <View>
              <TextInput
                placeholder="First Name"
                style={styles.textInput}
                value={values.firstName}
                onChangeText={handleChange("firstName")}
                onBlur={() => setFieldTouched("firstName")}
                selectionColor="rgba(0,0,0,0.3)"
              />
              {touched.firstName && errors.firstName && (
                <Text style={{ color: "red", fontSize: 12 }}>
                  {errors.firstName}
                </Text>
              )}
            </View>
            <View>
              <TextInput
                placeholder="Last Name"
                style={styles.textInput}
                value={values.lastName}
                onChangeText={handleChange("lastName")}
                onBlur={() => setFieldTouched("lastName")}
              />
              {touched.lastName && errors.lastName && (
                <Text style={{ color: "red", fontSize: 12 }}>
                  {errors.lastName}
                </Text>
              )}
            </View>
            <View>
              <TextInput
                placeholder="Phone Number (2347061608636)"
                style={styles.textInput}
                keyboardType="phone-pad"
                value={values.phoneNumber}
                onChangeText={handleChange("phoneNumber")}
                onBlur={() => setFieldTouched("phoneNumber")}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={{ color: "red", fontSize: 10 }}>
                  {errors.phoneNumber}
                </Text>
              )}
            </View>
            <View>
              <TextInput
                placeholder="meetbjfunk@gmail.com"
                style={styles.textInput}
                autoCapitalize="none"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && errors.email && (
                <Text style={{ color: "red", fontSize: 12 }}>
                  {errors.email}
                </Text>
              )}
            </View>
            <View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.textInput}
                  placeholder="●●●●●●●●●●●●●●●"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                />
                <FontAwesome
                  name={showPassword ? "eye" : "eye-slash"}
                  size={20}
                  color="rgba(0,0,0,0.6)"
                  style={styles.eye}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              </View>
              {touched.password && errors.password && (
                <Text style={{ color: "red", fontSize: 12 }}>
                  {errors.password}
                </Text>
              )}
            </View>
            <View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.textInput}
                  placeholder="●●●●●●●●●●●●●●●"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  value={values.cpassword}
                  onChangeText={handleChange("cpassword")}
                  onBlur={() => setFieldTouched("cpassword")}
                  selectionColor="red"
                />
                <FontAwesome
                  name={showPassword ? "eye" : "eye-slash"}
                  size={20}
                  color="rgba(0,0,0,0.6)"
                  style={styles.eye}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              </View>
              {touched.cpassword && errors.cpassword && (
                <Text style={{ color: "red", fontSize: 12 }}>
                  {errors.cpassword}
                </Text>
              )}
            </View>
            {!isSubmitting && (
              <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                <Text
                  style={[
                    styles.button,
                    {
                      backgroundColor: isValid
                        ? "#890709"
                        : "rgba(137,7,9,0.5)",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            )}
            {isSubmitting && (
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: isValid ? "#890709" : "rgba(137,7,9,0.5)",
                  },
                ]}
              >
                <ActivityIndicator size="small" color="white" />
              </TouchableOpacity>
            )}
            <Text
              style={{
                fontFamily: "OpenSans_400Regular_Italic",
                textAlign: "center",
              }}
            >
              UMéRa has your data encrypted{" "}
              <FontAwesome name="lock" size={16} color="#890709" />{" "}
            </Text>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    gap: 30,
    height: height - statusBarHeight - 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    // paddingVertical:30
  },
  heading: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 18,
  },
  con: {
    gap: 1,
  },
  textLabel: {
    fontFamily: "OpenSans_400Regular",
  },
  textInput: {
    width: "100%",
    borderRadius: 5,
    borderColor: "#333",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: "OpenSans_400Regular",
  },
  button: {
    fontFamily: "OpenSans_400Regular",
    backgroundColor: "#890709",
    textAlign: "center",
    color: "white",
    paddingVertical: 15,
    borderRadius: 5,
  },
  eye: {
    position: "absolute",
    right: "5%",
    top: "30%",
    bottom: 0,
  },
});
