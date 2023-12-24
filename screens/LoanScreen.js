import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ItemScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  // Data daftar item
  const itemData = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
    // Tambahkan data item lainnya sesuai kebutuhan
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={itemData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const RoomScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  // Data daftar ruangan
  const roomData = [
    { id: '1', name: 'Room 1' },
    { id: '2', name: 'Room 2' },
    { id: '3', name: 'Room 3' },
    { id: '4', name: 'Room 4' },
    { id: '5', name: 'Room 5' },
    // Tambahkan data ruangan lainnya sesuai kebutuhan
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={roomData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Item" component={ItemScreen} />
      <Tab.Screen name="Room" component={RoomScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MainScreen;
