import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    View,
    ScrollView,
  } from "react-native";
  import React from "react";
  import AddItemContainers from "../containers/Item/AddItemContainers";
  
  const AddItemScreens = ({ navigation }) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.logocontainer}>
              <Image
                source={require("../assets/images/LogisTrack.png")}
                resizeMode="contain"
              />
            </View>
            <View style={styles.loginsection}>
              <AddItemContainers navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "black",
    },
    logocontainer: {
      paddingHorizontal: 48,
      paddingTop: 40,
    },
    loginsection: {
      justifyContent: "flex-end",
      paddingTop: 10,
      paddingHorizontal: 20,
      flex: 1,
      width: "100%",
      height: "100%",
    },
  });
  
  export default AddItemScreens;
  