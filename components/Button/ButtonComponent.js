import { TouchableOpacity, Text } from "react-native";

const Button = ({ buttontext, buttonstyle }) => {
  return (
    <>
      <TouchableOpacity style={buttonstyle}>
        <Text>{buttontext}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
