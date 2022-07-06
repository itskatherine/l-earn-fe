import React from "react";
import { Text } from "react-native";
import styles from "./styles";

function AppTitle({ title, color }) {
  return <Text style={[styles.text, { color: color }]}>{title}</Text>;
}

export default AppTitle;
