import { Image, StyleSheet, View } from "react-native";
import ItemDetailContainers from "../containers/Item/ItemDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";

const ItemDetailScreen= () => {
  return (
    <>
      <View style={styles.container}>
       <AppBarComponent content={
          <Image
            source={require("../assets/images/DetailItem.png")}
            style={styles.logo}
          />
        }/>
        <View style={styles.itemSection}>
          <ItemDetailContainers />
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

});

export default ItemDetailScreen;
