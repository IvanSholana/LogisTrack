import React from "react";
import { View, Image } from "react-native";
import DetailCard from "../../components/Card/DetailCard";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";

const RoomDetailContainers = ({ navigation }) => {
  const productInfo = {
    deskripsi: "Deskripsi",
    imageSource:
      "https://media.istockphoto.com/id/1404046699/id/vektor/kelas-malam-latar-belakang-anime-2d-ilustrasi.jpg?s=612x612&w=0&k=20&c=MiG_h0_tZ8I4GmX78-aqshnrf8Kzk1n3sCvvZjUwciQ=",
    description:
      "Ruangan kelas adalah lingkungan pembelajaran yang didesain secara khusus untuk mendukung proses pendidikan. Ruang kelas ini terdiri dari beberapa elemen penting yang menciptakan suasana yang sesuai untuk pembelajaran efektif. Biasanya, ruang kelas memiliki dinding yang didekorasi dengan materi pendidikan, serta perlengkapan dan perabotan yang mendukung aktivitas belajar-mengajar.",
    max: "Kapasitas",
    availability: 500 + " Orang",
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

export default RoomDetailContainers;
