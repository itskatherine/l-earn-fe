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

function WarningScreen({
  userId,
  route,
  navigation,
  setAmountEarned,
  amountEarned,
}) {
  const { pocketMoney, numberOfQuestions } = route.params;

  const handleSubmit = () => {
    const responseBody = {
      weekly_pocket_money: pocketMoney,
      weekly_question_number: numberOfQuestions,
    };
    console.log(responseBody);
    patchMoneyAndQuestions(userId, responseBody);
    patchAmountEarned(userId, { amount_earned: -amountEarned });
    setAmountEarned(0);
    navigation.navigate("SpellingSettings");
  };

  const handleGoBack = () => {
    navigation.navigate("SpellingSettings");
  };

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.middleSpace}>
        <Text style={styles.message}>
          This will set the pocket money progress to zero and start a new round
          of spelling rewards!
        </Text>
        <Text>Are you sure?</Text>
      </View>

      <View style={styles.bottomBar}>
        <AppButton
          label="Yes, SUBMIT"
          color={colors.primary}
          onPress={handleSubmit}
        ></AppButton>
        <AppButton
          label="NO, GO BACK"
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
    marginBottom: 10,
  },
  message: {
    padding: 15,
    fontSize: 20,
    textAlign: "center",
  },
});

export default WarningScreen;
