import React, { useState } from "react";
import { View } from "react-native";
import EditDetailCard from "../../components/Card/EditDetailCard";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";

const AdminEditDetailItemContainers = ({ navigation, route }) => {
  const { data } = route.params;
  console.log(data);

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

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <EditDetailCard
          imageSource={data.gambar}
          description={data.deskripsi}
          availability={data.jumlah}
          onChangeTextDeskripsi={handleDeskripsiChange}
          onChangeTextMax={handleMaxChange}
        />
        <ButtonComponent
          buttontext={"Update"}
          buttonstyle={{
            padding: 10,
            backgroundColor: colors.buttonLogin,
            marginHorizontal: 20,
            borderRadius: 10,
            marginBottom: 10,
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
      </ScrollView>
    </View>
  );
};

export default AdminEditDetailItemContainers;
