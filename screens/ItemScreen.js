import React from "react";
import {
  DateContainer,
  AppBarContainer,
  FormAlatContainer,
} from "../containers/Item/ItemContainer";
import { View, StyleSheet } from "react-native";

const ItemScreen = () => {
  return (
    <View style={styles.container}>
      <AppBarContainer />
      <View style={styles.mainContent}>
        <FormAlatContainer />
      </View>
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
  mainContent: {
    flex: 1,
  },
  dateContainer: {
    alignItems: "flex-end",
    paddingVertical: 20,
  },
});

export default ItemScreen;
