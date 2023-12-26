import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import ItemPage from "../../components/Card/ItemPageCard";
import { FlatList } from "react-native-gesture-handler";
import peralatanList from "../../data/local/PeralatanData";
import ruanganList from "../../data/local/RuanganData";

const AdminItemPageContainer = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState("Peralatan");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={{ flex: 1 }}>
      <AppBarContainer
        activeTab={activeTab}
        handleTabPress={handleTabPress}
        navigation={navigation}
      />

      {activeTab === "Peralatan" ? (
        <ButtonComponent
          buttontext={"Tambah Peralatan"}
          buttonstyle={styles.buttonadd}
        />
      ) : (
        <ButtonComponent
          buttontext={"Tambah Ruangan"}
          buttonstyle={styles.buttonadd}
        />
      )}
      {activeTab === "Peralatan" ? (
        <FlatList
          data={peralatanList}
          renderItem={({ item }) => (
            <ItemPage item={item} navigation={navigation} tab={activeTab} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          data={ruanganList}
          renderItem={({ item }) => (
            <ItemPage item={item} navigation={navigation} tab={activeTab} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const AppBarContainer = ({ activeTab, handleTabPress, navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginStart: 10, marginTop: 10 }}>
          <Image
            source={require("../../assets/images/LogisTrack.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.navigationTab}>
          <ButtonComponent
            buttontext={"Peralatan"}
            buttonstyle={
              activeTab === "Peralatan"
                ? styles.tabActiveButton
                : styles.tabDeactiveButton
            }
            textstyle={
              activeTab === "Peralatan"
                ? styles.tabActiveButtonText
                : styles.tabDeactiveButtonText
            }
            onPress={() => handleTabPress("Peralatan")}
          />
          <ButtonComponent
            buttontext={"Ruangan"}
            buttonstyle={
              activeTab === "Ruangan"
                ? styles.tabActiveButton
                : styles.tabDeactiveButton
            }
            textstyle={
              activeTab === "Ruangan"
                ? styles.tabActiveButtonText
                : styles.tabDeactiveButtonText
            }
            onPress={() => handleTabPress("Ruangan")}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navigationTab: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  logo: {
    width: 150,
    height: 40,
  },
  tabDeactiveButton: {
    flex: 1,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.buttonRegister,
  },
  tabActiveButton: {
    flex: 1,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.tabActive,
  },
  tabActiveButtonText: {
    color: colors.tabActive,
  },
  tabDeactiveButtonText: {
    color: colors.registerText,
  },
  buttonadd: {
    backgroundColor: colors.buttonLogin,
    padding: 15,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default AdminItemPageContainer;
