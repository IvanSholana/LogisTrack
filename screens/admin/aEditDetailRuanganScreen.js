import { StyleSheet, View, Text } from "react-native";
import AdminEditDetailRuanganContainers from "../../containers/Item/AdminEditDetailRuanganContainer";
import AppBarComponent from "../../components/AppBar/AppBarComponent";
import { ScrollView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

const AdminEditDetailRuanganScreen = ({ navigation, route }) => {
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
      <ScrollView>
        <View style={styles.container}>
          <AdminEditDetailRuanganContainers
            navigation={navigation}
            route={route}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default AdminEditDetailRuanganScreen;
