import React, { useState, onPress, Alert, useEffect } from "react";
import {
  Keyboard,
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";
import { postUser } from "../utils/api";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [loading, setLoading] = useState(true);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleRegister = () => {
    let request_body = {};

    request_body.email = email;
    request_body.pass_word = password;
    request_body.first_name = firstname;
    request_body.last_name = lastname;
    navigation.navigate("SpellingSettings");
    postUser(request_body);
  };
  return (
    <>
      <View style={styles.topBuffer}></View>
      {keyboardStatus ? null : (
        <View style={styles.topBar}>
          <AppTitle title="Register Page" />
        </View>
      )}

      <View style={styles.middleSpace}>
        <Text style={styles.text}>First name:</Text>
        <TextInput
          textAlign={"center"}
          style={styles.textInput}
          value={firstname}
          onChangeText={setFirstname}
        ></TextInput>
        <Text style={styles.text}>Last name:</Text>
        <TextInput
          textAlign={"center"}
          style={styles.textInput}
          value={lastname}
          onChangeText={setLastname}
        ></TextInput>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          textAlign={"center"}
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <Text style={styles.text}>Password:</Text>
        <TextInput
          textAlign={"center"}
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          setLoading={false}
        ></TextInput>
      </View>

      {keyboardStatus ? null : (
        <View style={styles.bottomBar}>
          <AppButton
            label="Next"
            color={colors.thirdColor}
            onPress={handleRegister}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: { flex: 0.5, backgroundColor: "white" },
  container: { flex: 1 },
  topBar: {
    flex: 1,
    backgroundColor: colors.thirdColor,
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
    padding: 5,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Pangolin",
  },
});
