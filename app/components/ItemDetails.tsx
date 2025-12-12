import { Item } from "@/types";
import { Href, Link } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";

type ItemDetailsProps = Omit<Item, "lot"> & { hideButtons?: boolean };

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

const ItemDetails = ({
  type,
  weight,
  amount,
  supplier,
  dateOfOrder,
  entered,
  comment,
  code,
  hideButtons,
}: ItemDetailsProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const itemDetails = [
    { label: t("components.itemDetails.type"), value: type },
    { label: t("components.itemDetails.weight"), value: weight },
    { label: t("components.itemDetails.amount"), value: amount },
    { label: t("components.itemDetails.supplier"), value: supplier },
    { label: t("components.itemDetails.dateOfOrder"), value: dateOfOrder },
    { label: t("components.itemDetails.entered"), value: entered },
    { label: t("components.itemDetails.comment"), value: comment },
    { label: t("components.itemDetails.code"), value: code },
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

        {!hideButtons && (
          <View style={styles.buttonContainer}>
            <Link
              href={"/(protected)/deleteActionScreen" as Href}
              asChild
              style={styles.link}
            >
              <Button
                mode="outlined"
                icon="delete"
                textColor={theme.colors.onErrorContainer}
                style={{ borderColor: theme.colors.errorContainer }}
              >
                {t("common.delete")}
              </Button>
            </Link>
            <Link
              href={"/(protected)/editActionScreen" as Href}
              asChild
              style={styles.link}
            >
              <Button
                mode="outlined"
                icon="file-document-edit"
                textColor={theme.colors.primary}
                style={{ borderColor: theme.colors.primary }}
              >
                {t("common.edit")}
              </Button>
            </Link>
          </View>
        )}
      </Card.Content>
    </Card>
  );
};

export default ItemDetails;

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
  link: {
    flex: 1,
  },
});
