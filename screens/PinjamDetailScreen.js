import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PinjamDetailContainer from "../containers/Item/PinjamDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponents";
import { useFonts } from "expo-font";


const PinjamDetailScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"), 
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <AppBarComponent
        content={<Text style={styles.headerText}>Pinjam Aset</Text>}
      />
      <View style={styles.registerSection}>
        <PinjamDetailContainer navigation={navigation} />
        <View style={styles.buttonsection}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InputText: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  logo: {
    marginTop: 30,
    marginBottom: 10,
  },
  container: {
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic", 
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default PinjamDetailScreen;
