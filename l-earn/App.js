import LoginScreen from "./app/screens/LoginScreen";
import GetSpelling from "./app/screens/GetSpelling";
import SpellingTest from "./app/screens/SpellingTest";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SpellingSettings from "./app/screens/SpellingSettings";
import SpellingListsSelection from "./app/screens/SpellingListsSelection";
import WordListPage from "./app/screens/WordListPage";
import WellDone from "./app/screens/WellDone";
import WarningScreen from "./app/screens/WarningScreen";
import { useEffect, useState } from "react";
import { getUserFromId } from "./app/utils/api";
import { useFonts } from "expo-font";
import LoginPage from "./app/screens/LoginPage";
import PinScreen from "./app/screens/PinScreen";
import Register from "./app/screens/Register";

export const AppStack = createNativeStackNavigator();

export default function App() {
  console.disableYellowBox = true;

  const [userId] = useState(1);
  const [amountEarned, setAmountEarned] = useState(0);
  const [pocketMoneyEarned, setPocketMoneyEarned] = useState(false);

  useEffect(() => {
    getUserFromId(userId).then((user) => {
      setAmountEarned(parseFloat(user.amount_earned));
    });
  }, [userId, amountEarned]);

  const [loaded] = useFonts({
    ComicNeue: require("./assets/fonts/ComicNeue-Bold.ttf"),
    Pangolin: require("./assets/fonts/Pangolin-Regular.ttf"),
    Alloy: require("./assets/fonts/AlloyInk-nRLyO.ttf"),
    Sunny: require("./assets/fonts/Sunny-Spells.ttf"),
    Calm: require("./assets/fonts/OddlyCalmingRegular-7B89V.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen
          name="LoginScreen"
          component={LoginScreen}
        ></AppStack.Screen>
        <AppStack.Screen
          name="PinScreen"
          component={PinScreen}
        ></AppStack.Screen>
        <AppStack.Screen
          name="LoginPage"
          component={LoginPage}
        ></AppStack.Screen>
        <AppStack.Screen name="Register" component={Register}></AppStack.Screen>

        <AppStack.Screen name="GetSpelling">
          {(props) => (
            <GetSpelling
              {...props}
              setPocketMoneyEarned={setPocketMoneyEarned}
              pocketMoneyEarned={pocketMoneyEarned}
              amountEarned={amountEarned}
              userId={userId}
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
          {(props) => (
            <WellDone {...props} amountEarned={amountEarned} userId={userId} />
          )}
        </AppStack.Screen>

        <AppStack.Screen name="SpellingSettings">
          {(props) => (
            <SpellingSettings
              {...props}
              amountEarned={amountEarned}
              setAmountEarned={setAmountEarned}
              userId={userId}
            />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="WarningScreen">
          {(props) => (
            <WarningScreen
              {...props}
              setAmountEarned={setAmountEarned}
              amountEarned={amountEarned}
              userId={userId}
            />
          )}
        </AppStack.Screen>

        <AppStack.Screen name="SpellingListsSelection">
          {(props) => <SpellingListsSelection {...props} userId={userId} />}
        </AppStack.Screen>

        <AppStack.Screen
          name="WordListPage"
          component={WordListPage}
        ></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
