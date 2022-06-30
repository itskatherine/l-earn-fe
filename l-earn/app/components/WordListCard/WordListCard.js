import { Button, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../config/colors";
import DifficultyCard from "../DifficultyCard/DifficultyCard";

export default function WordListCard({
  selected,
  list_name,
  list_difficulty,
  setSelectedLists,
  setUnSelectedLists,
}) {
  const handleViewList = () => {};
  const handleAddWords = () => {};

  const colorOfList = selected ? colors.fourthColor : colors.thirdColor;

  return (
    <View style={[styles.listCard, { backgroundColor: colorOfList }]}>
      <Text>{list_name}</Text>
      <Button onPress={handleAddWords} title="SELECT"></Button>
      <Button onPress={handleViewList} title="VIEW"></Button>
      <DifficultyCard list_difficulty={list_difficulty} />
    </View>
  );
}
