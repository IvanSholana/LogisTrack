import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import AdminHistoryEventCard from "../../components/Card/AdminHistoryEventCard";
import { colors } from "../../constants/colors";
import TableComponent from "../../components/Table/TableComponent";
import StatusComponent from "../../components/Status/StatusComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import DialogComponent from "../../components/Dialog/DialogComponent";
import InputText from "../../components/InputText/InputText";

const AdminDetailHistoryContainers = ({ navigation }) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  // Data contoh peminjaman
  const myTableHead = ['No', 'List', 'Qty'];
  const peminjamanData = [
    { namaPeminjaman: "Buku", qty: 5 },
    { namaPeminjaman: "Pensil", qty: 10 },
    { namaPeminjaman: "Kertas", qty: 8 },
  ];

  const eventsData = [
    {
      eventDate: "20/12/2023",
      status: "",
      eventStatusColor: colors.eventRejected,
      startDateTime: "2023-12-20T09:00:00",
      endDateTime: "2023-12-20T17:00:00",
      alasan:
        "Ruang kelas pada tanggal yang dipilih masih waktu perkuliahan. Silahkan buat lagi dan pilih jam di atas jam 5 sore.",
    },
  ];

  const handleAccept = () => {
    // Logika ketika tombol ACC ditekan
    console.log("ACC button pressed");
    // ... tambahkan logika Anda di sini
  };

  const handleReject = () => {
    // Logika ketika tombol Tolak ditekan
    console.log("Tolak button pressed");
    setDialogVisible(true);
    // ... tambahkan logika Anda di sini
  };

  const handleDone = () => {
    console.log("Done button pressed");
  };

  return (
    <View style={styles.container}>
      <TableComponent data={peminjamanData} tableHead={myTableHead} />
    <View style={styles.card}>
        <AdminHistoryEventCard
        status={
          <StatusComponent
            status={eventsData[0].status}
            color={eventsData[0].eventStatusColor}
          />
        }
        startDateTime={eventsData[0].startDateTime}
        endDateTime={eventsData[0].endDateTime}
        reason={eventsData[0].eventName}
        alasan={eventsData[0].alasan}
        />
        </View>
      {eventsData[0].status === "" && (
        <View style={styles.buttonContainer}>
          <ButtonComponent
            buttontext={"ACC"}
            buttonstyle={{
              marginTop:80,
              backgroundColor: "#A7C957",
              margin: 5,
              padding: 10,
              borderRadius: 10,
              flex: 0.45,
            }}
            onPress={handleAccept}
          />
          <ButtonComponent
            buttontext={"Tolak"}
            buttonstyle={{
              marginTop:80,
              backgroundColor: "#BC4749",
              margin: 5,
              padding: 10,
              borderRadius: 10,
              flex: 0.45,
            }}
            onPress={handleReject}
          />
        </View>
      )}
      {eventsData[0].status === "Dipinjam" && (
        <View style={styles.buttonContainer}>
          <ButtonComponent
            buttontext={"Selesai"}
            buttonstyle={{
              backgroundColor: "#A7C957",
              marginTop: 30,
              marginHorizontal: 20,
              padding: 10,
              borderRadius: 10,
              flex: 1,
            }}
            onPress={handleDone}
          />
        </View>
      )}
      <ButtonComponent
        buttontext={"Kembali"}
        buttonstyle={{
          backgroundColor: colors.buttonLogin,
          marginTop: 20,
          padding: 10,
          borderRadius: 10,
          margin:20        
        }}
        onPress={() => navigation.navigate("history")}
      />
      <DialogComponent
        isVisible={dialogVisible}
        setVisible={setDialogVisible}
        content={
          <View>
            <InputText/>
            <ButtonComponent
              buttontext={"Simpan"}
              buttonstyle={{
                backgroundColor: "#FFC300",
                margin: 5,
                padding: 10,
                borderRadius: 10,
              }}
              onPress={() => {
                // Lakukan sesuatu ketika tombol Tolak di dialog ditekan
                setDialogVisible(false);
                console.log("Event ditolak");
              }}
            />
          </View>
        }
        title={"Alasan Ditolak?"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    paddingBottom:250
  }
});

export default AdminDetailHistoryContainers;
