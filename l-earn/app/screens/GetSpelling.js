import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import DashboardButton from "../components/DashboardButton/DashboardButton";
import GetSpellingButton from "../components/GetSpellingButton/GetSpellingButton";
import PiggyBank from "../components/PiggyBank/PiggyBank";
import TopBar from "../components/TopBar/TopBar";
import colors from "../config/colors";

function GetSpelling({ navigation, amountEarned, pocketMoneyEarned }) {
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <TopBar amountEarned={amountEarned} />
      </View>
      <View style={styles.middleSpace}>
        {pocketMoneyEarned ? (
          <Text>You've done your spelling! Go outside, nerd.</Text>
        ) : (
          <GetSpellingButton navigation={navigation} />
        )}
      </View>
      <View style={styles.bottomBar}></View>
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
  button: {
    backgroundColor: "red",
  },
});

export default GetSpelling;
