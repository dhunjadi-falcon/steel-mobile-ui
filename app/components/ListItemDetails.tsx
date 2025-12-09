import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";

type ListItem = {
  type: string;
  weight: string;
  amount: string;
  supplier: string;
  dateOfOrder: string;
  entered: string;
  comment: string;
  code: string;
};

type DetailRowProps = {
  label: string;
  value: string;
};

const DetailRow = ({ label, value }: DetailRowProps) => (
  <View style={styles.detailRow}>
    <Text variant="titleMedium">{label}: </Text>
    <Text>{value}</Text>
  </View>
);

const ListItemDetails = ({
  type,
  weight,
  amount,
  supplier,
  dateOfOrder,
  entered,
  comment,
  code,
}: ListItem) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const itemDetails = [
    { label: t("wholesaleGoods.type"), value: type },
    { label: t("wholesaleGoods.weight"), value: weight },
    { label: t("wholesaleGoods.amount"), value: amount },
    { label: t("wholesaleGoods.supplier"), value: supplier },
    { label: t("wholesaleGoods.dateOfOrder"), value: dateOfOrder },
    { label: t("wholesaleGoods.entered"), value: entered },
    { label: t("wholesaleGoods.comment"), value: comment },
    { label: t("wholesaleGoods.code"), value: code },
  ];

  return (
    <Card>
      <Card.Content
        style={[
          styles.cardContent,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <View>
          {itemDetails.map((detail) => (
            <DetailRow
              key={detail.label}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            icon="delete"
            textColor={theme.colors.onErrorContainer}
            style={[
              styles.button,
              { borderColor: theme.colors.errorContainer },
            ]}
            onPress={() => {}}
          >
            {t("common.delete")}
          </Button>
          <Button
            mode="outlined"
            icon="file-document-edit"
            textColor={theme.colors.primary}
            style={[styles.button, { borderColor: theme.colors.primary }]}
            onPress={() => {}}
          >
            {t("common.edit")}
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ListItemDetails;

const styles = StyleSheet.create({
  cardContent: {
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
  button: {
    flex: 1,
  },
});
