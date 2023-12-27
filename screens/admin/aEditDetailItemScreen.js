import { StyleSheet, View, Text } from "react-native";
import AdminEditDetailItemContainers from "../../containers/Item/admEditDetailItemContainers";
import AppBarComponent from "../../components/AppBar/AppBarComponent";
import { useFonts } from "expo-font";

const AdminEditDetailItemScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
  });
  const { data } = route.params;
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Edit Detail {data.nama}</Text>}
      />
      <View style={styles.container}>
        <View style={styles.appBar}></View>
        <View style={styles.historySection}>
          <AdminEditDetailItemContainers
            navigation={navigation}
            route={route}
          />
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
  historySection: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default AdminEditDetailItemScreen;
