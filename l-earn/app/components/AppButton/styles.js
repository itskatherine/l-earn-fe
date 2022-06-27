import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import fonts from "../../config/fonts";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    fontFamily: fonts.primary,
    padding: 15,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default styles;
