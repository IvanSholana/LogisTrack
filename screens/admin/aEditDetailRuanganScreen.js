import { StyleSheet, View, Text } from "react-native";
import AdminEditDetailRuanganContainers from "../../containers/Item/AdminEditDetailRuanganContainer";
import AppBarComponent from "../../components/AppBar/AppBarComponent";
import { ScrollView } from "react-native-gesture-handler";

const AdminEditDetailRuanganScreen = ({ navigation }) => {
  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Edit Detail Ruangan</Text>}
      />
      <ScrollView>
        <View style={styles.container}>
          <AdminEditDetailRuanganContainers navigation={navigation} />
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
    fontFamily: "Poppins_700Bold_Italic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default AdminEditDetailRuanganScreen;
