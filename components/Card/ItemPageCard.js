import React, { useState } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const ItemPage = ({ item, navigation, tab }) => {
  const handleDelete = () => {
    // Add logic for the delete button press
    console.log("Delete button pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{item.nama}</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.editButton}
          onPress={() =>
            navigation.navigate(
              tab == "Peralatan" ? "admineditalat" : "admineditruangan",
              { data: item }
            )
          }
        >
          <Icon name="edit" size={20} color="black" />
        </Pressable>
        <Pressable style={styles.deleteButton}>
          <Icon name="trash" size={20} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    justifyContent: "space-between",
    margin: 10,
    borderColor: colors.buttonRegister,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  countItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  countButton: {
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  itemCount: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  editButton: {
    padding: 10,
    marginRight: 5,
  },
  deleteButton: {
    padding: 10,
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: "row",
  },
});

export default ItemPage;
