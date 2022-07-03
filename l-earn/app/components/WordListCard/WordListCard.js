import { Button, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../config/colors";
import DifficultyCard from "../DifficultyCard/DifficultyCard";

export default function WordListCard({
  selected,
  list_name,
  list_difficulty,
  list_id,
  setSelectedListIds,
  navigation,
}) {
  const handleViewList = () => {
    navigation.navigate("WordListPage", { list_id: list_id });
  };
  const handleAddOrDeleteList = () => {
    if (selected) {
      setSelectedListIds((currentIds) => {
        const idsCopy = [...currentIds];
        const filteredCopy = idsCopy.filter((id) => id != list_id);
        return filteredCopy;
      });
    } else {
      setSelectedListIds((currentIds) => {
        const idsCopy = [...currentIds];
        idsCopy.push(list_id);
        return idsCopy;
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
