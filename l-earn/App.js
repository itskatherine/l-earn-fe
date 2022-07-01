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

export const AppStack = createNativeStackNavigator();

export default function App() {
  //api call to check if pocket money has been earned
  //somthing to check the date and change pocketMoneyEarned
  //accordingly, as well as resetting amount earned

  const [amountEarned, setAmountEarned] = useState(0.2);
  const [pocketMoneyEarned, setPocketMoneyEarned] = useState(false);

  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="GetSpelling"
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="GetSpelling">
          {(props) => (
            <GetSpelling
              {...props}
              pocketMoneyEarned={pocketMoneyEarned}
              amountEarned={amountEarned}
            />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="SpellingTest">
          {(props) => (
            <SpellingTest
              {...props}
              amountEarned={amountEarned}
              setAmountEarned={setAmountEarned}
              setPocketMoneyEarned={setPocketMoneyEarned}
              pocketMoneyEarned={pocketMoneyEarned}
            />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="WellDone">
          {(props) => <WellDone {...props} amountEarned={amountEarned} />}
        </AppStack.Screen>
        <AppStack.Screen name="SpellingSettings" component={SpellingSettings} />
        <AppStack.Screen
          name="SpellingListsSelection"
          component={SpellingListsSelection}
        />
        <AppStack.Screen
          name="WordListPage"
          component={WordListPage}
        ></AppStack.Screen>
      </AppStack.Navigator>
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
