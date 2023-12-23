import { StyleSheet, View, Text } from "react-native";
import AdminEditDetailItemContainers from "../../containers/Item/admEditDetailItemContainers";
import AppBarComponent from "../../components/AppBar/AppBarComponents";

const AdminEditDetailItemScreen = ({ navigation }) => {
  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Edit Detail Item</Text>}
      />
      <View style={styles.container}>
        <View style={styles.appBar}></View>
        <View style={styles.historySection}>
          <AdminEditDetailItemContainers navigation={navigation} />
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
    fontFamily: "Poppins_700Bold_Italic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default AdminEditDetailItemScreen;
