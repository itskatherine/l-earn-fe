import React from "react";
import { Text } from "react-native";
import styles from "./styles";

function AppHeader() {
  return (
    <>
      <Text style={styles.text}>L-Earn</Text>
      <Text style={styles.tagline}>Learning while you earn</Text>
    </>
  );
}

export default AppHeader;
