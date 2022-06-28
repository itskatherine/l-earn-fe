import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import GetSpellingButton from "../components/GetSpellingButton/GetSpellingButton";
import PiggyBank from "../components/PiggyBank/PiggyBank";
import colors from "../config/colors";

function GetSpelling(props) {
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <PiggyBank></PiggyBank>
        
      </View>
      <View style={styles.middleButton}>
        <GetSpellingButton />
      </View>
      <View style={styles.bottomBar}>
        <AppButton label="Parent Dashboard"/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: { flex: 0.5, backgroundColor: "white" },
  container: { flex: 1 },
  topBar: { flex: 1, backgroundColor: colors.secondary },
  middleButton: {
    flex: 4,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: { flex: 2, backgroundColor: colors.secondary, alignItems: "center",
  justifyContent: "center" },
});

export default GetSpelling;
