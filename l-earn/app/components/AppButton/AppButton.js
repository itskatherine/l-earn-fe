import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

function AppButton({ label, color, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
