import React from "react";
import InputText from "../../components/InputText/InputText";
import { StyleSheet, View, Text } from "react-native";
import TableComponent from "../../components/Table/TableComponent";

const PinjamDetailContainer = ({ navigation }) => {
  const myTableHead = ['No', 'List', 'Qty'];
  const peminjamanData = [
    { namaPeminjaman: "Buku", qty: 5 },
    { namaPeminjaman: "Pensil", qty: 10 },
    { namaPeminjaman: "Kertas", qty: 8 },
  ];

  return (
    <View style={styles.container}>
        <TableComponent data={peminjamanData} tableHead={myTableHead}  />
        <View style={styles.InputText}>
        <InputText textinputname={"Nama Event"} />
        <InputText textinputname={"Tanggal Mulai"} />
        <InputText textinputname={"Waktu Mulai"} />
        <InputText textinputname={"Tanggal Selesai"} />
        <InputText textinputname={"Waktu Selesai"} />
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  InputText: {
    paddingTop: 20,
  },
  DialogStyle: {
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "black",
  },
});

export default PinjamDetailContainer;
