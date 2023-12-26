import { useEffect, useState } from "react";
import CheckBoxForm from "../../components/CheckBoxForm/CheckBoxForm";
import { View } from "react-native";
import ruanganList from "../../data/local/RuanganData";
import { FlatList } from "react-native-gesture-handler";
import RuanganDipinjam from "../../domain/models/RuanganDipinjam";

const FormRuanganContainer = ({
  navigation,
  ruangandipinjam,
  setRuanganDipinjam,
}) => {
  const [keranjangRuangan, setKeranjangRuangan] = useState(() =>
    ruanganList.map((e) => new RuanganDipinjam(e.id, e.nama, false))
  );

  const toggleCheckbox = (nama) => {
    setKeranjangRuangan((prevKeranjang) =>
      prevKeranjang.map((item) => {
        if (nama === item.nama) {
          return { ...item, status: !item.status };
        }

        return item;
      })
    );
  };

  useEffect(() => {
    setRuanganDipinjam(keranjangRuangan.filter((e) => e.status == true));
  }, [keranjangRuangan, setKeranjangRuangan]);

  console.log(keranjangRuangan);
  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={ruanganList}
          renderItem={({ item }) => (
            <CheckBoxForm
              data={item}
              navigation={navigation}
              press={toggleCheckbox}
            />
          )}
        />
      </View>
    </>
  );
};
export default FormRuanganContainer;
