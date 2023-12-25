import React from "react";
import { View } from "react-native";
import DetailCard from "../../components/Card/DetailCard";

const RoomDetailContainers = ({ route }) => {
  const { detail } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <DetailCard
        imageSource={detail.foto}
        description={detail.deskripsi}
        availability={detail.kapasitas}
      />
    </View>
  );
};

export default RoomDetailContainers;
