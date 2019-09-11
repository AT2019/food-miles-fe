import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  buttonList: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
    // alignItems: "center"
  },
  loginButton: {
    backgroundColor: "#388E3C",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10
  },
  registerButton: {
    backgroundColor: "#8BC34A",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
