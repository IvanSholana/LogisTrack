import { StyleSheet, View, Text } from "react-native";
import AdminItemPageContainer from "../../containers/Item/AdminItemPageContainers.js";

const AdminItemPageScreen = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.historySection}>
          <AdminItemPageContainer navigation={navigation} route={route} />
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

export default AdminItemPageScreen;
