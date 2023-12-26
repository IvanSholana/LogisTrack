import { Pressable, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/colors";
import { useState } from "react";

const AddPeralatanCardComponents = ({
  navigation,
  data,
  keranjang,
  setKeranjang,
}) => {
  const [count, setCount] = useState(0);

  const updatedKeranjang = keranjang.map((item) => {
    if (data.id === item.id) {
      return { ...item, jumlah: count };
    }

    return item;
  });

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
    setKeranjang(updatedKeranjang);
  };

  const handleIncrement = () => {
    if (count < data.jumlah) {
      setCount((prevCount) => prevCount + 1);
    }
    setKeranjang(updatedKeranjang);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("detail", { detail: data })}
      >
        <Text style={styles.itemName}>{data.name}</Text>
      </Pressable>

      <View style={styles.countItem}>
        <Pressable onPress={handleDecrement} style={styles.countButton}>
          <Icon name="minus" size={15} color="black" />
        </Pressable>
        <Text style={styles.itemCount}>{count}</Text>
        <Pressable onPress={handleIncrement} style={styles.countButton}>
          <Icon name="plus" size={15} color="black" />
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
});

export default AddPeralatanCardComponents;
