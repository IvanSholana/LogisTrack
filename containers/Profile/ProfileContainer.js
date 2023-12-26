import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/colors";
import DialogComponent from "../../components/Dialog/DialogComponent";
import { useState } from "react";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";

const ProfileContainer = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
  });

  const [dialogVisible, setDialogVisible] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Profilku</Text>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={() => setDialogVisible(true)}>
            <Icon name="info-circle" size={30} color={colors.registerText} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
  const { nama, status, nimNidn } = useSelector((state) => state.user);
  return (
    <>
      <Text style={styles.profileTitle}>Nama</Text>
      <Text style={styles.profiledata}>{nama}</Text>
      <Text style={styles.profileTitle}>NIM/NIDM</Text>
      <Text style={styles.profiledata}>{nimNidn}</Text>
    </>
  );
};

const ContactDialog = ({ dialogVisible, setDialogVisible }) => {
  return (
    <>
      <DialogComponent
        isVisible={dialogVisible}
        setVisible={setDialogVisible}
        title="Hubungi Logistik"
        content={
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="phone" size={30} color={colors.registerText} />
              <View style={{ marginLeft: 10 }}>
                <Text>Whatsapp</Text>
                <Text>081234567890</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Icon name="at" size={30} color={colors.registerText} />
              <View style={{ marginLeft: 10 }}>
                <Text>Email</Text>
                <Text>logistik.kampusmu.ac.id</Text>
              </View>
            </View>
          </View>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  profileTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  profiledata: {
    marginBottom: 10,
    fontSize: 15,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
