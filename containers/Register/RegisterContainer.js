import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { StyleSheet, View} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { colors } from "../../constants/colors";
// import User from "../../domain/models/user";


const RegisterContainer = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Mahasiswa" },
    { key: "2", value: "Dosen" },
    { key: "3", value: "Staff" },
  ];

  // const testings = new User();

  // console.log(testings.generateToken())  

  return (
    <>
      <InputText
        textinputname={"NIM/NIDN"}
        placeholder={"Masukkan NIM/NIDN..."}
      />
      <InputText
        textinputname={"Password"}
        security={true}
        placeholder={"Masukkan Password..."}
      />
      <InputText
        textinputname={"E-Mail Institut"}
        keyboardType="email-address"
        placeholder={"Masukkan Email..."}
      />
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save={selected}
        placeholder="Status/Jabatan"
        boxStyles={{
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <InputText
        textinputname={"Pertanyaan Keamanan"}
        placeholder={"Masukkan Pertanyaan..."}
        
      />
      <InputText
        textinputname={"Jawaban Pertanyaan Keamanan"}
        placeholder={"Masukkan Jawaban..."}
      />
      <View style={styles.buttonsection}>
        <ButtonComponent
          buttontext={"Register"}
          buttonstyle={styles.button}
          textstyle={styles.logintext}
          onPress={() => navigation.navigate("Login")}
        />
        <ButtonComponent
          buttontext={"Back"}
          buttonstyle={[
            styles.button,
            { backgroundColor: colors.buttonRegister },
          ]}
          textstyle={styles.registertext}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsection: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: colors.buttonLogin,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  logintext: {
    color: colors.loginText,
  },
  registertext: {
    color: colors.registerText,
  },
});

export default RegisterContainer;
