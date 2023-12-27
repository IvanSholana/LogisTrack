import React from "react";
import EventStatusCardComponents from "../../components/Card/EventStatusCard";
import { colors } from "../../constants/colors";
import { FlatList } from "react-native-gesture-handler";
import peminjamanList from "../../data/local/PeminjamanData";
import { useSelector } from "react-redux";

const RenderItem = ({ item }, { navigation }) => {
  return (
    <EventStatusCardComponents
      eventName={item.namaAcara}
      eventDate={item.tanggalAwal}
      eventStatusColor={
        item.status == "Ditolak"
          ? colors.eventRejected
          : item.status == "Diajukan"
          ? colors.eventInProgress
          : item.status == "Disetujui"
          ? colors.eventProcessing
          : colors.buttonLogin
      }
      status={item.status}
      navigation={() => navigation.navigate("detailpinjam", { data: item })}
    />
  );
};

const HistoryContainers = ({ navigation, route }) => {
  const { nama, status, username } = useSelector((state) => state.user);
  const dataPeminjaman = useSelector(
    (state) => state.peminjaman.dataPeminjaman
  );

  let showHistory = null;

  if (status === "Admin") {
    showHistory = dataPeminjaman;
  } else {
    showHistory = dataPeminjaman.filter((e) => e.namaPeminjam === nama);
  }

  return (
    <>
      <FlatList
        data={showHistory}
        renderItem={({ item }) =>
          RenderItem({ item }, { navigation }, { route })
        }
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default HistoryContainers;