import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const TableComponent = ({ data }) => {
  const tableHead = ['No', 'List', 'Qty'];
  const tableData = data.map((item, index) => [index + 1, item.namaPeminjaman, item.qty]);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#000' }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.headText}
          flexArr={[1, 2, 1]} 
        />
        {tableData.map((rowData, index) => (
          <Row
            key={index}
            data={rowData}
            style={styles.row}
            textStyle={styles.text}
            flexArr={[1, 2, 1]}
          />
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingBottom: 120 },
  head: { height: 40, backgroundColor: '#A7C957', borderLeftWidth:1},
  headText: { textAlign: 'center', fontWeight: 'bold' },
  text: { textAlign: 'center' },
  row: { height: 30, borderBottomWidth: 1, borderColor: '#000', borderLeftWidth:1 }, 
});

export default TableComponent;
