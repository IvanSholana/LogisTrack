import { StyleSheet, View, Text } from "react-native";
import DetailHistoryContainers from "../containers/History/DetailHistoryContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";
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
      <View style={{ flex: 1 }}>
        <DetailHistoryContainers navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default DetailHistoryScreen;
