import React from "react";
import { View, Image, StyleSheet } from "react-native";
import RegisterContainer from "../containers/Register/RegisterContainer";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Registrasi.png")}
        style={styles.logo}
      />
      <View style={styles.registerSection}>
        <RegisterContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  logo: {
    marginTop: 30,
    marginBottom: 10,
  },
  registerSection: {
    flex: 1,
  },
});

export default RegisterScreen;
