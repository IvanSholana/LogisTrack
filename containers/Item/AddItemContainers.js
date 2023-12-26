import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from "react-native";

import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import * as ImagePicker from "expo-image-picker";
import Peralatan from "../../domain/models/Peralatan";

const AddItemContainers = ({ navigation }) => {
  const [jumlah, setJumlah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [nama, setNama] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [jumlahlabel, setJumlahLabel] = useState("Kuantitas");
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .split("T")[0]
    .replace(/-/g, ""); // Mendapatkan tanggal dalam format YYYYMMDD
  const id = `${nama}_${formattedDate}`;
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleChooseImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("Permission to access camera roll is required!");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log("Selected Image URI:", result.uri);
        setSelectedImage(result.uri);
      } else {
        console.log("Image selection cancelled.");
      }
    } catch (error) {
      console.error("Image selection error:", error);
    }
  };

  const tambahPeralatan = () => {
    const peralatanBaru = new Peralatan(
      id,
      nama,
      jumlah,
      deskripsi,
      selectedImage
    );

    console.log("Peralatan Baru:", peralatanBaru);
    Alert.alert("Sukses", "Peralatan berhasil ditambahkan", [
      {
        text: "OK",
      },
    ]);
  };

  return (
    <>
      <TextInput
        textinputname={"Nama Aset"}
        placeholder={"Masukkan Nama Aset..."}
        value={nama}
        onChangeText={setNama}
      />
      <Text>Tipe Aset</Text>
      <View style={styles.radioContainer}>
        <Text style={styles.radioText}>Peralatan</Text>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedOption === "peralatan" && styles.selectedRadioButton,
          ]}
          onPress={() => {
            handleOptionSelect("peralatan");
            setJumlahLabel("Kuantitas");
          }}
        ></TouchableOpacity>
        <Text style={styles.radioText}>Ruangan</Text>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedOption === "ruangan" && styles.selectedRadioButton,
          ]}
          onPress={() => {
            handleOptionSelect("ruangan");
            setJumlahLabel("Kapasitas");
          }}
        ></TouchableOpacity>
      </View>

      <TextInput
        textinputname={"Deskripsi"}
        placeholder={"Masukkan Deskripsi..."}
        value={deskripsi}
        onChangeText={setDeskripsi}
      />
      <TextInput
        textinputname={jumlahlabel}
        placeholder={`Masukkan ${jumlahlabel}...`}
        value={jumlah}
        onChangeText={setJumlah}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={handleChooseImage}>
        <Text style={styles.uploadText}>Unggah Gambar</Text>
      </TouchableOpacity>

      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      ) : (
        <Text>No Image Selected</Text>
      )}

      <View style={styles.buttonsection}>
        <ButtonComponent
          buttontext={"Tambah"}
          buttonstyle={styles.button}
          textstyle={styles.addtext}
          onPress={tambahPeralatan}
        />
        <ButtonComponent
          buttontext={"Keluar"}
          buttonstyle={[
            styles.button,
            { backgroundColor: colors.buttonRegister },
          ]}
          textstyle={styles.backtext}
          onPress={() => navigation.navigate("MainTabsMenu")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadioButton: {
    backgroundColor: "grey",
  },
  radioText: {
    color: "black",
  },
  buttonsection: {
    flex: 1,
    marginTop: 35,
  },
  button: {
    backgroundColor: colors.buttonLogin,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  back: {
    backgroundColor: colors.buttonRegister,
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  addtext: {
    color: colors.loginText,
  },
  backtext: {
    color: colors.registerText,
  },
  uploadButton: {
    backgroundColor: "#6A994E",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  uploadText: {
    color: "white",
    fontWeight: "bold",
  },
  gambar: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default AddItemContainers;
