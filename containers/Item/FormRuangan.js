import { useState } from "react";
import CheckBoxForm from "../../components/CheckBoxForm/CheckBoxForm";
import { View } from "react-native";
import ruanganList from "../../data/local/RuanganData";
import { FlatList } from "react-native-gesture-handler";

const FormRuanganContainer = ({ navigation, route }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={ruanganList}
          renderItem={({ item }) => (
            <CheckBoxForm data={item} navigation={navigation} />
          )}
        />
      </View>
    </>
  );
};
export default FormRuanganContainer;
