import React from "react";
import { View } from "react-native";
import DetailCard from "../../components/Card/DetailCard";

const ItemDetailContainers = () => {
  const productInfo = {
    deskripsi: "Deskripsi",
    imageSource:
      "https://hosatech.com/wp-content/uploads/2014/03/HDMD-400-Full.jpg",
    description:
      "HDMI (High-Definition Multimedia Interface) adalah antarmuka digital yang digunakan untuk mentransfer data audio dan video berkualitas tinggi dari satu perangkat ke perangkat lainnya. Ini adalah standar koneksi yang umum digunakan dalam industri elektronik konsumen, terutama pada perangkat seperti TV, monitor komputer, perangkat game, pemutar Blu-ray, dan banyak perangkat lainnya.",
    max: "Ketersediaan",
    availability: "Tersedia " + 5 + " Pcs",
  };

  return (
    <View style={{ flex: 1 }}>
      <DetailCard
        deskripsi={productInfo.deskripsi}
        imageSource={productInfo.imageSource}
        description={productInfo.description}
        max={productInfo.max}
        availability={productInfo.availability}
      />
    </View>
  );
};

export default ItemDetailContainers;
