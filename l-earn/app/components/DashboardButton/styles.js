import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import fonts from "../../config/fonts";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.thirdColor,
    alignSelf: "center",
    marginLeft: 100,
    padding: 10,
    borderRadius: 10,
  },
  text: { color: colors.black },
});

export default styles;
