import React, { useEffect, useState } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

const AuthScreen = () => {
  const [message, setMessage] = useState("");

  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      setMessage("This device does not support biometric authentication");
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      setMessage("No biometric records found on this device");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Use Passcode",
    });

    if (result.success) {
      onAuthenticate(true);
      setMessage("");
    } else {
      onAuthenticate(false);
      setMessage("Authentication failed");
    }
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.message}>{message}</Text>
          <Button title="Try Again" onPress={authenticate} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  message: {
    marginBottom: 20,
    fontSize: 16,
    color: "red",
  },
});

export default AuthScreen;
