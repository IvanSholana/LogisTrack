import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StatusComponent from "../Status/StatusComponent";

const AdminHistoryEventCard = ({ status, startDateTime, endDateTime, reason, alasan }) => {
  const formattedStatus = status.props.status.toLowerCase();

  return (
    <View style={styles.card}>
      {formattedStatus !== "" && (
        <View>
          <Text style={styles.text}>Status:</Text>
          <StatusComponent status={status.props.status} color={status.props.color} />
        </View>
      )}
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
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default AdminHistoryEventCard;
