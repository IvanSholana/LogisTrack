import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

const ButtonComponent = ({ buttontext, buttonstyle, textstyle }) => {
  return (
    <>
      <TouchableOpacity style={[styles.button, buttonstyle]}>
        <Text style={[styles.text, textstyle]}>{buttontext}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  button: {
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
  },
});

export default ButtonComponent;
