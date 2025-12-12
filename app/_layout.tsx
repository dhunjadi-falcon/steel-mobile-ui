import { AppContextProvider, useAppContext } from "@/context/AppContext";
import i18n from "@/i18n";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { I18nextProvider } from "react-i18next";
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
      primaryContainer: "#e4e5f1",
      tertiary: "#4CAF50", // success
      background: "#fafafa",
      outline: "#00b4d8",
      onBackground: "#252526",
      errorContainer: "#ff0e0e",
      onErrorContainer: "#ff3e3e",
    },
  };

  const customDarkTheme: MD3Theme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: "lightblue",
      primaryContainer: "#3e3e3e",
      tertiary: "#4CAF50", // success
      background: "#252526",
      outline: "lightblue",
      onBackground: "#fafafa",
      errorContainer: "#ff0e0e",
      onErrorContainer: "#ff3e3e",
    },
  };

  const theme = isDarkTheme ? customDarkTheme : customLightTheme;

  const statusBarStyle = isDarkTheme ? "light" : "dark";
  return (
    <React.Fragment>
      <I18nextProvider i18n={i18n}>
        <PaperProvider theme={theme}>
          <StatusBar style={statusBarStyle} />
          <Stack>
            <Stack.Screen name="(protected)" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
          </Stack>
        </PaperProvider>
      </I18nextProvider>
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
