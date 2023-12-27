import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";

const TableComponent = ({ data, tableHead }) => {
  const determineFlexArr = (headLength) => {
    switch (headLength) {
      case 3:
        return [1, 2, 1];
      case 2:
        return [2, 0.7];
      default:
        return [];
    }
  };

  const tableData = data.map((item, index) => {
    if (tableHead.length === 3) {
      return [index + 1, item.namaPeminjaman, item.qty];
    } else if (tableHead.length === 2) {
      return [item.namaPeminjaman, item.qty];
    }
    return [];
  });

  const flexArr = determineFlexArr(tableHead.length);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: "#000" }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.headText}
          flexArr={flexArr}
        />
        {tableData.map((rowData, index) => (
          <Row
            key={index}
            data={rowData}
            style={styles.row}
            textStyle={styles.text}
            flexArr={flexArr}
          />
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  head: { height: 40, backgroundColor: "#A7C957", borderLeftWidth: 1 },
  headText: { textAlign: "center", fontWeight: "bold" },
  text: { textAlign: "center" },
  row: {
    height: 30,
    borderWidth: 1,
    borderColor: "#A6A6A6",
    borderLeftWidth: 1,
  },
});

export default TableComponent;
