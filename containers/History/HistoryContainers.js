import React from "react";
import EventStatusCardComponents from "../../components/Card/EventStatusCard";
import { colors } from "../../constants/colors";
import { FlatList } from "react-native-gesture-handler";
import peminjamanList from "../../data/local/PeminjamanData";

const RenderItem = ({ item }, { navigation }) => (
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

const HistoryContainers = ({ navigation, route }) => {
  return (
    <>
      <FlatList
        data={peminjamanList}
        renderItem={({ item }) =>
          RenderItem({ item }, { navigation }, { route })
        }
        keyExtractor={(item) => item.eventName}
      />
    </>
  );
};

export default HistoryContainers;
