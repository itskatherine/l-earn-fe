import React, { useState, onPress } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";

export default function PinScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (password === "1234") {
      navigation.navigate("SpellingSettings");
    } else {
      alert("Incorrect passcode.");
      navigation.navigate("GetSpelling");
    }
    setPassword("");
  };
  return (
    <>
      <View style={styles.topBuffer}></View>

      <View style={styles.middleSpace}>
        <Text style={styles.text}>To access the parent dashboard,</Text>
        <Text style={styles.text}>please enter your passcode:</Text>
        <TextInput
          textAlign={"center"}
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.bottomBar}>
        <AppButton
          label="Enter"
          color={colors.secondary}
          onPress={handleLogin}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: { flex: 0.5, backgroundColor: "white" },
  container: { flex: 1 },
  topBar: {
    flex: 1,
    backgroundColor: colors.secondary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  middleSpace: {
    flex: 4,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    flex: 2,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Pangolin",
  },
});
