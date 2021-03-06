import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppTitle from "../components/AppTitle/AppTitle";
import WordListCard from "../components/WordListCard/WordListCard";
import colors from "../config/colors";
import { getAllUsersWords, getAllWordLists } from "../utils/api";
import separateLists from "../utils/separateLists";
import getListIds from "../utils/getListIds";

function SpellingListsSelection({ navigation, userId }) {
  //Get all word lists from DB

  //Get all words from users wordbank
  //Use util function to extract list IDs from users wordbank (utils/getListIds)
  const listsIdsSelected = [1, 2];
  //Set selectedLists and unselectedLists accordingly

  const [selectedListIds, setSelectedListIds] = useState([]);
  const [allWordLists, setAllWordLists] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [unSelectedLists, setUnSelectedLists] = useState([]);
  const [wordsLoaded, setWordsLoaded] = useState(false);

  useEffect(() => {
    getAllWordLists()
      .then((wordLists) => {
        setAllWordLists(wordLists);
      })
      .then(() => {
        getAllUsersWords(userId).then((words) => {
          setSelectedListIds(getListIds(words));
          setWordsLoaded(true);
        });
      });
  }, []);

  useEffect(() => {
    //Add this code back in one requests are being made
    // To add and take away words from their word bank
    // getAllUsersWords(user_id).then((words) => {
    //   setSelectedListIds(getListIds(words));
    //   setWordsLoaded(true);
    // });
    setSelectedLists(() => {
      return separateLists(allWordLists, selectedListIds)[0];
    });
    setUnSelectedLists(() => {
      return separateLists(allWordLists, selectedListIds)[1];
    });
  }, [selectedListIds, wordsLoaded]);

  return (
    <>
      <View style={styles.topBuffer}></View>
      <View style={styles.topBar}>
        <AppTitle
          color={colors.white}
          title="Pick spelling lists for the learner:"
        />
      </View>
      <View style={styles.middleSpace}>
        <ScrollView>
          <Text style={styles.text}>Word Bank</Text>
          {wordsLoaded ? null : <Text>Loading...</Text>}
          <View style={styles.selectedWordListContainer}>
            {selectedLists.map((list) => {
              return (
                <WordListCard
                  userId={userId}
                  setSelectedListIds={setSelectedListIds}
                  list_name={list.list_name}
                  key={list.list_id}
                  list_difficulty={list.list_difficulty}
                  list_id={list.list_id}
                  selected={true}
                  navigation={navigation}
                />
              );
            })}
          </View>
          <Text style={styles.text}>Word lists</Text>
          {unSelectedLists.map((list) => {
            return (
              <WordListCard
                userId={userId}
                setSelectedListIds={setSelectedListIds}
                list_name={list.list_name}
                key={list.list_id}
                list_difficulty={list.list_difficulty}
                list_id={list.list_id}
                selected={false}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("SpellingSettings");
            }}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.easy }]}
            onPress={() => {
              navigation.navigate("GetSpelling");
            }}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  middleSpace: {
    flex: 6,
    backgroundColor: colors.primary,
  },
  bottomBar: {
    height: 150,
    backgroundColor: colors.fifthColor,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  text: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Pangolin",
  },
  selectedWordListContainer: {
    backgroundColor: "#DFA300",
    minHeight: 70,
  },
  button: {
    marginBottom: 30,
    backgroundColor: colors.thirdColor,
    padding: 10,
    borderRadius: 10,
    height: 50,
    width: 150,
    alignItems: "center",
    elevation: 10,
  },
  buttonText: {
    fontFamily: "Pangolin",
    fontSize: 20,
  },
});
export default SpellingListsSelection;
