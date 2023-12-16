import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { StyleSheet } from "react-native";

const LoginContainer = () => {
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
        textinputname={"NIDN/NIM"}
        placeholder={"Masukkan NIDN/NIM..."}
        value={username}
        onChangeText={setUsername}
      />
      <InputText
        textinputname={"Password"}
        placeholder={"Masukkan Password..."}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ButtonComponent
        buttontext={"Login"}
        buttonstyle={styles.login}
        textstyle={styles.logintext}
      />
      <ButtonComponent
        buttontext={"Register"}
        buttonstyle={styles.register}
        textstyle={styles.registertext}
      />
    </>
  );
};

const styles = StyleSheet.create({
  login: {
    backgroundColor: "#A7C957",
  },
  register: {
    backgroundColor: "#D9D9D9",
  },
  logintext: {
    color: "white",
  },
  registertext: {
    color: "#737373",
  },
});

export default LoginContainer;
