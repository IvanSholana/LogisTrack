import React from "react";
import EventStatusCardComponents from "../../components/Card/EventStatusCard";
import { colors } from "../../constants/colors";
import { FlatList } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";

const renderItem = ({ item }) => (
  <EventStatusCardComponents
    eventName={item.eventName}
    eventDate={item.eventDate}
    eventStatusColor={item.eventStatusColor}
    status={item.status}
  />
);

const HistoryContainers = () => {
  const eventsData = [
    {
      eventName: "Pemira Informatika",
      eventDate: "12/12/2012",
      eventStatusColor: colors.eventInProgress,
      status: "dipinjam",
    },
    {
      eventName: "Seminar Teknologi",
      eventDate: "15/03/2022",
      eventStatusColor: colors.eventCompleted,
      status: "selesai",
    },
    {
      eventName: "Hackathon Nasional",
      eventDate: "20/06/2022",
      eventStatusColor: colors.eventRejected,
      status: "ditolak",
    },
    {
      eventName: "Workshop React Native",
      eventDate: "05/09/2022",
      eventStatusColor: colors.eventInProgress,
      status: "dipinjam",
    },
    {
      eventName: "Pekan Kreativitas",
      eventDate: "10/11/2022",
      eventStatusColor: colors.eventProcessing,
      status: "diproses",
    },
    {
      eventName: "Lomba Desain Grafis",
      eventDate: "02/01/2023",
      eventStatusColor: colors.eventInProgress,
      status: "dipinjam",
    },
    {
      eventName: "Hackathon Lokal",
      eventDate: "18/04/2023",
      eventStatusColor: colors.eventInProgress,
      status: "dipinjam",
    },
    {
      eventName: "Seminar Bisnis Digital",
      eventDate: "30/07/2023",
      eventStatusColor: colors.eventInProgress,
      status: "dipinjam",
    },
  ];

  return (
    <>
      <FlatList
        data={eventsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.eventName}
      />
    </>
  );
};

export default HistoryContainers;
