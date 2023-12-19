import { Text, StyleSheet, View } from "react-native";
import HistoryContainers from "../containers/History/HistoryContainers";
import AppBarComponent from "../components/AppBar/AppBarComponents";
import { useFonts } from "expo-font";
import { Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";

const HistoryScreen = () => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <AppBarComponent
        content={
          <Text style={styles.headerText}>
          Riwayat Peminjaman
        </Text>
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
  headerText:{
    fontSize: 24,
    fontFamily: "Poppins_700Bold_Italic", 
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
