import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Keyboard } from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import AppButton from "../components/AppButton/AppButton";
import colors from "../config/colors";
import {
  getUserFromId,
  patchAmountEarned,
  patchMoneyAndQuestions,
} from "../utils/api";

function SpellingSettings({
  navigation,
  userId,
  amountEarned,
  setAmountEarned,
}) {
  const [pocketMoney, setPocketMoney] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    getUserFromId(userId).then((user) => {
      setPocketMoney(user.weekly_pocket_money);
      setNumberOfQuestions(user.weekly_question_number);
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

  const handleSubmit = () => {
    navigation.navigate("WarningScreen", {
      pocketMoney: pocketMoney,
      numberOfQuestions: numberOfQuestions,
    });
  };

  const handleGoBack = () => {
    navigation.navigate("GetSpelling");
  };

  const handlePickSpellings = () => {
    navigation.navigate("SpellingListsSelection");
  };
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <AppTitle color={colors.white} title="Parent Dashboard" />
      </View>
      <View style={styles.middleSpace}>
        <Text style={styles.text}>
          What is the pocket money reward per week?
        </Text>
        <View style={styles.moneyContainer}>
          <Text style={styles.pound}>£</Text>
          <TextInput
            value={pocketMoney}
            onChangeText={setPocketMoney}
            textAlign={"center"}
            style={styles.textInput}
          ></TextInput>
        </View>
        <Text style={styles.text}>
          How many words should the learner be tested on per week?
        </Text>
        <TextInput
          value={numberOfQuestions.toString()}
          onChangeText={setNumberOfQuestions}
          textAlign={"center"}
          style={styles.textInput}
        ></TextInput>
        <AppButton
          label="SUBMIT CHANGES"
          color={colors.fourthColor}
          onPress={handleSubmit}
        />
      </View>

      {keyboardStatus ? null : (
        <View style={styles.bottomBar}>
          <AppButton
            label="Pick words to spell"
            color={colors.primary}
            onPress={handlePickSpellings}
          ></AppButton>
          <AppButton
            label="back"
            color={colors.thirdColor}
            onPress={handleGoBack}
          ></AppButton>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: { flex: 0.5, backgroundColor: "white" },
  container: { flex: 1 },
  topBar: {
    flex: 1,
    backgroundColor: colors.fifthColor,
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
    backgroundColor: colors.fifthColor,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 50,
    width: 100,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    elevation: 10,
  },
  text: {
    padding: 5,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Pangolin",
  },
  moneyContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pound: {
    top: 10,
    right: 10,
    fontSize: 30,
    fontFamily: "Pangolin",
  },
});

export default SpellingSettings;
