import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colors";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import usersdata from "../../data/local/UserData";

const LoginContainer = ({ navigation }) => {
  const [nimNidn, setnimNidn] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const ninChangeHandle = (NIMandNIDN) => {
    setnimNidn(NIMandNIDN);
  };

  const passwordChangeHandle = (psswd) => {
    setPassword(psswd);
  };

  const handleLogin = () => {
    try {
      setLoading(true);

      const userData = usersdata.find(
        (e) => e.nimNidn == nimNidn && e.password == password
      );
      console.log(userData);
      if (userData) {
        const { nama, status, nimNidn } = userData;
        console.log(`nama : ${nama} dan user ${status}`);

        dispatch(setUser({ nama: nama, status: status, nim: nimNidn }));

        console.log("Login Berhasil");
        return true;
      } else {
        console.log("Login gagal");
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error.message);
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
