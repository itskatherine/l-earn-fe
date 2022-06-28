import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import fonts from "../../config/fonts";

const buttonSize = 300;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.positiveGreen,
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: fonts.secondary,
    fontSize: 50,
  },
});

export default styles;
