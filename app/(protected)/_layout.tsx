import { Href, Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { useTranslation } from "react-i18next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";
import CustomDrawerContent from "../components/CustomDrawerContent";

export default function ProtectedLayout() {
  const theme = useTheme();
  const { t } = useTranslation();
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
            drawerLabel: t("components.drawer.home"),
            title: t("components.drawer.home"),
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.onBackground,
          }}
        />

        <Drawer.Screen
          name="wholesaleGoods"
          options={{
            drawerLabel: t("components.drawer.wholesaleGoods"),
            title: t("components.drawer.wholesaleGoods"),
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.onBackground,
          }}
        />

        <Drawer.Screen
          name="activeGoods"
          options={{
            drawerLabel: t("components.drawer.activeGoods"),
            title: t("components.drawer.activeGoods"),
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.onBackground,
          }}
        />

        <Drawer.Screen
          name="usedGoods"
          options={{
            drawerLabel: t("components.drawer.usedGoods"),
            title: t("components.drawer.usedGoods"),
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.onBackground,
          }}
        />

        <Drawer.Screen
          name="tagSync"
          options={{
            drawerLabel: t("components.drawer.tagSync"),
            title: t("components.drawer.tagSync"),
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.onBackground,
          }}
        />

        <Drawer.Screen
          name="inventoryCheck"
          options={{
            drawerLabel: t("components.drawer.inventoryCheck"),
            title: t("components.drawer.inventoryCheck"),
            headerStyle: { backgroundColor: theme.colors.background },
            headerTintColor: theme.colors.onBackground,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
