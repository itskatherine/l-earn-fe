import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import WordListCard from "../components/WordListCard/WordListCard";
import colors from "../config/colors";

function SpellingListsSelection(props) {

  

  const initialSelectedLists = [
    {
      list_id: 1,
      list_name: "Selected at first1",
      list_difficulty: "Easy",
    },
    {
      list_id: 2,
      list_name: "Selected at first2",
      list_difficulty: "Medium",
    },
    {
      list_id: 3,
      list_name: "Selected at first3",
      list_difficulty: "Harder",
    },
  ];
  const initialUnselectedLists = [
    {
      list_id: 1,
      list_name: "Not selected at first1",
      list_difficulty: "Easy",
    },
    {
      list_id: 2,
      list_name: "Not selected at first2",
      list_difficulty: "Medium",
    },
    {
      list_id: 3,
      list_name: "Not selected at first3",
      list_difficulty: "Hard",
    },
  ];

  const [selectedLists, setSelectedLists] = useState(initialSelectedLists);
  const [unSelectedLists, setUnSelectedLists] = useState(
    initialUnselectedLists
  );

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <AppTitle title="Pick spelling lists for the learner:" />
      </View>
      <View style={styles.middleSpace}>
        <ScrollView>
          <Text style={styles.text}>Selected word lists</Text>
          {selectedLists.map((list) => {
            return (
              <WordListCard
                setSelectedLists={setSelectedLists}
                setUnSelectedLists={setUnSelectedLists}
                list_name={list.list_name}
                key={list.list_id}
                list_difficulty={list.list_difficulty}
                selected={true}
              />
            );
          })}
          <Text style={styles.text}>Word lists</Text>
          {unSelectedLists.map((list) => {
            return (
              <WordListCard
                setSelectedLists={setSelectedLists}
                setUnSelectedLists={setUnSelectedLists}
                list_name={list.list_name}
                key={list.list_id}
                list_difficulty={list.list_difficulty}
                selected={false}
              />
            );
          })}
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
});
export default SpellingListsSelection;
