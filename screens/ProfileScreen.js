import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import {
  ProfileContainer,
  ProfileContent,
} from "../containers/Profile/ProfileContainer";

import { useSelector } from "react-redux";
import {
  AdminProfileContainer,
  AdminProfileContent,
} from "../containers/Profile/admProfileContainers";

const UserProfileScreen = ({ navigation }) => {
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
      <AppBarComponent
        content={<AdminProfileContainer navigation={navigation} />}
      />
      <View style={styles.content}>
        <AdminProfileContent />
      </View>
    </>
  );
};

const ProfileScreen = ({ navigation }) => {
  const { status } = useSelector((state) => state.user);

  return (
    <>
      {status == "Mahasiswa" || status == "Dosen" ? (
        <UserProfileScreen navigation={navigation} />
      ) : (
        <AdminProfileScreen navigation={navigation} />
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
