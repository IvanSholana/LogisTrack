import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const InputText = ({
  textinputname,
  placeholder,
  security,
  isEdit,
  fillValue,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{textinputname}</Text>
      <TextInput
        value={fillValue}
        editable={isEdit}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.registerText}
        secureTextEntry={security}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    height: 40,
    borderColor: "#ccc", // Warna border input
    borderWidth: 1,
    borderRadius: 8, // Rounding border input
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333", // Warna teks input
  },
});

export default InputText;
