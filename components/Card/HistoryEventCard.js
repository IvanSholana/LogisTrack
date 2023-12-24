import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EventCard = ({ status, startDateTime, endDateTime, alasan }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Status:</Text>
      <View style={styles.statuscontainer}>{status}</View>
      <Text style={styles.text}>Tanggal dan Waktu Mulai: </Text>
      <Text>{new Date(startDateTime).toLocaleString()}</Text>
      <Text style={styles.text}>Tanggal dan Waktu Selesai: </Text>
      <Text>{new Date(endDateTime).toLocaleString()}</Text>
      <Text style={styles.text}>Alasan: </Text>
      <Text>{alasan}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 5,
  },
  text: {
    marginTop: 10,
    fontWeight: "bold",
  },
  statuscontainer: {
    paddingTop: 5,
  },
});

export default EventCard;