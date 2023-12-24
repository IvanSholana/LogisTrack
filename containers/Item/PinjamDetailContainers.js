import React from "react";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { StyleSheet, View, Text } from "react-native";
import TableComponent from "../../components/Table/TableComponent";
import DialogComponent from "../../components/Dialog/DialogComponent";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../constants/colors";

const PinjamDetailContainer = ({ navigation }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const myTableHead = ["No", "List", "Qty"];
  const peminjamanData = [
    { namaPeminjaman: "Buku", qty: 5 },
    { namaPeminjaman: "Pensil", qty: 10 },
    { namaPeminjaman: "Kertas", qty: 8 },
  ];

  const showAlertDialog = () => {
    setDialogVisible(true);
  };

  const hideAlertDialog = () => {
    setDialogVisible(false);
  };

  return (
    <>
      <ScrollView>
        <View>
          <TableComponent data={peminjamanData} tableHead={myTableHead} />
        </View>
        <View style={styles.InputText}>
          <InputText textinputname={"Nama Event"} />
          <InputText textinputname={"Tanggal Mulai"} />
          <InputText textinputname={"Waktu Mulai"} />
          <InputText textinputname={"Tanggal Selesai"} />
          <InputText textinputname={"Waktu Selesai"} />
          <TouchableOpacity onPress={showAlertDialog}>
            <ButtonComponent
              buttontext={"Ajukan"}
              buttonstyle={styles.button}
              textstyle={{ color: "white" }}
            />
          </TouchableOpacity>
          <ButtonComponent
            buttontext={"Kembali"}
            buttonstyle={{
              backgroundColor: colors.buttonRegister,
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={() => navigation.navigate("items")}
          />
        </View>
      </ScrollView>
      <DialogComponent
        style={styles.DialogStyle}
        isVisible={dialogVisible}
        setVisible={hideAlertDialog}
        title="Judul Dialog"
        content={
          <Text>
            Pantau terus laman history untuk melihat status peminjaman kamu
          </Text>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  buttonsection: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 50,
    paddingTop: 50,
  },
  button: {
    backgroundColor: colors.buttonLogin,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  InputText: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
  },
  DialogStyle: {
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "black",
  },
});

export default PinjamDetailContainer;
