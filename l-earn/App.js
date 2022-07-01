import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import GetSpelling from "./app/screens/GetSpelling";
import SpellingTest from "./app/screens/SpellingTest";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenStack } from "react-native-screens";
import SpellingSettings from "./app/screens/SpellingSettings";
import SpellingListsSelection from "./app/screens/SpellingListsSelection";
import WordListPage from "./app/screens/WordListPage";
import WellDone from "./app/screens/WellDone";
import { useState } from "react";

export const Stack = createNativeStackNavigator();

export default function App() {
  //api call to check if pocket money has been earned
  //somthing to check the date and change pocketMoneyEarned
  //accordingly, as well as resetting amount earned
  
  const [pocketMoneyEarned, setPocketMoneyEarned] = useState(false);

  return (
    //<SpellingListsSelection />
    <SpellingTest
      setPocketMoneyEarned={setPocketMoneyEarned}
      pocketMoneyEarned={pocketMoneyEarned}
    />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="GetSpelling"
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="GetSpelling" component={GetSpelling} />
    //     <Stack.Screen name="SpellingTest" component={SpellingTest} />
    //   </Stack.Navigator>
    // </NavigationContainer>
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
