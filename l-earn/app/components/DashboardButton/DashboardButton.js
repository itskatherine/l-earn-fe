import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

function DashboardButton({ navigation }) {
  const handleParentDashboard = () => {

    navigation.navigate("SpellingSetting");
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handleParentDashboard}>
      <Text style={styles.text}>Parent Dashboard</Text>
    </TouchableOpacity>
  );
}

export default DashboardButton;
