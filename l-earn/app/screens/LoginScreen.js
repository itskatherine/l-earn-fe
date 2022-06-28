import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import AppHeader from "../components/AppHeader/AppHeader";
import colors from "../config/colors";

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
        <View style={styles.buttonContainer}>
          <AppButton
            label="login"
            color={colors.primary}
            onPress={() => {
              console.log("LOGIN");
            }}
          />
          <AppButton
            label="register"
            color={colors.secondary}
            onPress={() => {
              console.log("LOGIN");
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, alignContent: "center" },
  headerContainer: { alignItems: "center" },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default LoginScreen;
