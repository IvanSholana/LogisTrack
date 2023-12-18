import { Text } from "react-native";

const StatusComponent = ({ status, color }) => {
  return (
    <>
      <Text style={{ color }}>{status}</Text>
    </>
  );
};

export default StatusComponent;
