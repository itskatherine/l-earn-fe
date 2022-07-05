import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";
import { NativeScreenNavigationContainer } from "react-native-screens";

export default function LoginPage({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("GetSpelling");
  };
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <AppTitle title="Login Page" />
      </View>
      <View style={styles.middleSpace}>
        <Text style={styles.text}>Email</Text>
        <TextInput textAlign={"center"} style={styles.textInput}></TextInput>
        <Text style={styles.text}>Password</Text>
        <TextInput textAlign={"center"} style={styles.textInput}></TextInput>
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
    height: 20,
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
