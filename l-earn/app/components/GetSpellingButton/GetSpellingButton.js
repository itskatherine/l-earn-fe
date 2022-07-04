import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";

function GetSpellingButton({ navigation, fontFamily, loaded }) {

console.log(loaded);
  const handleButton = (loaded) => {
    navigation.navigate("SpellingTest");
     console.log(loaded);
  };
 
  return (
    <TouchableOpacity onPress={handleButton}>
      <View style={styles.button}>
        <Text style={((fontFamily = fontFamily), (fontSize = 50))}>GET</Text>
        <Text style={styles.buttonText}>SPELLING</Text>
      </View>
    </TouchableOpacity>
  );
}

export default GetSpellingButton;


  
