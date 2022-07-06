import React, { useState, onPress, Alert } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";

export default function LoginPage({ navigation }) {
  const [hiddenpassword, setHiddenPassword] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "1234" && email === "john_smith@gmail.com") {
      navigation.navigate("GetSpelling");
    } else {
      return alert("Incorrect Password or Email");
    }
  };
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <AppTitle title="Login Page" />
      </View>
      <View style={styles.middleSpace}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          textAlign={"center"}
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        ></TextInput>
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
        <AppButton
          label="Next"
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
    backgroundColor: colors.fourthColor,
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
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 10,
    elevation: 10,
  },
  text: {
    padding: 10,
    fontSize: 20,
    fontFamily: "Pangolin",
    textAlign: "center",
  },
});
