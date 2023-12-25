import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import RegisterContainer from "../containers/Register/RegisterContainer";
import AppBarComponent from "../components/AppBar/AppBarComponent";
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
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200} // Sesuaikan offset sesuai kebutuhan
    >
      <AppBarComponent
        content={<Text style={styles.headerText}>Registrasi</Text>}
      />
      <View style={styles.container}>
          <RegisterContainer navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic",
    color: "#6A994E",
    textAlignVertical: "center",
    paddingLeft: 20,
    backgroundColor: colors.loginText,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: colors.loginText,
  },
});

export default RegisterScreen;
