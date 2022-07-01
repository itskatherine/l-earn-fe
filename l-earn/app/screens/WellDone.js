import React from "react";
import { View, Button, TextInput, StyleSheet, Image, Text } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";
import TopBar from "../components/TopBar/TopBar";
import AppTitle from "../components/AppTitle/AppTitle";
function WellDone({ amountEarned, navigation }) {
  const handleGoBack = () => {
    navigation.navigate("GetSpelling");
  };

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <TopBar amountEarned={amountEarned} navigation={navigation} />
      </View>
      <View style={styles.middleSpace}>
        <AppTitle title="Congratulations!" />
        <Text>You have finished your spellings!</Text>
        <Image style={styles.star} source={require("../assets/star.png")} />

        <AppButton
          label="Back to Start"
          color={colors.fourthColor}
          onPress={handleGoBack}
        />
      </View>
      <View style={styles.bottomBar}></View>
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: {
    flex: 0.65,
    backgroundColor: "white",
  },
  container: { flex: 1 },
  topBar: {
    flex: 1,
    backgroundColor: colors.secondary,
    flexDirection: "row",
  },
  middleSpace: {
    flex: 5,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "70%",
    marginTop: 100,
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
    backgroundColor: colors.thirdColor,
    borderRadius: 15,
  },
  star: {
    width: 200,
    height: 200,
    margin: 40,
  },
});

export default WellDone;
