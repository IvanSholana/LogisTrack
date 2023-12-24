import { Pressable, View, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors } from "../../constants/colors";

const CheckBoxForm = ({ toggleCheckbox, item, press }) => {
  return (
    <>
      <View style={styles.contaier}>
        <Pressable onPress={press}>
          <Text style={styles.title}>Nama Ruangan</Text>
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
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
});

export default CheckBoxForm;
