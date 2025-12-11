import { useAppContext } from "@/context/AppContext";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Filter from "../components/Filter";

const InventoryCheckScreen = () => {
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
      <Card style={styles.card}>
        <Card.Content>
          <Button
            buttonColor={theme.colors.primary}
            textColor={theme.colors.background}
          >
            Nova provjera
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Filter
            data={[]}
            onFilteredData={() => {}}
            hideLOTFilter
            hideSupplierFilter
          />
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default InventoryCheckScreen;

const getStyles = (isDarkThemeOn: boolean) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingHorizontal: 8,
    },

    card: {
      backgroundColor: isDarkThemeOn ? "#3e3e3e" : "#e4e5f1",
      marginBottom: 16,
    },
  });
