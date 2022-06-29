import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./styles";

function PiggyBank() {
  return (
    <View style={styles.piggyBankIcon}>
      <Image
        style={styles.piggy}
        source={require("../../assets/piggybank.png")}
      ></Image>
      <Text>Amount Earned: £1</Text>
    </View>
  );
}

export default PiggyBank;
