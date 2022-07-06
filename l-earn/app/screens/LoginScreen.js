import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  LogBox,
} from "react-native";
import AppButton from "../components/AppButton/AppButton";
import AppHeader from "../components/AppHeader/AppHeader";
import colors from "../config/colors";

function LoginScreen({ navigation }) {
  return (
    <>
      <View style={styles.background}>
        <View style={styles.headerContainer}>
          <AppHeader />
          <Image
            style={styles.logo}
            source={require("../assets/pigicon.png")}
          ></Image>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            label="login"
            color={colors.thirdColor}
            onPress={() => {
              navigation.navigate("LoginPage");
            }}
          />
          <AppButton
            label="register"
            color={colors.secondary}
            onPress={() => {navigation.navigate("Register");}}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: "center",
    backgroundColor: colors.primary,
  },
  headerContainer: { alignItems: "center" },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    top: 200,
    width: 200,
    height: 200,
  },
});

export default LoginScreen;
