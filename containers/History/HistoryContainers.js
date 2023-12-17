import React from "react";
import EventStatusCardComponents from "../../components/Card/EventStatusCard";
import { colors } from "../../constants/colors";

const HistoryContainers = () => {
  return (
    <>
      <EventStatusCardComponents
        eventName="Pemira Informatika"
        eventDate="12/12/2012"
        eventStatusColor={colors.EventDinjam}
      />
    </>
  );
};

export default HistoryContainers;
