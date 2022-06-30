import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  Keyboard,
} from "react-native";

import TopBar from "../components/TopBar/TopBar";
import colors from "../config/colors";
import * as Speech from "expo-speech";
import AppButton from "../components/AppButton/AppButton";
import extractWordList from "../utils/extractWordList";

const wordToSpell = "panda";

const exampleWordList = [
  { word_id: 1, user_id: 1, list_id: 3, word: "Hello", used: true },
  { word_id: 2, user_id: 1, list_id: 3, word: "Hello1", used: false },
  { word_id: 3, user_id: 1, list_id: 3, word: "Bye", used: true },
];

const wordsToTest = extractWordList(exampleWordList);

function SpellingTest() {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [currentWord, setCurrentWord] = useState(wordsToTest[0]);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleSpeak = () => {
    const thingToSay = `Can you spell ${wordToSpell}`;
    Speech.speak(thingToSay, { rate: 0.75 });
  };

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>{keyboardStatus ? null : <TopBar />}</View>
      <View style={styles.middleSpace}>
        <Button title="TAP TO HEAR QUESTION" onPress={handleSpeak}></Button>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoComplete="off"
          keyboardType="visible-password"
          // defaultValue="Type your answer here!"
        />
        <AppButton label="ENTER" color={colors.fourthColor} />
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
});

export default SpellingTest;
