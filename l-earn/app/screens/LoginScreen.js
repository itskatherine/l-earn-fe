import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import AppHeader from "../components/AppHeader/AppHeader";

function LoginScreen(props) {
  return (
    <>
      <AppHeader />
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.background}
        imageStyle={{ opacity: 0.5 }}
      ></ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
});

export default LoginScreen;
