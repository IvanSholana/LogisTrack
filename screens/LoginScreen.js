import { Image, StyleSheet, View } from "react-native";
import React from "react";
import LoginContainer from "../containers/Login/LoginContainer";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          source={require("../assets/images/LogisTrack.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Image source={require("../assets/images/cuate.png")} />
      <View style={styles.loginsection}>
        <LoginContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    borderColor: "black",
  },
  logocontainer: {
    padding: 20,
  },
  loginsection: {
    paddingHorizontal: 20,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default LoginScreen;
