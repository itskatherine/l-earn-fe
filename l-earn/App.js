import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import GetSpelling from "./app/screens/GetSpelling";
import SpellingTest from "./app/screens/SpellingTest";

export default function App() {
  return <SpellingTest />;
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
