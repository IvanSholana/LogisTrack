import React from "react";
import { View, StyleSheet } from "react-native";
import HistoryEventCard from "../../components/Card/HistoryEventCard";
import { colors } from "../../constants/colors";
import TableComponent from "../../components/Table/TableComponent";
import StatusComponent from "../../components/Status/StatusComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";

const DetailHistoryContainers = ({ navigation, route }) => {
  const { data } = route.params;
  console.log(data);
  // Data contoh peminjaman
  const myTableHead = ['No', 'List', 'Qty'];
  const peminjamanData = [
    { namaPeminjaman: "Buku", qty: 5 },
    { namaPeminjaman: "Pensil", qty: 10 },
    { namaPeminjaman: "Kertas", qty: 8 },
  ];

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
          startDateTime={data.start_date}
          endDateTime={data.end_date}
          acara={data.event_name}
          alasan={data.reason}
        />
        <ButtonComponent
          buttontext={"Kembali"}
          buttonstyle={{
            backgroundColor: colors.buttonLogin,
            marginTop: 40,
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
  container: {
    justifyContent: "center",
    flex: 1,
    margin: 20,
  },
  contentsection: {
    flex: 1, // Tambahkan flex: 1 untuk mengisi ruang secara merata
  },
});

export default DetailHistoryContainers;