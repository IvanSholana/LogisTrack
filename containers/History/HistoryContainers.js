import React from "react";
import EventStatusCardComponents from "../../components/Card/EventStatusCard";
import { colors } from "../../constants/colors";
import { FlatList } from "react-native-gesture-handler";
import peminjamanList from "../../data/local/PeminjamanData";
import { useEffect, useState } from "react";


const RenderItem = ({ item }, { navigation }) => (
  <EventStatusCardComponents
    eventName={item.user_name}
    eventDate={item.start_date}
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
  const [peminjamanData, setPeminjamanData] = useState([]);

  return (
    <>
      <FlatList
        data={peminjamanData}
        renderItem={({ item }) =>
          RenderItem({ item }, { navigation }, { route })
        }
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default HistoryContainers;
