import { useLocalSearchParams } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Card, ProgressBar, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const InventoryCheckItemDetailsScreen = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { code } = useLocalSearchParams();

  console.log(code, "InventoryCheckItemDetails");

  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Card
        style={[
          styles.card,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <Card.Content style={styles.cardContent}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text variant="titleMedium">
              {t("screens.inventoryCheckItemDetails.date")}
            </Text>
            <Text>10.05.2024. </Text>
          </View>

          <Text>K18</Text>
        </Card.Content>
      </Card>

      <Card
        style={[
          styles.card,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <Card.Content>
          <View style={styles.progressDetails}>
            <Text variant="titleMedium">
              {t("screens.inventoryCheckItemDetails.weight")}
            </Text>
            <View style={styles.group}>
              <Text>27828,0kg / 27828,0 kg</Text>
              <Text>100%</Text>
            </View>
            <ProgressBar
              progress={1}
              color={theme.colors.primary}
              style={styles.progressBar}
            />
          </View>

          <View style={styles.progressDetails}>
            <Text variant="titleMedium" style={{ marginTop: 32 }}>
              {t("screens.inventoryCheckItemDetails.amount")}
            </Text>
            <View style={styles.group}>
              <Text>6 / 6</Text>
              <Text>100%</Text>
            </View>
            <ProgressBar
              progress={1}
              color={theme.colors.primary}
              style={styles.progressBar}
            />
          </View>

          <View style={styles.progressDetails}>
            <Text variant="titleMedium" style={{ marginTop: 32 }}>
              {t("screens.inventoryCheckItemDetails.tags")}
            </Text>
            <View style={styles.group}>
              <Text>6 / 6</Text>
              <Text>100%</Text>
            </View>
            <ProgressBar
              progress={1}
              color={theme.colors.primary}
              style={styles.progressBar}
            />
          </View>
        </Card.Content>
      </Card>

      <Text variant="titleLarge" style={{ marginBottom: 16 }}>
        {t("screens.inventoryCheckItemDetails.scanned")}
      </Text>
      <Card
        style={[
          styles.card,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <Card.Content style={styles.scannedDetails}>
          <Text variant="titleLarge">LOT: 1032383 </Text>

          <View style={styles.groupDetails}>
            <Text variant="titleMedium">
              {t("screens.inventoryCheckItemDetails.weight")}{" "}
            </Text>
            <Text>4682,0 kg</Text>
          </View>

          <View style={styles.groupDetails}>
            <Text variant="titleMedium">
              {t("screens.inventoryCheckItemDetails.amount")}
            </Text>
            <Text>1</Text>
          </View>

          <View style={styles.groupDetails}>
            <Text variant="titleMedium">
              {t("screens.inventoryCheckItemDetails.type")}
            </Text>
            <Text>K18</Text>
          </View>

          <View style={styles.groupDetails}>
            <Text variant="titleMedium">
              {t("screens.inventoryCheckItemDetails.nfc")}
            </Text>
            <Text>0427498A1F1291</Text>
          </View>
        </Card.Content>
      </Card>

      <Text variant="titleLarge" style={{ marginBottom: 16 }}>
        {t("screens.inventoryCheckItemDetails.left")}
      </Text>
    </SafeAreaView>
  );
};

export default InventoryCheckItemDetailsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    marginBottom: 16,
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  group: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: { borderRadius: 99 },
  scannedDetails: { display: "flex", flexDirection: "column", gap: 16 },
});
