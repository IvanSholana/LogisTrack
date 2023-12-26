import { useState, useEffect } from "react";
import CheckBoxForm from "../../components/CheckBoxForm/CheckBoxForm";
import { View } from "react-native";
import ruanganList from "../../data/local/RuanganData";
import { FlatList } from "react-native-gesture-handler";


const FormRuanganContainer = ({ navigation, route }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ruanganList();
        console.log(JSON.stringify(data, undefined, 2));
        setRoomData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={roomData}
          renderItem={({ item }) => (
            <CheckBoxForm data={item} navigation={navigation} />
          )}
        />
      </View>
    </>
  );
};
export default FormRuanganContainer;
