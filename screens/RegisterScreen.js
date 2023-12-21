import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RegisterContainer from "../containers/Register/RegisterContainer";
import AppBarComponent from "../components/AppBar/AppBarComponents";

const RegisterScreen = ({ navigation }) => {
  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Registrasi</Text>}
      />
      <View style={styles.container}>
        <View style={styles.registerSection}>
          <RegisterContainer navigation={navigation} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },

  registerSection: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,

    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default RegisterScreen;
