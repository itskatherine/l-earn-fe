import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import AppButton from "../components/AppButton/AppButton";
import GetSpellingButton from "../components/GetSpellingButton/GetSpellingButton";
import TopBar from "../components/TopBar/TopBar";
import colors from "../config/colors";

function GetSpelling({
  navigation,
  amountEarned,
  pocketMoneyEarned,
  fontFamily,
  setFontFamily,
  loaded,
}) {
  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <TopBar amountEarned={amountEarned} navigation={navigation} />
      </View>
      <View style={styles.middleSpace}>
        {pocketMoneyEarned ? (
          <Text>You've done your spellings! Go outside, nerd.</Text>
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

  button: {
    bottom: 50,
  },
});

export default GetSpelling;
