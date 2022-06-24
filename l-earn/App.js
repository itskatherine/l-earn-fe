import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Test from "./assets/components/test";
import { useState } from "react"
import { v4 } from "uuid";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import { BrowserRouter as Router } from "react-router-dom";
import { JSDOM } from "jsdom";

export default function App() {

  const [test, setTest] = useState("")
  {
    /* <Image style={styles.pig} source={require("./assets/piggy.png")}></Image>
      <Text>Spelling game!</Text> */
  }
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <View key={v4()} style={{ backgroundColor: "#fff", flex: 1 }}>
          <View
            key={v4()}
            style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
          >
            <Text key={v4()}>teest why you no on background</Text>
            <Text key={v4()}> why you no update</Text>
          </View>
          <Test key={v4()} test={test} setTest={setTest}></Test>
          <View key={v4()} style={{ backgroundColor: "gold", flex: 1 }} />
          <View key={v4()} style={{ backgroundColor: "tomato", flex: 1 }} />
        </View>
        //{" "}
      </Auth0ProviderWithHistory>
    </Router>
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
