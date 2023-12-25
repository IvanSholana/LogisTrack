import React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Tambahkan import ini
import LoginScreen from "./screens/LoginScreen"; // Ubah nama file ke "LoginScreen"
import RegisterScreen from "./screens/RegisterScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ItemScreen from "./screens/ItemScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { colors } from "./constants/colors";
import ItemDetailScreen from "./screens/ItemDetailScreen";
import PinjamDetailScreen from "./screens/PinjamDetailScreen";
import DetailHistoryScreen from "./screens/DetailHistoryScreen";
import RoomDetailScreen from "./screens/RoomDetailScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabsMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="items"
      screenOptions={{ tabBarActiveTintColor: colors.tabActive }}
    >
      <Tab.Screen
        name="items"
        component={ItemScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/images/box.png")}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/images/history.png")}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/images/user-alt.png")}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainTabsMenu"
          component={MainTabsMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detail"
          component={ItemDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="peminjaman"
          component={PinjamDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detailpinjam"
          component={DetailHistoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detailruangan"
          component={RoomDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
