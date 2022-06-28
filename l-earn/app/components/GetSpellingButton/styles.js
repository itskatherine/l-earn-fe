import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const buttonSize = 300;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.positiveGreen,
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
  },
});

export default styles;
