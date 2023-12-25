import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DetailHistoryContainers from "../containers/History/DetailHistoryContainers";
import AdminDetailHistoryContainers from "../containers/History/admDetailHistoryContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";
import { useFonts } from "expo-font";
import { colors } from "../constants/colors";

const DetailHistoryScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const AdminDetailHistoryScreen = ({ navigation }) => {
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
  
  const UserDetailHistoryScreen = ({ navigation }) => {
    return (
      <>
        <AppBarComponent
          content={<Text style={styles.headerText}>Detail Peminjaman</Text>}
        />
        <View style={styles.container}>
          <View style={styles.historySection}>
            <DetailHistoryContainers navigation={navigation} />
          </View>
        </View>
      </>
    );
  };

const DetailHistoryScreen = ({ navigation, accountType }) => {
  const renderDetailContainer = () => {
    if (accountType === "admin") {
      return <AdminDetailHistoryScreen navigation={navigation} />;
    } else {
      return <UserDetailHistoryScreen navigation={navigation} />;
    }
  };

  return (
    <>
      {renderDetailContainer()}
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
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
