// ProfileScreen.js

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const data = [
  { id: "1", name: "Muammar Faridz", nim: "1203210060" },
  // Tambahkan data lain jika diperlukan
];

const ProfileScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.label}>Nama:</Text>
      <Text style={styles.value}>{item.name}</Text>
      <Text style={styles.label}>NIM:</Text>
      <Text style={styles.value}>{item.nim}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.card}>
        <Text style={styles.serviceTitle}>Layanan Pelanggan</Text>
        <Text style={styles.serviceInfo}>Hubungi kami di: 123-456-789</Text>
        <Text style={styles.serviceInfo}>Email: support@app.com</Text>
        {/* Tambahkan informasi lain tentang layanan pelanggan jika diperlukan */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  card: {
    backgroundColor: "#A7C957",
    margin: 20,
    padding: 15,
    borderRadius: 8,
    elevation: 3,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  serviceInfo: {
    fontSize: 16,
    color: "#555",
  },
});

export default ProfileScreen;
