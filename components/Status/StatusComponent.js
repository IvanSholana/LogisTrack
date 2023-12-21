import { StyleSheet, Text } from "react-native";

const StatusComponent = ({ status, color }) => {
  return (
    <Text style={[styles.status, { backgroundColor: color }]}>{status}</Text>
  );
};

const styles = StyleSheet.create({
  status: {
    textAlign: "center",
    width: 80,
    paddingVertical: 8,
    borderRadius: 20,
    color: "white",
  },
});

export default StatusComponent;
