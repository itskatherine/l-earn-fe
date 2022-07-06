import { Button, Text, View } from "react-native";
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
      deleteListFromUsersWordBank(userId, list_id).then(() => {
        setSelectedListIds((currentIds) => {
          const idsCopy = [...currentIds];
          const filteredCopy = idsCopy.filter((id) => id != list_id);
          return filteredCopy;
        });
      });
    } else {
      addListToUsersWordBank(userId, list_id).then(() => {
        setSelectedListIds((currentIds) => {
          const idsCopy = [...currentIds];
          idsCopy.push(list_id);
          return idsCopy;
        });
      });
    }
  };

  const colorOfList = selected ? colors.white : "#D9E2DF";
  const cardLabel = selected ? "DESELECT" : "SELECT";

  return (
    <View style={[styles.listCard, { backgroundColor: colorOfList }]}>
      <Text style={styles.text}>{list_name}</Text>
      <Button onPress={handleAddOrDeleteList} title={cardLabel}></Button>
      <Button onPress={handleViewList} title="VIEW"></Button>
      <DifficultyCard list_difficulty={list_difficulty} />
    </View>
  );
}
