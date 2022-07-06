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
      <View style={styles.topBar}>
        <Text style={styles.text}>Words in: {wordList.list_name}</Text>
        <View style={styles.difficultyContainer}>
          <DifficultyCard list_difficulty={wordList.list_difficulty} />
        </View>
      </View>
      <View style={styles.middleSpace}>
        <ScrollView style={styles.scroll}>
          <View style={styles.wordListContainer}>
            {wordList.words.map((word) => {
              return <Text style={styles.word}>{word}</Text>;
            })}
          </View>
        </ScrollView>
        <View style={styles.bottomBar}>
          <AppButton
            label="BACK"
            color={colors.thirdColor}
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
    flex: 1,
    backgroundColor: colors.fifthColor,
    justifyContent: "center",
    alignItems: "center",
  },
  middleSpace: {
    flex: 6,
    backgroundColor: colors.primary,
  },
  bottomBar: {
    flex: 1,
    backgroundColor: colors.fifthColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Pangolin",
    color: colors.white,
  },
  wordListContainer: {
    backgroundColor: "#FFFBB3",
    minHeight: 70,
    alignItems: "center",
    width: "80%",
    marginTop: 30,
    marginHorizontal: 40,
    borderRadius: 5,
    elevation: 20,
    marginBottom: 100,
  },
  difficultyContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  word: {
    padding: 10,
    fontFamily: "Pangolin",
    textTransform: "uppercase",
  },
});

export default WordListPage;
