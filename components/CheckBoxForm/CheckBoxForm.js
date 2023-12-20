import { Pressable, View, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors } from "../../constants/colors";

const CheckBoxForm = ({ toggleCheckbox }) => {
  return (
    <>
      <View style={styles.contaier}>
        <Pressable>
          <Text>Nama Ruangan</Text>
        </Pressable>
        <BouncyCheckbox
          size={25}
          fillColor={colors.buttonLogin}
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: colors.buttonLogin }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={toggleCheckbox}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    margin: 10,
    justifyContent: "space-between",
  },
});

export default CheckBoxForm;
