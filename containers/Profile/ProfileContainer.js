import { Image, View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/colors";
import DialogComponent from "../../components/Dialog/DialogComponent";
import { useState } from "react";

const ProfileContainer = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Profilku.png")}
          style={styles.logo}
        />
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={() => setDialogVisible(true)}>
            <Icon name="info-circle" size={30} color={colors.registerText} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="sign-out" size={30} color={colors.registerText} />
          </TouchableOpacity>
        </View>
      </View>
      <ContactDialog
        setDialogVisible={setDialogVisible}
        dialogVisible={dialogVisible}
      />
    </>
  );
};

const ProfileContent = () => {
  return (
    <>
      <Text style={styles.profileTitle}>Nama</Text>
      <Text style={styles.profiledata}>Contoh Nama</Text>
      <Text style={styles.profileTitle}>NIM/NIDM</Text>
      <Text style={styles.profiledata}>Contoh NIM/NIDN</Text>
    </>
  );
};

const ContactDialog = ({ dialogVisible, setDialogVisible }) => {
  return (
    <>
      <DialogComponent
        isVisible={dialogVisible}
        setVisible={setDialogVisible}
        content={
          <>
            <View style={styles.hubungiLogo}>
              <Image
                source={require("../../assets/images/Hubungi-Logistik.png")}
              />
            </View>
            <View style={styles.contact}>
              <Text>
                <Icon name="phone" size={20} color="black" /> +1234567890
              </Text>
              <Text>
                <Icon name="at" size={20} color="black" /> example@example.com
              </Text>
            </View>
          </>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  hubungiLogo: {
    flex: 1,
    justifyContent: "center", // Pusatkan secara vertikal
    alignItems: "center", // Pusatkan secara horizontal
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  profiledata: {
    marginBottom: 10,
    fontSize: 15,
  },
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
  contact: {
    borderWidth: 1,
  },
});
export { ProfileContainer, ProfileContent };
