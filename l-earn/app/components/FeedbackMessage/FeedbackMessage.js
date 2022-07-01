import React from "react";
import { View, Text } from "react-native";
import colors from "../../config/colors";
import styles from "./styles";

function FeedbackMessage({ message, correct }) {
  if (correct === "neither") {
    return <></>;
  }
  const color = correct === "correct" ? colors.easy : colors.hard;

  return (
    <View style={[styles.feedbackMessage, { backgroundColor: color }]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default FeedbackMessage;
