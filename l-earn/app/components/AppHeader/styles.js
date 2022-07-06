import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import fonts from "../../config/fonts";

const styles = StyleSheet.create({
  text: {
    color: colors.fifthColor,
    fontWeight: "600",
    fontFamily: "Alloy",
    top: 120,
    fontSize: 75,
  },
  tagline: {
    color: colors.black,
    fontWeight: "600",
    fontFamily: "Pangolin",
    top: 150,
    fontSize: 30,
  },
});

export default styles;
