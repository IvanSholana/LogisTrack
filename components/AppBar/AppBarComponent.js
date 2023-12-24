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
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 1,
  },
});

export default AppBarComponent;
