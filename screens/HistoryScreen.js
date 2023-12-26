import { Text, StyleSheet, View } from "react-native";
import HistoryContainers from "../containers/History/HistoryContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import { useFonts } from "expo-font";

const HistoryScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"), 
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Riwayat Peminjaman</Text>}
      />
      <View style={styles.container}>
        <View style={styles.historySection}>
          <HistoryContainers navigation={navigation} />
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
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic", 
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
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
