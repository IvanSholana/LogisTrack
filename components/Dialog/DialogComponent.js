import { Dialog } from "react-native-simple-dialogs";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const DialogComponent = ({ isVisible, setVisible, content, title }) => {
  return (
    <>
      <Dialog
        visible={isVisible}
        title={title}
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
