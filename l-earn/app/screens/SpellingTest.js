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
import FeedbackMessage from "../components/FeedbackMessage/FeedbackMessage";
import pickRandomWord from "../utils/pickRandomWord";

const wordToSpell = "panda";

const exampleWordList = [
  { word_id: 1, user_id: 1, list_id: 3, word: "Apple", used: true },
  { word_id: 2, user_id: 1, list_id: 3, word: "Banana", used: false },
  { word_id: 3, user_id: 1, list_id: 3, word: "Carrot", used: true },
  { word_id: 1, user_id: 1, list_id: 3, word: "Dad", used: true },
  { word_id: 2, user_id: 1, list_id: 3, word: "Elephant", used: false },
  { word_id: 3, user_id: 1, list_id: 3, word: "Focus", used: true },
  { word_id: 1, user_id: 1, list_id: 3, word: "Gizmo", used: true },
  { word_id: 2, user_id: 1, list_id: 3, word: "Hello", used: false },
  { word_id: 3, user_id: 1, list_id: 3, word: "Igloo", used: true },
];

const wordsToTest = extractWordList(exampleWordList);

function SpellingTest() {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [currentWord, setCurrentWord] = useState(wordsToTest[0]);
  const [answer, setAnswer] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [correct, setCorrect] = useState("neither");
  const [soundButtonDisabled, setSoundButtonDisabled] = useState(false);

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
    const thingToSay = `Can you spell ${currentWord}`;
    Speech.speak(thingToSay, { rate: 0.75 });
  };

  const handleEnter = () => {
    if (answer.toUpperCase() === currentWord.toUpperCase()) {
      setFeedbackMessage("That's correct! Next word in 3 seconds...");
      setCorrect("correct");
      setAnswer("");
    } else {
      setFeedbackMessage("Not quite! Next word in 3 seconds...");
      setCorrect("incorrect");
      setAnswer("");
    }
    setSoundButtonDisabled(true);
    setTimeout(() => {
      setCorrect("neither");
      setCurrentWord(pickRandomWord(wordsToTest));
      setSoundButtonDisabled(false);
    }, 3000);
  };

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <TopBar />
      </View>
      <View style={styles.middleSpace}>
        <Button
          title="TAP TO HEAR QUESTION"
          onPress={handleSpeak}
          disabled={soundButtonDisabled}
        ></Button>
        <FeedbackMessage message={feedbackMessage} correct={correct} />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoComplete="off"
          keyboardType="visible-password"
          placeholder="Get spelling!"
          value={answer}
          onChangeText={setAnswer}
        />

        <AppButton
          label="ENTER"
          color={colors.fourthColor}
          onPress={handleEnter}
        />
      </View>
      {keyboardStatus ? null : <View style={styles.bottomBar}></View>}
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
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
    backgroundColor: colors.thirdColor,
    borderRadius: 15,
  },
});

export default SpellingTest;
