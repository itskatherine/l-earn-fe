import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  difficultyContainer: {
    backgroundColor: colors.primary,
    padding: 5,
    width: 75,
    borderRadius: 7,
    alignItems: "center",
  },
  text: {
    fontFamily: "Pangolin",
  },
});

export default styles;
