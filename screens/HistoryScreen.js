import { Image, StyleSheet, View } from "react-native";
import HistoryContainers from "../containers/History/HistoryContainers";

const HistoryScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/historypeminjaman.png")}
          style={styles.logo}
        />
        <View style={styles.historySection}>
          <HistoryContainers />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  historySection: {
    flex: 1,
  },
});

export default HistoryScreen;
