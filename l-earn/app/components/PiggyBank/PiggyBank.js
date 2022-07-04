import React from "react";
import { Text, Image, View } from "react-native";
import formatMoney from "../../utils/formatMoney";
import styles from "./styles";
import { getUserFromId } from "../../utils/api";

function PiggyBank({ amountEarned }) {
  const getPocketMoney = getUserFromId(1).then((res) => {
    const pocketMoneyTotal = res.weekly_pocket_money;

    console.log(pocketMoneyTotal, "<<<<<<<");
    return (
      <View style={styles.piggyBankIcon}>
        <Image
          style={styles.piggy}
          source={require("../../assets/piggybank.png")}
        ></Image>
        <Text>
          Amount Earned: {formatMoney(amountEarned)} /
          {formatMoney(pocketMoneyTotal)}
        </Text>
      </View>
    );
  });
}

export default PiggyBank;
