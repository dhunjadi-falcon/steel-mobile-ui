import { useAppContext } from "@/context/AppContext";
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { state } = useAppContext();
  const styles = getStyles(state.isDarkThemeOn);
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Text style={[styles.titleText, { color: theme.colors.onBackground }]}>
        Dobrodošao, {`{username}`}
      </Text>

      <Card style={[styles.card, { marginBottom: 32 }]}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.cardText}>
            Zaprimanje
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text
            variant="titleLarge"
            style={[styles.cardText, { color: theme.colors.onBackground }]}
          >
            Skeniranje TAG-A
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
