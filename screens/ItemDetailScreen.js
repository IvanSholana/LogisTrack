import { Image, StyleSheet, View, Text } from "react-native";
import ItemDetailContainers from "../containers/Item/ItemDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import ButtonComponent from "../components/Button/ButtonComponent";
import { colors } from "../constants/colors";
import { useFonts } from "expo-font";

const ItemDetailScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <View style={styles.container}>
        <AppBarComponent
          content={<Text style={styles.headerText}>Detail Item</Text>}
        />
        <View style={styles.itemSection}>
          <ItemDetailContainers navigation={navigation} route={route} />
        </View>
        <View style={styles.buttonsection}>
          <ButtonComponent
            buttontext={"Kembali"}
            buttonstyle={styles.button}
            textstyle={styles.logintext}
            onPress={() => navigation.navigate("items")}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  itemSection: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
  buttonsection: {
    justifyContent: "flex-end",
    backgroundColor: "white",
    padding: 20,
  },
  button: {
    backgroundColor: colors.buttonLogin,
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: "flex-end",
  },
  logintext: {
    color: colors.loginText,
  },
});

export default ItemDetailScreen;
