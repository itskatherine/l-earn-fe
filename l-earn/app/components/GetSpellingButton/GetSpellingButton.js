import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

function GetSpellingButton({ navigation }) {
  const handleButton = () => {
    navigation.navigate("SpellingTest");
  };
  return (
    <TouchableOpacity onPress={handleButton}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>GET</Text>
        <Text style={styles.buttonText}>SPELLING</Text>
      </View>
    </TouchableOpacity>
  );
}

export default GetSpellingButton;
