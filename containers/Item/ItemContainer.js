import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import FloatingButton from "../../components/FloatingButton/FloatingButtonComponent";
import DatePickers from "../../components/DatePicker/DatePickerComponents";
import FormRuanganContainer from "./FormRuangan";
import FormAlatContainer from "./FormPeralatan";
import DialogComponent from "../../components/Dialog/DialogComponent";
import AppBarComponent from "../../components/AppBar/AppBarComponents";

const DateContainer = () => {
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <>
      <FloatingButton icon="calendar" onpress={() => setDialogVisible(true)} />
      <DialogComponent
        isVisible={dialogVisible}
        setVisible={setDialogVisible}
        content={<DatePickers />}
        title={"Pilih Jadwal Peminjaman"}
      />
    </>
  );
};

const FormPeminjaman = () => {
  const [activeTab, setActiveTab] = useState("Peralatan");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <View>
        <AppBarComponent
          content={
            <AppBarContainer
              activeTab={activeTab}
              handleTabPress={handleTabPress}
            />
          }
        />
        {activeTab === "Peralatan" ? (
          <FormAlatContainer />
        ) : (
          <FormRuanganContainer />
        )}
      </View>
    </>
  );
};

const AppBarContainer = ({ activeTab, handleTabPress }) => {
  return (
    <>
      <View style={styles.appBar}>
        <Image
          source={require("../../assets/images/LogisTrack.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.checkout}>
          <Icon name="shopping-cart" size={30} color="#333" />
        </TouchableOpacity>
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
    </>
  );
};

const styles = StyleSheet.create({
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
});

export { DateContainer, FormPeminjaman };
