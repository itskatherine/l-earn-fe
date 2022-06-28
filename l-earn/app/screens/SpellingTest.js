import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import TopBar from "../components/TopBar/TopBar";
import colors from "../config/colors";
import * as Speech from "expo-speech";

function SpellingTest(props) {
  const handleSpeak = () => {
    const thingToSay = "Can you spell KATHERINE RULES?";
    Speech.speak(thingToSay, { rate: 0.75 });
  };
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <TopBar />
      </View>
      <View style={styles.middleSpace}>
        <Button title="SPEAK" onPress={handleSpeak}></Button>
      </View>
      <View style={styles.bottomBar}></View>
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: {
    flex: 0.5,
    backgroundColor: "white",
  },
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
});

export default SpellingTest;
