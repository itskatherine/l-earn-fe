import React, { useEffect } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import GetSpellingButton from "../components/GetSpellingButton/GetSpellingButton";
import TopBar from "../components/TopBar/TopBar";
import colors from "../config/colors";
import { getUserFromId } from "../utils/api";

function GetSpelling({
  navigation,
  amountEarned,
  pocketMoneyEarned,
  setPocketMoneyEarned,
  fontFamily,
  setFontFamily,
  loaded,
  userId,
}) {
  useEffect(() => {
    getUserFromId(userId).then((user) => {
      if (user.amount_earned >= user.weekly_pocket_money) {
        setPocketMoneyEarned(true);
      } else {
        setPocketMoneyEarned(false);
      }
    });
  }, [amountEarned]);

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
        {pocketMoneyEarned ? (
          <>
            <Image
              style={styles.badge}
              source={require("../assets/tiger.png")}
            />
            <Text style={styles.text}>You've finished your</Text>
            <Text style={styles.text}> spellings!</Text>
          </>
        ) : (
          <View style={styles.button}>
            <GetSpellingButton
              navigation={navigation}
              fontFamily={fontFamily}
              setFontFamily={setFontFamily}
              loaded={loaded}
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: { flex: 0.5, backgroundColor: "white" },
  container: { flex: 1 },
  topBar: {
    flex: 1,
    backgroundColor: colors.thirdColor,
    flexDirection: "row",
  },
  middleSpace: {
    flex: 6,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    width: 250,
    height: 250,
    margin: 40,
  },
  button: {
    bottom: 50,
  },
  text: {
    fontFamily: "Pangolin",
    fontSize: 30,
  },
});

export default GetSpelling;
