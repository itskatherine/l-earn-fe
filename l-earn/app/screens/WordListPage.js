import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import colors from "../config/colors";
import DifficultyCard from "../components/DifficultyCard/DifficultyCard";
import fonts from "../config/fonts";
import AppButton from "../components/AppButton/AppButton";
import { getWordListFromId } from "../utils/api";

function WordListPage({ route, navigation }) {
  const { list_id } = route.params;
  //fetch the exampleListData using this param

  const [wordList, setWordList] = useState({
    list_difficulty: "",
    list_name: "",
    words: [],
  });

  useEffect(() => {
    getWordListFromId(list_id).then((fetchedWordList) => {
      setWordList(fetchedWordList);
    });
  }, []);

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}></View>
      <View style={styles.middleSpace}>
        <Text style={styles.text}>Words in: {wordList.list_name}</Text>
        <View style={styles.difficultyContainer}>
          <DifficultyCard list_difficulty={wordList.list_difficulty} />
        </View>
        <ScrollView>
          <View style={styles.wordListContainer}>
            {wordList.words.map((word) => {
              return <Text style={styles.word}>{word}</Text>;
            })}
          </View>
        </ScrollView>
        <View style={styles.bottomBar}>
          <AppButton
            label="BACK"
            color={colors.primary}
            onPress={() => {
              navigation.navigate("SpellingListsSelection");
            }}
          />
        </View>
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
    alignItems: "center",
  },
  difficultyContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  word: {
    padding: 10,
    fontFamily: fonts.primary,
    textTransform: "uppercase",
  },
});

export default WordListPage;
