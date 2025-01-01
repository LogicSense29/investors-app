import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useAuthContext } from "./hooks/useAuthContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";

const { height } = Dimensions.get("window");

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "password must be at least 8 characters")
    .required("Please input password"),
});

export default function SignUp() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [messages, setMessages] = useState({ message: "Nothing Here" });
  const { authContext } = useAuthContext();

  async function handleLogin(credentials, setSubmitting) {
    const url = "https://1253-102-88-82-159.ngrok-free.app/api/user/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const json = await response.json();
        console.log(json);
        setSubmitting(false);
        return Alert.alert("ERROR", `${json.message}`, [
          {
            text: "OK",
            onPress: () => console.log("alert closed"),
          },
        ]);
      } else {
        const json = await response.json();
        authContext.login(json);
        // const storeData = async (value) => {
        //   try {
        //     const jsonValue = JSON.stringify(value);
        //     await AsyncStorage.setItem("token", jsonValue);
        //   } catch (e) {
        //     // saving error
        //     console.error(e);
        //   }
        // };
        // storeData(json);

        setSubmitting(false);
        // navigation.navigate("HomeScreen", json.info);
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

  function handleMessage(dataMessage) {
    setMessages(dataMessage);
  }

  function onInputFocus() {}

  return (
    <KeyboardAvoidingWrapper>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (values.email == "" && values.password == "") {
            handleMessage("Please Fill all The needed Info");
            setSubmitting(false);
          } else {
            handleLogin(
              { email: values.email, password: values.password },
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
            <Text style={styles.heading}>
              Welcome back,{" "}
              <Text style={{ fontFamily: "OpenSans_500Medium" }}>
                Oluwabukola.
              </Text>
            </Text>
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
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "OpenSans_400Regular",
                  color: "#890709",
                }}
              >
                Forgot password?
              </Text>
              {touched.password && errors.password && (
                <Text style={{ color: "red", fontSize: 12 }}>
                  {errors.password}
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
                  Login
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
    height: height - 100,
    justifyContent: "center",
    paddingHorizontal: 10,
    // borderColor: "red",
    // borderWidth: 5,
    // paddingVertical:30
  },
  heading: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 20,
    textAlign: "center",
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
