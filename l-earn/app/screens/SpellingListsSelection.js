import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import WordListCard from "../components/WordListCard/WordListCard";
import colors from "../config/colors";
import separateLists from "../utils/separateLists";

function SpellingListsSelection(props) {
  //Get all word lists from DB
  const allWordLists = [
    { list_id: 1, list_name: "List name 1", list_difficulty: "Easy" },
    { list_id: 2, list_name: "List name 2", list_difficulty: "Medium" },
    { list_id: 3, list_name: "List name 3", list_difficulty: "Hard" },
    { list_id: 4, list_name: "List name 4", list_difficulty: "Easy" },
    { list_id: 5, list_name: "List name 5", list_difficulty: "Medium" },
    { list_id: 6, list_name: "List name 6", list_difficulty: "Harder" },
  ];
  //Get all words from users wordbank
  //Use util function to extract list IDs from users wordbank (utils/getListIds)
  const selectedListIds = [];
  //Set selectedLists and unselectedLists accordingly

  const [listsSelected, listsUnselected] = separateLists(
    allWordLists,
    selectedListIds
  );

  const [selectedLists, setSelectedLists] = useState(listsSelected);
  const [unSelectedLists, setUnSelectedLists] = useState(listsUnselected);

  // useEffect(() => {
  //   //api call
  //   //then update
  // }, [selectedLists, unSelectedLists]);

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <AppTitle title="Pick spelling lists for the learner:" />
      </View>
      <View style={styles.middleSpace}>
        <ScrollView>
          <Text style={styles.text}>Word Bank</Text>
          <View style={styles.selectedWordListContainer}>
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
          </View>
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
  selectedWordListContainer: {
    backgroundColor: colors.darkerPrimary,
    minHeight: 70,
  },
});
export default SpellingListsSelection;
