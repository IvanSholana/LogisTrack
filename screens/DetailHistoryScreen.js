import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DetailHistoryContainers from "../containers/History/DetailHistoryContainers";
import AdminDetailHistoryContainers from "../containers/History/admDetailHistoryContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import { useFonts } from "expo-font";

const AdminDetailHistoryScreen = ({ navigation, route }) => {
  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Detail Peminjaman</Text>}
      />
      <View style={styles.container}>
        <View style={styles.historySection}>
          <AdminDetailHistoryContainers navigation={navigation} />
        </View>
      </View>
    </>
  );
};

const UserDetailHistoryScreen = ({ navigation, route }) => {
  return (
    <>
      <AppBarComponent
        content={<Text style={styles.headerText}>Detail Peminjaman</Text>}
      />
      <View style={styles.container}>
        <View style={styles.historySection}>
          <DetailHistoryContainers navigation={navigation} route={route} />
        </View>
      </View>
    </>
  );
};

const DetailHistoryScreen = ({ navigation, accountType, route }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {accountType === "admin" ? (
        <AdminDetailHistoryScreen navigation={navigation} route={route} />
      ) : (
        <UserDetailHistoryScreen navigation={navigation} route={route} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    flex: 1,
  },
  historySection: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Poppins-BoldItalic",
    color: "#6A994E",
    textAlignVertical: "center",
    marginLeft: 20,
  },
});

export default DetailHistoryScreen;