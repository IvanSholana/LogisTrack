import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert} from "react-native";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import * as ImagePicker from 'expo-image-picker';
import InputText from "../../components/InputText/InputText";
import peralatanList from "../../data/local/PeralatanData";
import { useDispatch } from "react-redux";
import { setAlat } from "../../redux/alatSlice";
import ruanganList from "../../data/local/RuanganData";
import { setRuangan } from "../../redux/ruanganSlice";


const AddItemContainers = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(null);
  const [selectedOption, setSelectedOption] = useState(""); 
  const [jumlahlabel, setJumlahLabel] = useState("Kuantitas");
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .split("T")[0]
    .replace(/-/g, ""); // Mendapatkan tanggal dalam format YYYYMMDD
  const id = `${nama}_${formattedDate}`;
  const dispatch = useDispatch();

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
        setGambar(result.uri);
      } else {
        console.log("Image selection cancelled.");
      }
    } catch (error) {
      console.error("Image selection error:", error);
    }
  };
  
  const tambahPeralatan = () => {
    const peralatanBaru = {
        id,
        nama,
        jumlah,
        deskripsi,
        gambar, 
  };

    console.log('Peralatan Baru:', peralatanBaru);
    peralatanList.push(peralatanBaru)
    dispatch(setAlat(peralatanBaru))
    Alert.alert('Sukses', 'Peralatan berhasil ditambahkan', [
        {
          text: 'OK',

        },
      ]);
  };

  const tambahRuangan = () => {
    const ruanganBaru = {
        id,
        nama,
        jumlah,
        deskripsi,
        gambar, 
  };

    console.log('Ruangan Baru:', ruanganBaru);
    ruanganList.push(ruanganBaru)
    dispatch(setRuangan(ruanganBaru))
    Alert.alert('Sukses', 'Ruangan berhasil ditambahkan', [
        {
          text: 'OK',

        },
      ]);
  };
  
  return (
    <>
      <InputText
        textinputname={"Nama Aset"}
        placeholder={"Masukkan Nama Aset..."}
        value={nama}
        setValue={setNama}
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

      <InputText
        textinputname={"Deskripsi"}
        placeholder={"Masukkan Deskripsi..."}
        value={deskripsi}
        setValue={setDeskripsi}
      />
      <InputText
        textinputname={jumlahlabel}
        placeholder={`Masukkan ${jumlahlabel}...`}
        value={jumlah}
        setValue={setJumlah}
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
          onPress={selectedOption === "ruangan" ? tambahRuangan : tambahPeralatan}
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