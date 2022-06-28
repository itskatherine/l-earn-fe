import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

function SpellingGame(props) {
  return (
    <>
      <Text style={styles.question}>Can you spell panda?</Text>
      <TextInput style={styles.textInput} defaultValue="..." />
    </>
  );
}

const styles = StyleSheet.create({
  question: {},
  textInput: {
    margin: 10,
    top: 100,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default SpellingGame;
