import { Image, StyleSheet, View } from "react-native";
import HistoryContainers from "../containers/History/HistoryContainers";
import AppBarComponent from "../components/AppBar/AppBarComponents";

const HistoryScreen = () => {
  return (
    <>
      <AppBarComponent
        content={
          <Image
            source={require("../assets/images/historypeminjaman.png")}
            style={styles.logo}
          />
        }
      />
      <View style={styles.container}>
        <View style={styles.historySection}>
          <HistoryContainers />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  historySection: {
    flex: 1,
  },
  appBar: {
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 20,
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
  },
});

export default HistoryScreen;
