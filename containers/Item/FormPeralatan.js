import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AddPeralatanCardComponents from "../../components/Card/AddPeralatanCard";
import peralatanList from "../../data/local/PeralatanData";

const FormAlatContainer = ({ navigation }) => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await peralatanList();
        setItemData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={itemData}
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
