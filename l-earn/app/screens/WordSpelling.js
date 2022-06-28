import React from "react";
import { View, StyleSheet, Text } from "react-native";
import GetSpellingButton from "../components/GetSpellingButton/GetSpellingButton";

function WordSpelling(props) {
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <Text>Hello</Text>
      </View>
      <View style={styles.middleButton}>
        <GetSpellingButton />
      </View>
      <View style={styles.bottomBar}>
        <Text>Hello</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: { flex: 0.5, backgroundColor: "white" },
  container: { flex: 1 },
  topBar: { flex: 1, backgroundColor: "red" },
  middleButton: {
    flex: 4,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: { flex: 2, backgroundColor: "blue" },
});

export default WordSpelling;
