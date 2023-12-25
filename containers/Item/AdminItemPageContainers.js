import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import FloatingButton from "../../components/FloatingButton/FloatingButtonComponent";
import DatePickers from "../../components/DatePicker/DatePickerComponents";
import FormRuanganContainer from "./FormRuangan";
import FormAlatContainer from "./FormPeralatan";
import ItemPage from "../../components/Card/ItemPageCard";

const AdminItemPageContainer = ({ navigation }) => {
  const [isEditMode, setEditMode] = useState(true);
  const [activeTab, setActiveTab] = useState("Peralatan");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View>
      <AppBarContainer
        activeTab={activeTab}
        handleTabPress={handleTabPress}
        navigation={navigation}
      />
      {activeTab === "Peralatan" ? (
        <FormAlatContainer navigation={navigation} />
      ) : (
        <FormRuanganContainer navigation={navigation} />
      )}
      <ItemPage isEditMode={isEditMode} setEditMode={setEditMode} />
    </View>
  );
};

const AppBarContainer = ({ activeTab, handleTabPress, navigation }) => {
  return (
    <>
      <View style={styles.container}>
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
});

export default AdminItemPageContainer;