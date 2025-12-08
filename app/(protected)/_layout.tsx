import { Href, Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";
import CustomDrawerContent from "../components/CustomDrawerContent";

export default function ProtectedLayout() {
  const theme = useTheme();
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Redirect href={"/login" as Href} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerActiveBackgroundColor: theme.colors.primary,
          drawerActiveTintColor: theme.colors.onBackground,
          drawerInactiveTintColor: theme.colors.onBackground,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Početna",
            title: "Početna",
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.onBackground,
          }}
        />

        <Drawer.Screen
          name="wholesaleGoods"
          options={{
            drawerLabel: "Veleprodajna roba",
            title: "Veleprodajna roba",
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.onBackground,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
