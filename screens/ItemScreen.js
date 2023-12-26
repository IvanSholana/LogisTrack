import React from "react";
import { FormPeminjaman } from "../containers/Item/ItemContainer";
import { View, StyleSheet } from "react-native";

const ItemScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <FormPeminjaman navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
});

export default ItemScreen;
