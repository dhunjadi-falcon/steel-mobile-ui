import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";

const InventoryCheckItemScreen = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.navigate({
          pathname: "/(protected)/inventoryCheckItemDetails",
          params: { code: "123" },
        })
      }
      style={styles.cardContainer}
      activeOpacity={1}
    >
      <View
        style={[
          styles.card,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <View style={styles.title}>
          <View
            style={[styles.details, { marginBottom: 16, alignItems: "center" }]}
          >
            <Text variant="headlineMedium">11. 11. 2024 - Φ 14</Text>
            <Icon
              // other icon is table-arrow-right
              source="table-refresh"
              size={30}
              color={theme.colors.primary}
            />
          </View>

          <View style={styles.details}>
            <Text variant="titleMedium">
              {t("screens.inventoryCheckItem.weight")}
            </Text>
            <Text variant="bodyMedium">2160,0 kg / 670989,0956 kg</Text>
          </View>

          <View style={styles.details}>
            <Text variant="titleMedium">
              {t("screens.inventoryCheckItem.tags")}
            </Text>
            <Text variant="bodyMedium">1 / 278</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InventoryCheckItemScreen;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    fontWeight: "bold",
  },
  card: {
    minHeight: 100,
  },
  details: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  children: {
    overflow: "hidden",
  },
});
