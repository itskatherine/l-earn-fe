import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

function DashboardButton(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Parent Dashboard</Text>
    </TouchableOpacity>
  );
}

export default DashboardButton;
