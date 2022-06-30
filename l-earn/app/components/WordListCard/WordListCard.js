import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../config/colors";

export default function WordListCard({
  selected,
  list_name,
  list_difficulty,
  setSelectedLists,
  setUnSelectedLists,
}) {
  const handleToggle = () => {};
  const colorOfList = selected ? colors.fourthColor : colors.thirdColor;
  const colorOfDifficulty =
    list_difficulty === "Easy"
      ? colors.easy
      : list_difficulty === "Medium"
      ? colors.medium
      : list_difficulty === "Hard"
      ? colors.hard
      : list_difficulty === "Harder"
      ? colors.harder
      : colors.primary;

  return (
    <TouchableOpacity
      style={[styles.listCard, { backgroundColor: colorOfList }]}
    >
      <Text>{list_name}</Text>
      <View
        style={[
          styles.difficultyContainer,
          { backgroundColor: colorOfDifficulty },
        ]}
      >
        <Text>{list_difficulty}</Text>
      </View>
    </TouchableOpacity>
  );
}
