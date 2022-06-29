import React from "react";
import { Text, Image, View } from "react-native";
import formatMoney from "../../utils/formatMoney";
import styles from "./styles";

const amount_earned = 1;

function PiggyBank() {
  return (
    <View style={styles.piggyBankIcon}>
      <Image
        style={styles.piggy}
        source={require("../../assets/piggybank.png")}
      ></Image>
      <Text>Amount Earned: {formatMoney(amount_earned)}</Text>
    </View>
  );
}

export default PiggyBank;
