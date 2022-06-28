import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./styles";

function PiggyBank() {
  return (
    <View style={styles.piggyBankIcon}>
      <Text>Amount Earned: £1</Text>
      <Image
        style={styles.piggy}
        source={require("../../assets/piggybank.png")}
      ></Image>
    </View>
  );
}

export default PiggyBank;
