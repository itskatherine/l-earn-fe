import { Platform } from "react-native";

// export default {
//   primary: Platform.OS === "android" ? "Roboto" : "Avenir",
//   secondary: "monospace",
// };


module.exports = {
  project: {
    primary: Platform.OS === "android" ? "Roboto" : "Avenir",
    secondary: "monospace",
  },
  assets: ["../../assets/fonts"], // stays the same
};