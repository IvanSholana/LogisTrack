import React from "react";
import { View, StyleSheet } from "react-native";
import HistoryEventCard from "../../components/Card/HistoryEventCard";
import { colors } from "../../constants/colors";
import TableComponent from "../../components/Table/TableComponent";
import { FlatList } from "react-native-gesture-handler";
import StatusComponent from "../../components/Status/StatusComponent";

const DetailHistoryContainers = () => {
  // Data contoh peminjaman
  const peminjamanData = [
    { namaPeminjaman: 'Buku', qty: 5 },
    { namaPeminjaman: 'Pensil', qty: 10 },
    { namaPeminjaman: 'Kertas', qty: 8 },
  ];

  const eventsData = [
    {
      eventDate: "20/12/2023",
      status: "Ditolak",
      eventStatusColor: colors.eventRejected,
      startDateTime: "2023-12-20T09:00:00",
      endDateTime: "2023-12-20T17:00:00",
      alasan: "Ruang kelas pada tanggal yang dipilih masih waktu perkuliahan. Silahkan buat lagi dan pilih jam di atas jam 5 sore.",
    },
    // Menambahkan data acara lainnya sesuai kebutuhan
  ];

  const renderItem = ({ item }) => (
    <HistoryEventCard
      status={
        <StatusComponent status={item.status} color={item.eventStatusColor} />
      }
      startDateTime={item.startDateTime}
      endDateTime={item.endDateTime}
      reason={item.eventName}
      alasan={item.alasan}
    />
  );

  return (
    <View style={styles.container}>
      <TableComponent data={peminjamanData} />
      <FlatList
        data={eventsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.eventName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
});

export default DetailHistoryContainers;
