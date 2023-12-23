import { Image, StyleSheet, View, Text } from "react-native";
import ItemDetailContainers from "../containers/Item/ItemDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";

const ItemDetailScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <AppBarComponent
          content={<Text style={styles.headerText}>Detail Item</Text>}
        />
        <View style={styles.itemSection}>
          <ItemDetailContainers navigation={navigation} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  itemSection: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold_Italic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default ItemDetailScreen;
