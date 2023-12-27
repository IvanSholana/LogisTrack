import React from "react";
import { View } from "react-native";
import DetailCard from "../../components/Card/DetailCard";

const ItemDetailContainers = ({ route }) => {
  const { detail } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <DetailCard
        imageSource={detail.image}
        description={detail.description}
        availability={detail.quantity}
      />
    </View>
  );
};

export default ItemDetailContainers;
