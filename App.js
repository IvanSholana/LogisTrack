import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Tambahkan import ini
import LoginScreen from "./screens/LoginScreen"; // Ubah nama file ke "LoginScreen"
import RegisterScreen from "./screens/RegisterScreen";
import HistoryScreen from "./screens/HistoryScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabsMenu = () => {
  return (
    <Tab.Navigator initialRouteName="history">
      <Tab.Screen name="history" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabsMenu">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
