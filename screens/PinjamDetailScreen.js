import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PinjamDetailContainer from "../containers/Item/PinjamDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponents";
import ButtonComponent from "../components/Button/ButtonComponent";
import DialogComponent from "../components/Dialog/DialogComponent";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../constants/colors";
import { useFonts } from "expo-font";


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
      <View style={styles.buttonsection}>
      <TouchableOpacity onPress={showAlertDialog}>
          <ButtonComponent
            buttontext={"Ajukan"}
            buttonstyle={styles.button}
            textstyle={{ color: colors.loginText}}
          />
        </TouchableOpacity>
        <ButtonComponent
          buttontext={"Kembali"}
          buttonstyle={[styles.button, {backgroundColor: colors.buttonRegister}]
          }
          textstyle={{color: colors.registerText}}
          onPress={() => navigation.navigate("items")}
        />
      </View>
      <DialogComponent
        style={styles.DialogStyle}
        isVisible={dialogVisible}
        setVisible={hideAlertDialog}
        title="Sedang Diajukan"
        content={
          <Text>
            Pantau terus laman history untuk melihat status peminjaman kamu
          </Text>
        }
      />
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
