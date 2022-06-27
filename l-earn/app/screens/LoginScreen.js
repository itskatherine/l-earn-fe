import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppHeader from "../components/AppHeader/AppHeader";

function LoginScreen(props) {
  return (
    <>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.background}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.headerContainer}>
          <AppHeader />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, alignContent: "center" },
  headerContainer: { alignItems: "center" },
});

export default LoginScreen;
