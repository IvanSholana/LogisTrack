import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const LoginContainer = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const user = await loginUser(username, password);

      console.log("Login successful. User:", user);
    } catch (error) {
      console.error("Login failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <InputText
        textinputname={"NIM/NIDN"}
        placeholder={"Masukkan NIM/NIDN..."}
        value={username}
        onChangeText={setUsername}
      />
      <InputText
        textinputname={"Password"}
        placeholder={"Masukkan Password..."}
        value={password}
        onChangeText={setPassword}
        security={true}
      />
      <ButtonComponent
        buttontext={"Login"}
        buttonstyle={styles.login}
        textstyle={styles.logintext}
        onPress={() => navigation.navigate("MainTabsMenu")}
      />
      <ButtonComponent
        buttontext={"Register"}
        buttonstyle={styles.register}
        textstyle={styles.registertext}
        onPress={() => navigation.navigate("Register")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  login: {
    backgroundColor: colors.buttonLogin,
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  register: {
    backgroundColor: colors.buttonRegister,
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  logintext: {
    color: colors.LoginText,
  },
  registertext: {
    color: colors.RegisterText,
  },
});

export default LoginContainer;
