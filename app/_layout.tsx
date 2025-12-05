import { AppContextProvider, useAppContext } from "@/context/AppContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
  PaperProvider,
} from "react-native-paper";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

const RootLayoutContent = () => {
  const { state } = useAppContext();
  const isDarkTheme = state.isDarkThemeOn;

  const customLightTheme: MD3Theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: "#00b4d8",
      background: "#fafafa",
      outline: "#00b4d8",
      onBackground: "#252526",
    },
  };

  const customDarkTheme: MD3Theme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: "lightblue",
      background: "#252526",
      outline: "lightblue",
      onBackground: "#fafafa",
    },
  };

  const theme = isDarkTheme ? customDarkTheme : customLightTheme;

  const statusBarStyle = isDarkTheme ? "light" : "dark";
  return (
    <React.Fragment>
      <PaperProvider theme={theme}>
        <StatusBar style={statusBarStyle} />
        <Stack>
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </React.Fragment>
  );
};

export default function RootLayout() {
  return (
    <AppContextProvider>
      <RootLayoutContent />
    </AppContextProvider>
  );
}
