import React, { useState, onPress } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";
import { NativeScreenNavigationContainer } from "react-native-screens";

export default function PinScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(typeof password);
    if (password === "1234") {
      navigation.navigate("SpellingSettings");
    }
  };
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <AppTitle title="Pin Page" />
      </View>
      <View style={styles.middleSpace}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          textAlign={"center"}
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.bottomBar}>
        <AppButton label="Next" color={colors.primary} onPress={handleLogin} />
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
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: 200,
    backgroundColor: colors.thirdColor,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    padding: 10,
    fontSize: 14,
    textAlign: "center",
  },
});
