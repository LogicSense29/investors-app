import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import React from "react";

export default function KeyboardAvoidingWrapper({ children }) {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
