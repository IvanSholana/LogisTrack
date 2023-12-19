import { Image, StyleSheet, View } from "react-native";
import DetailHistoryContainers from "../containers/History/DetailHistoryContainers";

const DetailHistoryScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Image
            source={require("../assets/images/DetailEvent.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.historySection}>
          <DetailHistoryContainers />
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
  },
  historySection: {
    flex: 1,
  },
});

export default DetailHistoryScreen;
