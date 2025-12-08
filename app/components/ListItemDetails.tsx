import React from "react";
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

  const itemDetails = [
    { label: "Tip Artikla", value: type },
    { label: "Težina", value: weight },
    { label: "Količina", value: amount },
    { label: "Dobavljač", value: supplier },
    { label: "Datum narudžbe", value: dateOfOrder },
    { label: "Uneseno", value: entered },
    { label: "Komentar", value: comment },
    { label: "Šifra robe", value: code },
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
            Obriši
          </Button>
          <Button
            mode="outlined"
            icon="file-document-edit"
            textColor={theme.colors.primary}
            style={[styles.button, { borderColor: theme.colors.primary }]}
            onPress={() => {}}
          >
            Uredi
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
