import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { StyleSheet, View, Alert} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { colors } from "../../constants/colors";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import usersdata from "../../data/local/UserData";


const RegisterContainer = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const data = [
    { key: "Mahasiswa", value: "Mahasiswa" },
    { key: "Dosen", value: "Dosen" },
    { key: "Staff", value: "Staff" },
  ];

  const registUser = () => {
    const newUser = {
        name,
        username,
        password,
        email,
        status, 
        question,
        answer,
    };

    console.log('User Baru:', newUser);
    usersdata.push(newUser);
    dispatch(setUser(newUser)); 
    Alert.alert('Sukses', 'Registrasi berhasil', [
        {
          text: 'OK',

        },
      ]);
  };

  return (
    <>
      <InputText
        textinputname={"Nama"}
        placeholder={"Masukkan Nama..."}
        value={name}
        setValue={setName}
        
      />
      <InputText
        textinputname={"NIM/NIDN"}
        placeholder={"Masukkan NIM/NIDN..."}
        value={username}
        setValue={setUsername}
      />
      <InputText
        textinputname={"Password"}
        security={true}
        placeholder={"Masukkan Password..."}
        value={password}
        setValue={setPassword}
      />
      <InputText
        textinputname={"E-Mail Institut"}
        keyboardType="email-address"
        placeholder={"Masukkan Email..."}
        value={email}
        setValue={setEmail}
      />
      <SelectList
        setSelected={(val) => {
          console.log('Selected value:', val);
          setStatus(val);
        }}        
        data={data}
        save={status}
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
        value={question}
        setValue={setQuestion}
      />
      <InputText
        textinputname={"Jawaban Pertanyaan Keamanan"}
        placeholder={"Masukkan Jawaban..."}
        value={answer}
        setValue={setAnswer}
      />
      <View style={styles.buttonsection}>
        <ButtonComponent
          buttontext={"Register"}
          buttonstyle={styles.button}
          textstyle={styles.logintext}
          onPress={() => {
            registUser();
            navigation.navigate("Login");
          }}
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
