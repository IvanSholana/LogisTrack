import React from "react";
import { FormPeminjaman } from "../containers/Item/ItemContainer";
import { View, StyleSheet } from "react-native";
import AdminItemPageScreen from "./admin/aItemPagesScreen";
import { useSelector } from "react-redux";

const AdminItemScreen = ({ navigatioin, route }) => {
  return (
    <>
      <AdminItemPageScreen navigation={navigatioin} />
    </>
  );
};

const UserItemScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <FormPeminjaman navigation={navigation} route={route} />
    </View>
  );
};

const ItemScreen = ({ navigation, route }) => {
  const { status } = useSelector((state) => state.user);
  return (
    <>
      {status == "Admin" ? (
        <AdminItemScreen navigatioin={navigation} />
      ) : (
        <UserItemScreen navigation={navigation} route={route} />
      )}
    </>
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
