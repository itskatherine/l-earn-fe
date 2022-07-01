import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import fonts from "../../config/fonts";

const styles = StyleSheet.create({
  feedbackMessage: {
    marginTop: 20,
    backgroundColor: colors.primary,
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontFamily: fonts.secondary,
  },
});

export default styles;
