import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  listCard: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  difficultyContainer: {
    backgroundColor: colors.primary,
    padding: 5,
    width: 75,
    borderRadius: 7,
    alignItems: "center",
  },
});

export default styles;
