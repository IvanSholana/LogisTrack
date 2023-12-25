import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

const EditDetailRuanganCard = ({
  imageSource,
  availability,
  description,
  max,
  onChangeTextDeskripsi,
  onChangeTextMax,
}) => {
  const [inputDeskripsi, setInputDeskripsi] = useState(description);
  const [inputMax, setInputMax] = useState(availability);

  const handleDeskripsiChange = (text) => {
    setInputDeskripsi(text);
    onChangeTextDeskripsi(text);
  };

  const handleMaxChange = (text) => {
    setInputMax(text);
    onChangeTextMax(text);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageSource }}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.leftAlign]}>Deskripsi</Text>
          <TextInput
            style={[styles.descriptionText, styles.leftAlign]}
            value={inputDeskripsi}
            onChangeText={handleDeskripsiChange}
            multiline={true}
            placeholder="Deskripsi"
            numberOfLines={4}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.leftAlign]}>Kapasitas</Text>
          <TextInput
            style={[
              styles.availabilityText,
              styles.leftAlign,
              styles.inputText,
            ]}
            value={inputMax}
            onChangeText={handleMaxChange}
            placeholder="Kapasitas"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    marginBottom: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  textContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  availabilityText: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  leftAlign: {
    textAlign: "left",
  },
});

export default EditDetailRuanganCard;
