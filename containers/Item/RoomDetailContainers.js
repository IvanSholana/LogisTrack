import React from "react";
import { View } from "react-native";
import DetailCard from "../../components/Card/DetailCard";

const RoomDetailContainers = ({ route }) => {
  const { detail } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <DetailCard
        imageSource={detail.image}
        description={detail.description}
        availability={detail.capacity}
      />
    </View>
  );
};

export default RoomDetailContainers;
