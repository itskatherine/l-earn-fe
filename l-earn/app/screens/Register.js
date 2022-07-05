import React, { useState, onPress, Alert, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";
import { postUser } from "../utils/api";

export default function Register({ navigation }) {
    const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [firstname, setFirstname] = useState("")
 const [lastname, setLastname] = useState("");
 const [loading, setLoading] = useState(true)
 
   console.log(password, "password16");
 useEffect(
   (password) => {
     console.log(password, "useeffect");
   },
   [loading]
 );

     const handleRegister = (email, password, firstname, lastname) => {
       let request_body = {};
      
           request_body.email = email;
           request_body.password = password;
           request_body.firstname = firstname;
           request_body.lastname = lastname;
           navigation.navigate("SpellingSettings");
        console.log(password, "handlereg")
     };
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <AppTitle title="Register Page" />
      </View>
      <ScrollView>
        <View style={styles.middleSpace}>
          <Text style={styles.text}>Firstname</Text>
          <TextInput
            textAlign={"center"}
            style={styles.textInput}
            value={firstname}
            onChangeText={setFirstname}
          ></TextInput>
          <Text style={styles.text}>Lastname</Text>
          <TextInput
            textAlign={"center"}
            style={styles.textInput}
            value={lastname}
            onChangeText={setLastname}
          ></TextInput>
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
       setLoading={false}
          ></TextInput>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <AppButton
          label="Next"
          color={colors.primary}
      onPress={handleRegister}
      
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
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    width: 200,
    padding: 10,
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
