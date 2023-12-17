import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoanScreen from "./screens/LoanScreen";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons atau ikon lain yang ingin Anda gunakan

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabsMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "logisTrack") {
            iconName = focused ? "file-tray" : "file-tray-outline";
          } else if (route.name === "history") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#A7C957", // Warna ikon saat aktif
        inactiveTintColor: "gray", // Warna ikon saat tidak aktif
      }}
    >
      <Tab.Screen name="logisTrack" component={LoanScreen} />
      <Tab.Screen name="history" component={HistoryScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
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
