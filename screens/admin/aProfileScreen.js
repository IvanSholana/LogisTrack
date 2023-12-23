import { StyleSheet, View } from "react-native";
import AppBarComponent from "../../components/AppBar/AppBarComponents";
import {
  ProfileContainer,
  ProfileContent,
} from "../../containers/Profile/admProfileContainers";

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <AppBarComponent content={<ProfileContainer navigation={navigation} />} />
      <View style={styles.content}>
        <ProfileContent />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
  buttoncontainer: {
    flexDirection: "row",
    width: 100,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;