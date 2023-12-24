import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PinjamDetailContainer from "../containers/Item/PinjamDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import { ScrollView } from "react-native-gesture-handler";

const PinjamDetailScreen = ({ navigation }) => {
  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Pinjam Aset</Text>}
      />
      <View style={styles.registerSection}>
        <PinjamDetailContainer navigation={navigation} />
        <View style={styles.buttonsection}></View>
      </View>
    </>
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
    fontFamily: "Poppins_700Bold_Italic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default PinjamDetailScreen;
