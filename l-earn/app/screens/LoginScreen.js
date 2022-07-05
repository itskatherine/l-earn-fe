import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import AppHeader from "../components/AppHeader/AppHeader";
import colors from "../config/colors";

function LoginScreen({ navigation }) {
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
              navigation.navigate("LoginPage");
            }}
          />
          <AppButton
            label="register"
            color={colors.secondary}
            onPress={() => {}}
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
