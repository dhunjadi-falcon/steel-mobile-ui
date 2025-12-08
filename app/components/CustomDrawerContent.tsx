import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { useTheme } from "react-native-paper";

const CustomDrawerContent = (props: any) => {
  const theme = useTheme();
  return (
    <DrawerContentScrollView
      style={{ flex: 1, backgroundColor: theme.colors.primaryContainer }}
      scrollEnabled
    >
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
