import React from "react";
import { Text, Image, View } from "react-native";
import formatMoney from "../../utils/formatMoney";
import styles from "./styles";

function PiggyBank({ amountEarned }) {
  return (
    <View style={styles.piggyBankIcon}>
      <Image
        style={styles.piggy}
        source={require("../../assets/piggybank.png")}
      ></Image>
      <Text>Amount Earned: {formatMoney(amountEarned)}</Text>
    </View>
  );
}

export default PiggyBank;
