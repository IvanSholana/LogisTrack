import { Text, TextInput, View } from "react-native";

const InputText = ({ textinputname, placeholder }) => {
  return;
  <>
    <View>
      <Text>{textinputname}</Text>
      <TextInput placeholder={placeholder} />
    </View>
  </>;
};

export default InputText;
