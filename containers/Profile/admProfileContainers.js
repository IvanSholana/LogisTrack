import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/colors";
import DialogComponent from "../../components/Dialog/DialogComponent";
import { useState } from "react";
import { useFonts } from "expo-font";
import TableComponent from "../../components/Table/TableComponent";

const AdminProfileContainer = ({ navigation }) => {
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
        <Text style={styles.headerText}>Admin Log</Text>
        <View style={styles.buttoncontainer}>
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

const AdminProfileContent = () => {
  const myTableHead = ["Status Peminjaman", "Jumlah"];
  const dashboardData = [
    { namaPeminjaman: "Diproses", qty: 34 },
    { namaPeminjaman: "Dipesan", qty: 12 },
    { namaPeminjaman: "Dipinjam", qty: 9 },
    { namaPeminjaman: "Ditolak", qty: 23 },
    { namaPeminjaman: "Selesai", qty: 6 },
  ];
  return (
    <>
      <Text style={styles.profileTitle}>Dashboard</Text>
      <TableComponent data={dashboardData} tableHead={myTableHead} />
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
          <View>
            <Text style={styles.headerText}>Hubungi Logistik</Text>
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
  hubungiLogo: {
    flex: 1,
    justifyContent: "center", // Pusatkan secara vertikal
    alignItems: "center", // Pusatkan secara horizontal
  },
  profileTitle: {
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    paddingBottom: 10,
  },
  logo: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
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
export { AdminProfileContainer, AdminProfileContent };
