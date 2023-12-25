import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import PinjamDetailContainer from "../containers/Item/PinjamDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import { useFonts } from "expo-font";
import { colors } from "../constants/colors";

const PinjamDetailScreen = ({ navigation }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const showAlertDialog = () => {
    setDialogVisible(true);
  };

  const hideAlertDialog = () => {
    setDialogVisible(false);
  };

  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Pinjam Aset</Text>}
      />
      <View style={styles.container}>
        <PinjamDetailContainer navigation={navigation} />
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
    padding: 20,
  },
  button: {
    backgroundColor: colors.buttonLogin,
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: "flex-end",
  },
  logintext: {
    color: colors.loginText,
  },
});

export default PinjamDetailScreen;
