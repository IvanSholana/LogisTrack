import React from "react";
import {
  DateContainer,
  AppBarContainer,
  FormPeminjaman,
} from "../containers/Item/ItemContainer";
import { View, StyleSheet } from "react-native";

const ItemScreen = () => {
  return (
    <View style={styles.container}>
      <FormPeminjaman />
      <View style={styles.dateContainer}>
        <DateContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  dateContainer: {
    alignItems: "flex-end",
    paddingVertical: 20,
  },
});

export default ItemScreen;