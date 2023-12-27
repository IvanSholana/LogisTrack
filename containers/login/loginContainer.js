import React, { useState, useEffect } from "react";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colors";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import usersdata from "../../data/local/UserData";

const LoginContainer = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const ninChangeHandle = (NIMandNIDN) => {
    setUsername(NIMandNIDN);
  };

  const passwordChangeHandle = (psswd) => {
    setPassword(psswd);
  };

  const handleLogin = () => {
    try {
      setLoading(true);
      console.log('Cek userData:', usersdata); // Tambahkan log ini
      const userData = usersdata.find(
        (e) => e.username == username && e.password == password
      );
      console.log('Cek hasil pencarian:', userData); // Tambahkan log ini
      if (userData) {
        const { name, status, username } = userData;
        console.log(`nama : ${name} dan user ${status} dan NIM ${username}`);

        dispatch(setUser({ name: name, status: status, username: username }));

        console.log("Login Berhasil");
        return true;
      } else {
        console.log("Login gagal");
        return false;
      }
    } catch (error) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <InputText
        textinputname={"NIM/NIDN"}
        placeholder={"Masukkan NIM/NIDN..."}
        setValue={ninChangeHandle}
      />
      <InputText
        textinputname={"Password"}
        placeholder={"Masukkan Password..."}
        setValue={passwordChangeHandle}
        security={true}
      />
      <View style={styles.buttonsection}>
        <ButtonComponent
          buttontext={"Login"}
          buttonstyle={styles.button}
          textstyle={styles.logintext}
          onPress={() => {
            if (handleLogin()) {
              navigation.navigate("MainTabsMenu");
            }
          }}
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
