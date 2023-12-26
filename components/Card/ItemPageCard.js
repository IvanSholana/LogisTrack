import React, { useState } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const ItemPage = ({ isEditMode, setEditMode }) => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  const handleEdit = () => {
    // Add logic for the edit button press
    navigation.navigate("aDetailEditRuangan");
  };

  const handleDelete = () => {
    // Add logic for the delete button press
    console.log("Delete button pressed");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("detail")}>
        <Text style={styles.itemName}>Nama Ruangan</Text>
      </Pressable>

      {isEditMode ? (
        <>
          <Pressable onPress={handleEdit} style={styles.editButton}>
            <Icon name="edit" size={20} color="black" />
          </Pressable>
          <Pressable onPress={handleDelete} style={styles.deleteButton}>
            <Icon name="trash" size={20} color="black" />
          </Pressable>
        </>
      ) : null}
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
    backgroundColor: "red",
    borderRadius: 5,
  },
});

export default ItemPage;
