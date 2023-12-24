import React from "react";
import { View, StyleSheet } from "react-native";
import HistoryEventCard from "../../components/Card/HistoryEventCard";
import { colors } from "../../constants/colors";
import TableComponent from "../../components/Table/TableComponent";
import StatusComponent from "../../components/Status/StatusComponent";

const DetailHistoryContainers = ({ navigation }) => {
  // Data contoh peminjaman
  const myTableHead = ["No", "List", "Qty"];
  const peminjamanData = [
    { namaPeminjaman: "Buku", qty: 5 },
    { namaPeminjaman: "Pensil", qty: 10 },
    { namaPeminjaman: "Kertas", qty: 8 },
  ];

  const eventsData = [
    {
      eventDate: "20/12/2023",
      status: "Ditolak",
      eventStatusColor: colors.eventRejected,
      startDateTime: "2023-12-20T09:00:00",
      endDateTime: "2023-12-20T17:00:00",
      alasan:
        "Ruang kelas pada tanggal yang dipilih masih waktu perkuliahan. Silahkan buat lagi dan pilih jam di atas jam 5 sore.",
    },
  ];

  return (
    <View style={styles.container}>

      <View>
        <TableComponent data={peminjamanData} tableHead={myTableHead} />
      </View>
      <View style={{ marginTop: 120 }}>
        <HistoryEventCard
          status={
            <StatusComponent
              status={eventsData[0].status}
              color={eventsData[0].eventStatusColor}
            />
          }
          startDateTime={eventsData[0].startDateTime}
          endDateTime={eventsData[0].endDateTime}
          reason={eventsData[0].eventName}
          alasan={eventsData[0].alasan}
        />
        <ButtonComponent
          buttontext={"Kembali"}
          buttonstyle={{
            backgroundColor: colors.buttonLogin,
            margin: 10,
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
    flex: 1,
  },
});

export default DetailHistoryContainers;
