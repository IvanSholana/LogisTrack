import React from "react";
import { View, StyleSheet } from "react-native";
import HistoryEventCard from "../../components/Card/HistoryEventCard";
import { colors } from "../../constants/colors";
import TableComponent from "../../components/Table/TableComponent";
import StatusComponent from "../../components/Status/StatusComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import peralatanList from "../../data/local/PeralatanData";
import ruanganList from "../../data/local/RuanganData";

const DetailHistoryContainers = ({ navigation, route }) => {
  const { data } = route.params;

  ruanganPinjam = data.ruanganDipinjam.barangPinjam =
    data.peralatanDipinjam.flatMap((e) =>
      ruanganList
        .filter((y) => e.id == y.id)
        .map((filteredItem) => ({
          namaPeminjaman: filteredItem.nama,
          qty: 1,
        }))
    );
  barangPinjam = data.peralatanDipinjam.flatMap((e) =>
    peralatanList
      .filter((y) => e.id === y.id)
      .map((filteredItem) => ({
        namaPeminjaman: filteredItem.nama,
        qty: filteredItem.jumlah,
      }))
  );

  console.log(ruanganPinjam);

  // Data contoh peminjaman
  const myTableHead = ["List", "Qty"];
  const peminjamanData = [...barangPinjam, ...ruanganPinjam];
  console.log(peminjamanData);

  return (
    <View style={styles.container}>
      <View style={styles.tablesection}>
        <TableComponent data={peminjamanData} tableHead={myTableHead} />
      </View>
      <View style={styles.contentsection}>
        <HistoryEventCard
          status={
            <StatusComponent
              status={data.status}
              color={
                data.status == "Ditolak"
                  ? colors.eventRejected
                  : data.status == "Diajukan"
                  ? colors.eventInProgress
                  : data.status == "Disetujui"
                  ? colors.eventProcessing
                  : colors.buttonLogin
              }
            />
          }
          startDateTime={data.tanggalAwal}
          endDateTime={data.tanggalAkhir}
          acara={data.namaAcara}
          alasan={data.reason}
        />
        <ButtonComponent
          buttontext={"Kembali"}
          buttonstyle={{
            backgroundColor: colors.buttonLogin,
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("history")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tablesection: {
    flex: 0.5,
  },

  container: {
    flex: 1,
    margin: 20,
  },
});

export default DetailHistoryContainers;
