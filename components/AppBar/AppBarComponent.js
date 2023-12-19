import { StyleSheet, View } from "react-native";

const AppBarComponent = ({ content }) => {
  return (
    <>
      <View style={styles.container}>{content}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
});

export default AppBarComponent;