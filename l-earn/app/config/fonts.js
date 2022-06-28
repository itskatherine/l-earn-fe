import { Platform } from "react-native";

export default {
  primary: Platform.OS === "android" ? "Roboto" : "Avenir",
  secondary: "monospace",
};
