import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colors";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const LoginContainer = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      const user = await loginUser(username, password);
      dispatch(setUser({ nama, status }));
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
      <View style={styles.buttonsection}>
        <ButtonComponent
          buttontext={"Login"}
          buttonstyle={styles.button}
          textstyle={styles.logintext}
          onPress={() => navigation.navigate("MainTabsMenu")}
        />
        <ButtonComponent
          buttontext={"Register"}
          buttonstyle={[
            styles.button,
            { backgroundColor: colors.buttonRegister },
          ]}
          textstyle={styles.registertext}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsection: {
    flex: 1,
    marginTop: 35,
  },
  button: {
    backgroundColor: colors.buttonLogin,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  register: {
    backgroundColor: colors.buttonRegister,
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  logintext: {
    color: colors.loginText,
  },
  registertext: {
    color: colors.registerText,
  },
});

export default LoginContainer;
