import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RegisterContainer from "../containers/Register/RegisterContainer";
import AppBarComponent from "../components/AppBar/AppBarComponents";
import { useFonts } from "expo-font";
import { colors } from "../constants/colors";

const RegisterScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"), 
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Text style={styles.headerText}>Registrasi</Text>
      <View style={styles.container}>
        <View style={styles.registerSection}>
          <RegisterContainer navigation={navigation} />
        </View>
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
    paddingLeft: 20,
    paddingTop: 34,
    backgroundColor: colors.loginText
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: colors.loginText
  },

  registerSection: {
    flex: 1,
  },
});

export default RegisterScreen;
