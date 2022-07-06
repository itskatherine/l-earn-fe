import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
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
        <AppTitle title="You did it!" />
        <Text style={styles.text}>Well done for finishing your spellings!</Text>
        <Image style={styles.badge} source={require("../assets/turtle.png")} />

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
    backgroundColor: colors.thirdColor,
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
    backgroundColor: colors.primary,
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
  badge: {
    width: 250,
    height: 250,
    margin: 40,
  },
  text: {
    fontFamily: "Pangolin",
    fontSize: 20,
    paddingTop: 10,
  },
});

export default WellDone;
