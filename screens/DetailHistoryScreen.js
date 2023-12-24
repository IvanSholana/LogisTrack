import { StyleSheet, View, Text } from "react-native";
import DetailHistoryContainers from "../containers/History/DetailHistoryContainers";
import AppBarComponent from "../components/AppBar/AppBarComponents";
import ButtonComponent from "../components/Button/ButtonComponent";
import { colors } from "../constants/colors";
import { useFonts } from "expo-font";


const DetailHistoryScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"), 
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Detail Peminjaman</Text>}
      />
      <View style={styles.container}>

        <View style={styles.historySection}>
          <DetailHistoryContainers navigation={navigation} />
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic", 
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
  buttonsection: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white", 
    padding: 20
  },
  button: {
    backgroundColor: colors.buttonLogin,
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: "flex-end",
  },
  logintext: {
    color: colors.loginText,
  },
});

export default DetailHistoryScreen;
