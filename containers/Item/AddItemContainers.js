import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import InputText from "../../components/InputText/InputText";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import { launchImageLibrary } from 'react-native-image-picker';

const AddItemContainers = ({ navigation }) => {
  const [jumlah, setJumlah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [nama, setNama] = useState("");
  const [selectedOption, setSelectedOption] = useState(""); // State untuk pilihan radio
  const [jumlahlabel, setJumlahLabel] = useState("Kuantitas");
  const [selectedImage, setSelectedImage] = useState(null);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleChooseImage = () => {
    const options = {
      mediaType: 'image',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };
  
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image selection');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setSelectedImage(response);
      }
    });
  };
  
  return (
    <>
      <InputText
        textinputname={"Nama Aset"}
        placeholder={"Masukkan Nama Aset..."}
        value={nama}
        onChangeText={setNama}
        security={true}
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
        >
        </TouchableOpacity>
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
        >
        </TouchableOpacity>
      </View>

      <InputText
        textinputname={"Deskripsi"}
        placeholder={"Masukkan Deskripsi..."}
        value={deskripsi}
        onChangeText={setDeskripsi}
        security={true}
      />
      <InputText
        textinputname={jumlahlabel}
        placeholder={`Masukkan ${jumlahlabel}...`}
        value={jumlah}
        onChangeText={setJumlah}
        security={true}
      />
            {/* Tombol Unggah Gambar */}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={handleChooseImage}>
        <Text style={styles.uploadText}>Unggah Gambar</Text>
        </TouchableOpacity>

      {/* Menampilkan gambar yang dipilih */}
        {selectedImage && (
        <Image
            source={{ uri: selectedImage.uri }}
            style={styles.selectedImage}/>
            )}

      
      <View style={styles.buttonsection}>
        <ButtonComponent
          buttontext={"Login"}
          buttonstyle={styles.button}
          textstyle={styles.logintext}
          onPress={() => navigation.navigate("MainTabsMenu")}
        />
        <ButtonComponent
          buttontext={"Register"}
          buttonstyle={[
            styles.button,
            { backgroundColor: colors.buttonRegister },
          ]}
          textstyle={styles.registertext}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    marginTop:10,
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
  register: {
    backgroundColor: colors.buttonRegister,
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  logintext: {
    color: colors.loginText,
  },
  registertext: {
    color: colors.registerText,
  },
  uploadButton: {
    backgroundColor: colors.buttonLogin,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  uploadText: {
    color: "white",
    fontWeight: "bold",
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default AddItemContainers;
