import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AddPeralatanCardComponents from "../../components/Card/AddPeralatanCard";
import peralatanList from "../../data/local/PeralatanData";

const FormAlatContainer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={peralatanList}
        renderItem={({ item }) => (
          <AddPeralatanCardComponents navigation={navigation} data={item} />
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
