import React, { useState } from "react";
import { View } from "react-native";
import EditDetailRuanganCard from "../../components/Card/AdminEditRuanganCard";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";

const AdminEditDetailRuanganContainers = ({ navigation }) => {
  const [deskripsi, setDeskripsi] = useState("");
  const [max, setMax] = useState("");

  const handleDeskripsiChange = (text) => {
    setDeskripsi(text);
  };

  const handleMaxChange = (text) => {
    setMax(text);
  };

  const handleUpdate = () => {
    console.log("Deskripsi yang diupdate:", deskripsi);
    console.log("Max yang diupdate:", max);
  };

  const productInfo = {
    imageSource:
      "https://media.istockphoto.com/id/1404046699/id/vektor/kelas-malam-latar-belakang-anime-2d-ilustrasi.jpg?s=612x612&w=0&k=20&c=MiG_h0_tZ8I4GmX78-aqshnrf8Kzk1n3sCvvZjUwciQ=",
    description:
      "Ruangan kelas adalah lingkungan pembelajaran yang didesain secara khusus untuk mendukung proses pendidikan. Ruang kelas ini terdiri dari beberapa elemen penting yang menciptakan suasana yang sesuai untuk pembelajaran efektif. Biasanya, ruang kelas memiliki dinding yang didekorasi dengan materi pendidikan, serta perlengkapan dan perabotan yang mendukung aktivitas belajar-mengajar.",
    availability: "Berkapasitas " + 500 + " orang",
  };

  return (
    <View style={{ flex: 1 }}>
      <EditDetailRuanganCard
        imageSource={productInfo.imageSource}
        description={productInfo.description}
        availability={productInfo.availability}
        onChangeTextDeskripsi={handleDeskripsiChange}
        onChangeTextMax={handleMaxChange}
      />
      <ButtonComponent
        buttontext={"Update"}
        buttonstyle={{
          padding: 10,
          backgroundColor: colors.buttonLogin,
          margin: 20,
          borderRadius: 10,
        }}
        onPress={handleUpdate}
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

export default AdminEditDetailRuanganContainers;
