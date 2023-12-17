import {
  Pressable,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ItemScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image source={require("../assets/images/LogisTrack.png")} />
          <TouchableOpacity>
            <Icon name="shopping-cart" size={30} color="#333" />
          </TouchableOpacity>
        </View>
        <View>
          <Pressable>
            <Text>Peralatan</Text>
          </Pressable>
          <Pressable>
            <Text>Ruangan</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 30, marginBottom: 10, paddingHorizontal: 20 },
});

export default ItemScreen;
