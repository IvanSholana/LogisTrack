import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { Dialog } from "react-native-simple-dialogs";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const DatePickers = ({ isVisible, setVisible }) => {
  const [value, setValue] = useState(dayjs());
  return (
    <Dialog
      visible={isVisible}
      title="Pilih Jadwal Peminjaman"
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
    </Dialog>
  );
};

const styles = StyleSheet.create({});

export default DatePickers;
