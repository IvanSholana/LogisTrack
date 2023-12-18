import { Dialog } from "react-native-simple-dialogs";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const DialogComponent = ({ isVisible, setVisible, content }) => {
  return (
    <>
      <Dialog
        visible={isVisible}
        title="Pilih Jadwal Peminjaman"
        onTouchOutside={() => setVisible(false)}
      >
        <View>
          <View>{content}</View>
        </View>
      </Dialog>
    </>
  );
};

export default DialogComponent;
