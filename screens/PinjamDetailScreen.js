import React from "react";
import { StyleSheet, View, Image } from "react-native";
import PinjamDetailContainer from "../containers/Item/PinjamDetailContainers";
import AppBarComponent from "../components/AppBar/AppBarComponent";

const PinjamDetailScreen = () => {
    return (
        <View>
         <AppBarComponent content={
        <Image
          source={require("../assets/images/PinjamAset.png")}
          style={styles.logo}/>
         }/>
            <View style={styles.registerSection}>
          <PinjamDetailContainer />
                <View style={styles.buttonsection}>
            </View>
                </View>

      </View>
    );
  };

const styles = StyleSheet.create({
  InputText: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  logo: {
    marginTop: 30,
    marginBottom: 10,
  },
  container: {
    justifyContent: "center",
  },
});

export default PinjamDetailScreen;
