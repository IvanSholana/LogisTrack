import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailCard = ({
  imageSource,
  description,
  availability,
  deskripsi,
  max,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.leftAlign]}>{deskripsi}</Text>
          <Text style={[styles.descriptionText, styles.leftAlign]}>
            {description}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.leftAlign]}>{max}</Text>
          <Text style={[styles.availabilityText, styles.leftAlign]}>
            {availability ? `${availability}` : "Tidak Tersedia"}
          </Text>
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
    width: 200,
    height: 200,
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
    marginBottom: 5,
    color: "#333",
  },
  descriptionText: {
    fontSize: 16,
  },
  availabilityText: {
    fontSize: 16,
  },
  leftAlign: {
    textAlign: "left",
  },
});

export default DetailCard;
