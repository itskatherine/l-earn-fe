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
  }
});

export default styles;
