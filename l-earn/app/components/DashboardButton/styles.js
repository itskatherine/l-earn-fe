import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.fifthColor,
    alignSelf: "center",
    marginLeft: 100,
    padding: 10,
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    color: colors.white,
    fontFamily: "Pangolin",
    fontSize: 20,
  },
});

export default styles;
