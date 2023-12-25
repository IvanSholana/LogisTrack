import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import LoginContainer from "../containers/login/loginContainer";

const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logocontainer}>
            <Image
              source={require("../assets/images/LogisTrack.png")}
              resizeMode="contain"
            />
          </View>
          <Image source={require("../assets/images/cuate.png")} />
          <View style={styles.loginsection}>
            <LoginContainer navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    padding: 48,
  },
  loginsection: {
    justifyContent: "flex-end",
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default LoginScreen;
