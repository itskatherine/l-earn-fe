import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  Pressable,
  TouchableOpacity,
} from "react-native";

import TopBar from "../components/TopBar/TopBar";
import colors from "../config/colors";
import * as Speech from "expo-speech";
import AppButton from "../components/AppButton/AppButton";
import extractWordList from "../utils/extractWordList";
import FeedbackMessage from "../components/FeedbackMessage/FeedbackMessage";
import pickRandomWord from "../utils/pickRandomWord";
import {
  getAllUsersWords,
  getUserFromId,
  patchAmountEarned,
} from "../utils/api";
import capitalise from "../utils/capitalise";

function SpellingTest({
  userId,
  setPocketMoneyEarned,
  pocketMoneyEarned,
  amountEarned,
  setAmountEarned,
  navigation,
  fontFamily,
}) {
  //replace this with api call using /utils/getAllUsersWords

  const wordsToTest = extractWordList([]);
  const amountAlreadyEarned = 0.2; //from DB

  const [availablePocketMoney, setAvailablePocketMoney] = useState(100);
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [rewardPerCorrectAnswer, setRewardPerCorrectAnswer] = useState(100000);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [wordList, setWordList] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [correct, setCorrect] = useState("neither");
  const [soundButtonDisabled, setSoundButtonDisabled] = useState(false);
  const [wordLoaded, setWordLoaded] = useState(false);

  useEffect(() => {
    setCurrentWord(pickRandomWord(wordList));
    setWordLoaded(true);
  }, [wordList]);

  useEffect(() => {
    setRewardPerCorrectAnswer(availablePocketMoney / numberOfQuestions);
  }, [availablePocketMoney, numberOfQuestions]);

  useEffect(() => {
    getUserFromId(userId).then((user) => {
      setAvailablePocketMoney(user.weekly_pocket_money);
      setNumberOfQuestions(user.weekly_question_number);
    });
    getAllUsersWords(userId).then((words) => {
      setWordList(extractWordList(words));
    });
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

  useEffect(() => {
    if (amountEarned >= availablePocketMoney) {
      setPocketMoneyEarned(true);
      navigation.navigate("WellDone");
    }
  }, [amountEarned]);

  const handleSpeak = () => {
    const thingToSay = `Can you spell ${currentWord}`;
    Speech.speak(thingToSay, { rate: 0.75 });
  };

  const handleBack = () => {
    navigation.navigate("GetSpelling");
  };

  const handleEnter = () => {
    if (answer.toUpperCase() === currentWord.toUpperCase()) {
      setFeedbackMessage(
        `That's correct, it's spelled ${currentWord.toUpperCase()}! Next word in 3 seconds...`
      );
      Speech.speak("Well done");

      setCorrect("correct");
      setAnswer("");
      //api call to the DB

      //update piggybank state
      patchAmountEarned(userId, {
        amount_earned: rewardPerCorrectAnswer,
      }).then(() => {
        setAmountEarned((currentAmount) => {
          return currentAmount + rewardPerCorrectAnswer;
        });
      });

      //check if amount earned == pocket money available
      //if so, navigate to well done screen
      //setPocketMoneyEarned to true
    } else {
      setFeedbackMessage(
        `Not quite, the answer was ${currentWord.toUpperCase()}! Next word in 3 seconds...`
      );
      Speech.speak("Not quite");
      setCorrect("incorrect");
      setAnswer("");
    }
    setSoundButtonDisabled(true);
    setTimeout(() => {
      setCorrect("neither");
      setCurrentWord(pickRandomWord(wordList));
      setSoundButtonDisabled(false);
    }, 3000);
  };

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <TopBar
          userId={userId}
          amountEarned={amountEarned}
          navigation={navigation}
        />
      </View>
      <View style={styles.middleSpace}>
        <TouchableOpacity
          onPress={handleSpeak}
          disabled={soundButtonDisabled || !wordLoaded}
          style={
            soundButtonDisabled || !wordLoaded
              ? styles.buttonDisabled
              : styles.button
          }
        >
          <Text style={styles.buttonText}>Tap to hear word</Text>
        </TouchableOpacity>
        <FeedbackMessage message={feedbackMessage} correct={correct} />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoComplete="off"
          keyboardType="visible-password"
          placeholder="Let's get spelling!"
          value={capitalise(answer)}
          onChangeText={setAnswer}
          textAlign={"center"}
        />

        <AppButton
          label="ENTER"
          color={colors.fourthColor}
          onPress={handleEnter}
        />
      </View>
      {keyboardStatus ? null : (
        <View style={styles.bottomBar}>
          <AppButton
            label="BACK"
            color={colors.primary}
            onPress={handleBack}
          ></AppButton>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 75,
    backgroundColor: "#1ecbe1",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    elevation: 20,
  },
  buttonDisabled: {
    width: 200,
    height: 75,
    backgroundColor: "grey",
    opacity: 0.3,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.black,
    fontFamily: "Calm",
    fontSize: 30,
    textAlign: "center",
  },
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
    flex: 4,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    flex: 2,
    backgroundColor: colors.thirdColor,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 60,
    width: "80%",
    marginTop: 50,
    borderWidth: 3,
    borderColor: "grey",
    padding: 10,
    marginBottom: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    fontFamily: "Pangolin",
    elevation: 10,
    fontSize: 20,
  },
});

export default SpellingTest;
