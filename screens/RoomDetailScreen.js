import { StyleSheet, View, Text } from "react-native";
import RoomDetailContainers from "../containers/Item/RoomDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponents";

const RoomDetailScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <AppBarComponent
          content={<Text style={styles.headerText}>Detail Ruangan</Text>}
        />
        <View style={styles.roomSection}>
          <RoomDetailContainers navigation={navigation} />
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
  roomSection: {
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

export default RoomDetailScreen;
