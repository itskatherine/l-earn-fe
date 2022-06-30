import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import colors from "../config/colors";
import AppTitle from "../components/AppTitle/AppTitle";

function WordListPage(props) {
  const list_id = 1;
  const exampleListData = {
    list_name: "Name of list",
    list_difficulty: "Hard",
    words: ["word1", "word2", "word3"],
  };

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}></View>
      <View style={styles.middleSpace}>
        <ScrollView>
          <Text style={styles.text}>Words in: {exampleListData.list_name}</Text>

          <View style={styles.wordListContainer}></View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topBuffer: { flex: 0.5, backgroundColor: "white" },

  topBar: {
    flex: 0.5,
    backgroundColor: colors.secondary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  middleSpace: {
    flex: 6,
    backgroundColor: colors.primary,
  },
  bottomBar: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  },
  wordListContainer: {
    backgroundColor: colors.darkerPrimary,
    minHeight: 70,
  },
});

export default WordListPage;
