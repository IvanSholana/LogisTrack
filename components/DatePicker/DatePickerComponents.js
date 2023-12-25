import DateTimePicker from "react-native-ui-datepicker";
import { Dialog } from "react-native-simple-dialogs";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const DatePickers = ({
  isVisible,
  setVisible,
  title,
  item,
  value,
  setValue,
}) => {
  return (
    <Dialog
      visible={isVisible}
      title={title}
      onTouchOutside={() => setVisible(false)}
    >
      <View>
        <View>
          <DateTimePicker
            value={value}
            onValueChange={(date) => setValue(date)}
          />
        </View>
      </View>
      {item}
    </Dialog>
  );
};

const styles = StyleSheet.create({});

export default DatePickers;
