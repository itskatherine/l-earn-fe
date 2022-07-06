import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  feedbackMessage: {
    marginTop: 20,
    backgroundColor: colors.primary,
    width: 350,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontFamily: "Pangolin",
    fontSize: 20,
  },
});

export default styles;
