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
import { useEffect, useState } from "react";
import { getUserFromId } from "./app/utils/api";
import { useFonts } from "expo-font";

export const AppStack = createNativeStackNavigator();

export default function App() {
  //api call to check if pocket money has been earned
  //somthing to check the date and change pocketMoneyEarned
  //accordingly, as well as resetting amount earned
  const [userId, setUserId] = useState(1);
  const [amountEarned, setAmountEarned] = useState(0);
  const [pocketMoneyEarned, setPocketMoneyEarned] = useState(false);

  //Add this in once the API call to GET the user object works
  // useEffect(() => {
  //   getUserFromId(userId).then((user) => {
  //     setAmountEarned(parseFloat(user.amount_earned));
  //   });
  // }, [userId, amountEarned]);

  const [loaded] = useFonts({
    ComicNeue: require("./assets/fonts/ComicNeue-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

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
              userId={userId}
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
