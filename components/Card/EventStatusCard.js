import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import StatusComponent from "../Status/StatusComponent";
import { colors } from "../../constants/colors";

const EventStatusCardComponents = (eventdata) => {
  return (
    <>
      <TouchableOpacity>
        <View
          style={[
            styles.container,
            { borderColor: eventdata.eventStatusColor },
          ]}
        >
          <View style={styles.textcontainer}>
            <Text style={styles.title}>{eventdata.eventName}</Text>
            <Text>{eventdata.eventDate}</Text>
          </View>

          <StatusComponent
            status={eventdata.status}
            color={eventdata.eventStatusColor}
          />
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
    borderRadius: 10,
    shadowColor: "black",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default EventStatusCardComponents;
