import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 15,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "ComicNeue",
  },
});

export default styles;
