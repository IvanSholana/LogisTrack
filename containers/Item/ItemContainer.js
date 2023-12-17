import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { colors } from "../../constants/colors";
import FloatingButton from "../../components/FloatingButton/FloatingButtonComponent";
import DatePickers from "../../components/DatePicker/DatePickerComponents";

const DateContainer = () => {
  const [dialogVisible, setVisible] = useState(false);
  return (
    <>
      <FloatingButton icon={"calendar"} onpress={setVisible} />
      <DatePickers isVisible={dialogVisible} setVisible={setVisible} />
    </>
  );
};

const RuanganContainer = () => {
  return <></>;
};

const AppBarContainer = () => {
  return (
    <View style={styles.container}>
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
          buttonstyle={styles.tabButton}
          textstyle={styles.tabButtonText}
        />
        <ButtonComponent
          buttontext={"Ruangan"}
          buttonstyle={styles.tabButton}
          textstyle={styles.tabButtonText}
        />
      </View>
    </View>
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
  checkout: {},
  tabButton: {
    flex: 1,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.tabActive,
  },
  tabButtonText: {
    color: colors.tabActive,
  },
});

export { DateContainer, AppBarContainer };
