import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import SpellingGame from "./app/screens/SpellingGame";
import GetSpelling from "./app/screens/GetSpelling";

export default function App() {
  {
    /* <Image style={styles.pig} source={require("./assets/piggy.png")}></Image>
      <Text>Spelling game!</Text> */
  }
  return (
    <GetSpelling />


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pig: {
    width: 100,
    height: 100,
  },
});
