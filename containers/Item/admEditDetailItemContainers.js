import React, { useState } from "react";
import { View } from "react-native";
import EditDetailCard from "../../components/Card/EditDetailCard";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";

const AdminEditDetailItemContainers = ({ navigation }) => {
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
      "https://lzd-img-global.slatic.net/g/p/1dc853a6d48847e1a3127ef39b8be198.jpg_720x720q80.jpg",
    description:
      "HDMI (High-Definition Multimedia Interface) adalah antarmuka digital yang digunakan untuk mentransfer data audio dan video berkualitas tinggi dari satu perangkat ke perangkat lainnya. Ini adalah standar koneksi yang umum digunakan dalam industri elektronik konsumen, terutama pada perangkat seperti TV, monitor komputer, perangkat game, pemutar Blu-ray, dan banyak perangkat lainnya.",
    availability: "Tersedia " + 5 + " Pcs",
  };
  
  return (
    <View style={{ flex: 1 }}>
      <EditDetailCard
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

export default AdminEditDetailItemContainers;
