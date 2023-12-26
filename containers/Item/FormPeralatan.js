import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AddPeralatanCardComponents from "../../components/Card/AddPeralatanCard";
import peralatanList from "../../data/local/PeralatanData"; // GET API
import BarangDipinjam from "../../domain/models/BarangDipinjam";

const FormAlatContainer = ({ navigation, setcheckout }) => {
  const [keranjang, setKeranjang] = useState(() =>
    peralatanList.map((e) => new BarangDipinjam(e.id, 0))
  );

  useEffect(() => {
    setcheckout(keranjang.filter((e) => e.jumlah != 0));
  }, [keranjang, setKeranjang]);

  return (
    <View style={styles.container}>
      <FlatList
        data={peralatanList}
        renderItem={({ item }) => (
          <AddPeralatanCardComponents
            navigation={navigation}
            data={item}
            keranjang={keranjang}
            setKeranjang={setKeranjang}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
});

export default FormAlatContainer;
