import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
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

  useEffect(() => {
    getUserFromId(userId).then((user) => {
      setPocketMoney(user.weekly_pocket_money);
      setNumberOfQuestions(user.weekly_question_number);
    });
  }, []);

  const handleNext = () => {
    const responseBody = {
      weekly_pocket_money: pocketMoney,
      weekly_question_number: numberOfQuestions,
    };
    patchMoneyAndQuestions(userId, responseBody);
    patchAmountEarned(userId, { amount_earned: -amountEarned });
    setAmountEarned(0);
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
        <AppTitle title="Parent Dashboard" />
      </View>
      <View style={styles.middleSpace}>
        <Text style={styles.text}>
          What is the pocket money reward per week?
        </Text>
        <TextInput
          value={pocketMoney}
          onChangeText={setPocketMoney}
          textAlign={"center"}
          style={styles.textInput}
        ></TextInput>
        <Text style={styles.text}>
          How many words should the learner be tested on per week?
        </Text>
        <TextInput
          value={numberOfQuestions.toString()}
          onChangeText={setNumberOfQuestions}
          textAlign={"center"}
          style={styles.textInput}
        ></TextInput>
      </View>
      <View style={styles.bottomBar}>
        <AppButton
          label="SUBMIT CHANGES"
          color={colors.primary}
          onPress={handleNext}
        />
        <AppButton
          label="Pick words to spell"
          color={colors.primary}
          onPress={handlePickSpellings}
        ></AppButton>
        <AppButton
          label="back"
          color={colors.primary}
          onPress={handleGoBack}
        ></AppButton>
      </View>
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
  textInput: {
    height: 50,
    width: 100,
    backgroundColor: colors.thirdColor,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  },
});

export default SpellingSettings;
