import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  {
    /* <Image style={styles.pig} source={require("./assets/piggy.png")}></Image>
      <Text>Spelling game!</Text> */
  }
  return (
    <LoginScreen></LoginScreen>

    // <View style={{ backgroundColor: "#fff", flex: 1 }}>
    //   <View
    //     style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
    //   />
    //   <View style={{ backgroundColor: "gold", flex: 1 }} />
    //   <View style={{ backgroundColor: "tomato", flex: 1 }} />
    // </View>
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
