import { useAppContext } from "@/context/AppContext";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
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
      <Text style={[styles.titleText, { color: theme.colors.onBackground }]}>
        {t("home.welcome")}, {`{username}`}
      </Text>

      <Card style={[styles.card, { marginBottom: 32 }]}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardText}>
            {t("home.receiving")}
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text
            variant="titleLarge"
            style={[styles.cardText, { color: theme.colors.onBackground }]}
          >
            {t("home.tagScan")}
          </Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default HomeScreen;

const getStyles = (isDarkThemeOn: boolean) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingHorizontal: 16,
    },
    titleText: {
      fontSize: 48,
      marginBottom: 24,
    },
    card: {
      backgroundColor: isDarkThemeOn ? "#3e3e3e" : "#e4e5f1",
    },
    cardText: {
      fontSize: 32,
      paddingVertical: 32,
      textAlign: "center",
    },
  });
