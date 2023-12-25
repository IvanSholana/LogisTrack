import React from "react";
import {
  DateContainer,
  FormPeminjaman,
} from "../containers/Item/ItemContainer";
import { View, StyleSheet } from "react-native";

const ItemScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <FormPeminjaman navigation={navigation} route={route} />
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
    backgroundColor: "white",
  },

  dateContainer: {
    alignItems: "flex-end",
    paddingVertical: 20,
    backgroundColor: "white",
  },
});

export default ItemScreen;
