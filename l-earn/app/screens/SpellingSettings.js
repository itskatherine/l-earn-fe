import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";

import colors from "../config/colors";

function SpellingSettings() {
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <AppTitle title="Spelling Settings" />
      </View>
      <View style={styles.middleSpace}></View>
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
});

export default SpellingSettings;
