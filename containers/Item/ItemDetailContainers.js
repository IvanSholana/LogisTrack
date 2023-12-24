import React from "react";
import { View } from "react-native";
import DetailCard from "../../components/Card/DetailCard";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";

const ItemDetailContainers = ({ navigation }) => {
  const productInfo = {
    deskripsi: "Deskripsi",
    imageSource:
      "https://lzd-img-global.slatic.net/g/p/1dc853a6d48847e1a3127ef39b8be198.jpg_720x720q80.jpg",
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
      <ButtonComponent
        buttontext={"Kembali"}
        buttonstyle={{
          padding: 10,
          backgroundColor: colors.buttonLogin,
          marginHorizontal: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("items")}
      />
    </View>
  );
};

export default ItemDetailContainers;
