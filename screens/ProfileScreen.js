import { StyleSheet, View } from "react-native";
import AppBarComponent from "../components/AppBar/AppBarComponents";
import {
  ProfileContainer,
  ProfileContent,
} from "../containers/Profile/ProfileContainer";

const ProfileScreen = () => {
  return (
    <>
      <AppBarComponent content={<ProfileContainer />} />
      <View style={styles.content}>
        <ProfileContent />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
  },
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
