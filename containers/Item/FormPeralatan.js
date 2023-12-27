import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AddPeralatanCardComponents from "../../components/Card/AddPeralatanCard";
import BarangDipinjam from "../../domain/models/BarangDipinjam";
import { useSelector } from "react-redux";

const FormAlatContainer = ({ navigation, setcheckout }) => {
  const [keranjang, setKeranjang] = useState(() =>
    peralatan.map((e) => new BarangDipinjam(e.id, 0))
  );

  useEffect(() => {
    setcheckout(keranjang.filter((e) => e.jumlah != 0));
  }, [keranjang, setKeranjang]);

  const peralatan = useSelector((state) => state.peralatan);

  return (
    <View style={styles.container}>
      <FlatList
        data={peralatan}
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
