import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import EditDetailRuanganCard from "../../components/Card/AdminEditRuanganCard";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";

const AdminEditDetailRuanganContainers = ({ navigation, route }) => {
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
        <View style={styles.editsection}>
          <EditDetailRuanganCard
            imageSource={data.foto}
            description={data.deskripsi}
            availability={data.kapasitas}
            onChangeTextDeskripsi={handleDeskripsiChange}
            onChangeTextMax={handleMaxChange}
          />
        </View>
        <View style={styles.buttoncontainer}>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default AdminEditDetailRuanganContainers;

const styles = StyleSheet.create({
  editsection: {
    flex: 1,
  },
});
