import { useAppContext } from "@/context/AppContext";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const TAGSyncScreen = () => {
  const { state } = useAppContext();
  const styles = getStyles(state.isDarkThemeOn);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Card style={[styles.card]}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.text}>
            {t("screens.tagSync.title")}
          </Text>
          <Button
            buttonColor={theme.colors.primary}
            textColor={theme.colors.background}
          >
            {t("screens.tagSync.buttonext")}
          </Button>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default TAGSyncScreen;

const getStyles = (isDarkThemeOn: boolean) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingHorizontal: 8,
    },
    card: {
      backgroundColor: isDarkThemeOn ? "#3e3e3e" : "#e4e5f1",
    },
    text: {
      textAlign: "center",
      marginBottom: 16,
    },
  });
