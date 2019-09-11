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
  },
  banner: {
    margin: 10,
    backgroundColor: "#4CAF50",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4
  },
  infoButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10,
    width: 250,
    marginTop: 10,
    alignItems: "center"
  }
});

export default styles;
