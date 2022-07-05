import { Button, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../config/colors";
import DifficultyCard from "../DifficultyCard/DifficultyCard";
import {
  addListToUsersWordBank,
  deleteListFromUsersWordBank,
} from "../../utils/api";

export default function WordListCard({
  selected,
  list_name,
  list_difficulty,
  list_id,
  setSelectedListIds,
  navigation,
  userId,
}) {
  const handleViewList = () => {
    navigation.navigate("WordListPage", { list_id: list_id });
  };
  const handleAddOrDeleteList = () => {
    if (selected) {
      //delete request to delete list from word bank and change
      //the selected ids accordly will replace this block
      deleteListFromUsersWordBank(userId, list_id).then(() => {
        setSelectedListIds((currentIds) => {
          const idsCopy = [...currentIds];
          const filteredCopy = idsCopy.filter((id) => id != list_id);
          return filteredCopy;
        });
      });
    } else {
      //post request to add list to word bank and change
      //the selected ids accordly will replace this block
      addListToUsersWordBank(userId, list_id).then(() => {
        setSelectedListIds((currentIds) => {
          const idsCopy = [...currentIds];
          idsCopy.push(list_id);
          return idsCopy;
        });
      });
    }
  };

  const colorOfList = selected ? colors.fourthColor : colors.thirdColor;
  const cardLabel = selected ? "DESELECT" : "SELECT";

  return (
    <View style={[styles.listCard, { backgroundColor: colorOfList }]}>
      <Text>{list_name}</Text>
      <Button onPress={handleAddOrDeleteList} title={cardLabel}></Button>
      <Button onPress={handleViewList} title="VIEW"></Button>
      <DifficultyCard list_difficulty={list_difficulty} />
    </View>
  );
}
