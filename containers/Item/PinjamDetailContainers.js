import React from "react";
import InputText from "../../components/InputText/InputText";
import { StyleSheet, View, Text } from "react-native";
import TableComponent from "../../components/Table/TableComponent";
import DialogComponent from "../../components/Dialog/DialogComponent";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../constants/colors";
import ButtonComponent from "../../components/Button/ButtonComponent";
import Peminjaman from "../../domain/models/Peminjaman";
import peralatanList from "../../data/local/PeralatanData";
import { useDispatch, useSelector } from "react-redux";
import { setPeminjaman } from "../../redux/peminjamanSlice";

const PinjamDetailContainer = ({ navigation, route }) => {
  const { data, timeline, dataRuangan } = route.params;
  const [dateAwal, dateAkhir] = timeline;
  const [tanggalAwal, jamAwal] = dateAwal.split(" ");
  const [tanggalAkhir, jamAkhir] = dateAkhir.split(" ");
  const [acara, setNamaAcara] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const dispatch = useDispatch();
  const { dataPeminjaman } = useSelector((state) => state.peminjaman);
  const { nama, status, username } = useSelector((state) => state.user);

  console.log(dataPeminjaman);
  // Pemetaan Peminjaman Ruangan
  const peminjamanRuangan = dataRuangan.map((e) => {
    return {
      namaPeminjaman: e.nama,
      qty: 1,
    };
  });

  const showAlertDialog = () => {
    setDialogVisible(true);
  };

  const hideAlertDialog = () => {
    setDialogVisible(false);
  };

  const myTableHead = ["List", "Qty"];

  // Struktur peminjamanData
  const peminjamanData = [
    ...data.map((e) => {
      const peralatan = peralatanList.find((y) => y.id === e.id);

      if (peralatan) {
        return {
          namaPeminjaman: peralatan.nama,
          qty: e.jumlah,
        };
      }
      return null; // Tambahkan ini jika diperlukan, agar tidak ada elemen null dalam array.
    }),
    ...peminjamanRuangan,
  ];

  const ruangan = dataRuangan.map((e) => {
    const matchingRuangan = dataRuangan.find((y) => e.nama === y.nama);
    return matchingRuangan ? matchingRuangan.id : null;
  });

  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <TableComponent data={peminjamanData} tableHead={myTableHead} />
          </View>
          <View style={styles.InputText}>
            <InputText
              textinputname={"Nama Event"}
              placeholder={"Masukkan Nama Event"}
              setValue={setNamaAcara}
            />
            <InputText
              textinputname={"Tanggal Mulai"}
              isEdit={false}
              fillValue={tanggalAwal}
            />
            <InputText
              textinputname={"Waktu Mulai"}
              isEdit={false}
              fillValue={jamAwal}
            />
            <InputText
              textinputname={"Tanggal Selesai"}
              isEdit={false}
              fillValue={tanggalAkhir}
            />
            <InputText
              textinputname={"Waktu Selesai"}
              isEdit={false}
              fillValue={jamAkhir}
            />
            <ButtonComponent
              onPress={() => {
                showAlertDialog(); // Pastikan Anda memanggil fungsi dengan tanda kurung
                const newPeminjamanData = new Peminjaman(
                  `${new Date().toLocaleString().toLowerCase()}`, // Menggunakan toLocaleString dan toLowerCase
                  nama,
                  acara,
                  data,
                  ruangan,
                  tanggalAwal,
                  jamAwal,
                  tanggalAkhir,
                  jamAkhir,
                  "Diajukan"
                );

                let newData = [...dataPeminjaman, newPeminjamanData];
                dispatch(setPeminjaman({ peminjaman: newData }));
              }}
              buttontext={"Ajukan"}
              buttonstyle={{
                backgroundColor: colors.buttonLogin,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
              }}
              textstyle={{ color: "white" }}
            />

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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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