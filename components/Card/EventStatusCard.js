import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const EventStatusCardComponents = (eventdata) => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.textcontainer}>
            <Text style={styles.title}>{eventdata.eventName}</Text>
            <Text>{eventdata.eventDate}</Text>
          </View>
          <Text
            style={[
              styles.status,
              { backgroundColor: eventdata.eventStatusColor },
            ]}
          >
            Ditolak
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 15,
    borderRadius: 10,
    shadowColor: "black",
  },
  status: {
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 20,
    color: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default EventStatusCardComponents;
