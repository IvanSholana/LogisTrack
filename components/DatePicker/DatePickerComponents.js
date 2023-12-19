import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { useState } from "react";
import { View } from "react-native";

useState;
const DatePickers = () => {
  const [value, setValue] = useState(dayjs());
  return (
    <View>
      <DateTimePicker value={value} onValueChange={(date) => setValue(date)} />
    </View>
  );
};

export default DatePickers;
