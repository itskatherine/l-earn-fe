import { StyleSheet } from "react-native";
import colors from "../../config/colors";


const buttonSize = 300;
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.fifthColor,
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 50,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Sunny",
    fontSize: 80,
  },
});

export default styles;
