import { Platform } from "react-native";

module.exports = {
  project: {
    primary: Platform.OS === "android" ? "ComicNeue" : "Avenir",
    secondary: "monospace",
  },
  assets: ["../../assets/fonts"],
};
