import React from "react";
import { View, Text } from "react-native";
import colors from "../../config/colors";
import styles from "./styles";

function DifficultyCard({ list_difficulty }) {
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
    <>
      <View
        style={[
          styles.difficultyContainer,
          { backgroundColor: colorOfDifficulty },
        ]}
      >
        <Text>{list_difficulty}</Text>
      </View>
    </>
  );
}

export default DifficultyCard;
