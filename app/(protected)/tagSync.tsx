import { useAppContext } from "@/context/AppContext";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const TAGSyncScreen = () => {
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
      <Card style={[styles.card]}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.text}>
            Sinkronizacija TAG-a
          </Text>
          <Button
            buttonColor={theme.colors.primary}
            textColor={theme.colors.background}
          >
            Sinkroniziranje TAG-a
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
