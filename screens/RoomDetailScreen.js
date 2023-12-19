import { Image, StyleSheet, View } from "react-native";
import RoomDetailContainers from "../containers/Item/RoomDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";

const RoomDetailScreen= () => {
  return (
    <>
      <View style={styles.container}>
      <AppBarComponent content={
          <Image
            source={require("../assets/images/DetailRuang.png")}
            style={styles.logo}
          />
        }/>
        <View style={styles.roomSection}>
          <RoomDetailContainers />
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

});

export default RoomDetailScreen;
