import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const RegisterContainer = () => {
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Mahasiswa" },
    { key: "2", value: "Dosen" },
    { key: "3", value: "Staff" },
  ];

  return (
    <>
      <InputText textinputname={"NIM/NIDN"} />
      <InputText textinputname={"Password"} secureTextEntry={true} />
      <InputText
        textinputname={"E-Mail Institut"}
        keyboardType="email-address"
      />
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        placeholder="Status/Jabatan"
        boxStyles={{
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          marginTop: 10,
          marginBottom:10
        }}
      />
      <InputText textinputname={"Pertanyaan Keamanan"} />
      <InputText textinputname={"Jawaban Pertanyaan Keamanan"} />
      <View style={styles.buttonsection}>
        <ButtonComponent
          buttontext={"Register"}
          buttonstyle={styles.button}
          textstyle={{ color: "white" }}
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
    backgroundColor: "#A7C957",
    paddingBottom:10,
    paddingTop:10,
  },
});

export default RegisterContainer;