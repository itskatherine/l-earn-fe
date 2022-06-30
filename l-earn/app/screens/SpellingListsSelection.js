import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function SpellingListsSelection(props) {
  const selectedWordLists = [];
  const unSelectedWordLists = [];

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}></View>
      <View style={styles.middleSpace}>
        <Text style={styles.text}>Pick spelling lists for the learner:</Text>
      </View>
      <View style={styles.bottomBar}></View>
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: { flex: 0.5, backgroundColor: "white" },
  container: { flex: 1 },
  topBar: {
    flex: 0.5,
    backgroundColor: colors.secondary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  middleSpace: {
    flex: 6,
    backgroundColor: colors.primary,
  },
  bottomBar: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  },
});
export default SpellingListsSelection;
