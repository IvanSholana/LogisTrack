import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import {
  ProfileContainer,
  ProfileContent,
} from "../containers/Profile/ProfileContainer";

const UserProfileScreen = ({ navigation }, { userstatus }) => {
  return (
    <>
      <AppBarComponent content={<ProfileContainer navigation={navigation} />} />
      <View style={styles.content}>
        <ProfileContent />
      </View>
    </>
  );
};

const AdminProfileScreen = ({ navigation }) => {
  return (
    <>
      <AppBarComponent content={<ProfileContainer navigation={navigation} />} />
      <View style={styles.content}>
        <ProfileContent />
      </View>
    </>
  );
};

const ProfileScreen = ({ navigation }, userstatus) => {
  return (
    <>
      {userstatus == "mahasiswa" || userstatus == "dosen" ? (
        <UserProfileScreen />
      ) : (
        <AdminProfileScreen />
      )}
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
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
});

export default ProfileScreen;
