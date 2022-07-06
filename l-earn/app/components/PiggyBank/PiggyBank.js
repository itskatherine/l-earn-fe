import React from "react";
import { Text, Image, View } from "react-native";
import formatMoney from "../../utils/formatMoney";
import styles from "./styles";
import { getUserFromId } from "../../utils/api";
import { useState } from "react";

function PiggyBank({ amountEarned, userId }) {
  const [pocketMoney, setPocketMoney] = useState();
  const getPocketMoney = getUserFromId(userId).then((res) => {
    setPocketMoney(res.weekly_pocket_money);
  });

  return (
    <View style={styles.piggyBankIcon}>
      <Image
        style={styles.piggy}
        source={require("../../assets/pigicon.png")}
      ></Image>
      <Text style={styles.text}>
        {formatMoney(amountEarned)} / {formatMoney(pocketMoney)}
      </Text>
    </View>
  );
}

export default PiggyBank;
