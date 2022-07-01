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

export const SpellingStack = createNativeStackNavigator();

export default function App() {
  //api call to check if pocket money has been earned
  //somthing to check the date and change pocketMoneyEarned
  //accordingly, as well as resetting amount earned

  const [amountEarned, setAmountEarned] = useState(0.2);
  const [pocketMoneyEarned, setPocketMoneyEarned] = useState(false);

  return (
    // <></>

    // <SpellingListsSelection />
    // <SpellingTest
    //   setPocketMoneyEarned={setPocketMoneyEarned}
    //   pocketMoneyEarned={pocketMoneyEarned}
    // />
    <NavigationContainer>
      <SpellingStack.Navigator
        initialRouteName="GetSpelling"
        screenOptions={{
          headerShown: false,
        }}
      >
        <SpellingStack.Screen name="GetSpelling">
          {(props) => <GetSpelling {...props} amountEarned={amountEarned} />}
        </SpellingStack.Screen>
        <SpellingStack.Screen name="SpellingTest">
          {(props) => (
            <SpellingTest
              {...props}
              amountEarned={amountEarned}
              setAmountEarned={setAmountEarned}
              setPocketMoneyEarned={setPocketMoneyEarned}
              pocketMoneyEarned={pocketMoneyEarned}
            />
          )}
        </SpellingStack.Screen>
        <SpellingStack.Screen name="WellDone">
          {(props) => <WellDone {...props} amountEarned={amountEarned} />}
        </SpellingStack.Screen>
      </SpellingStack.Navigator>
    </NavigationContainer>
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
