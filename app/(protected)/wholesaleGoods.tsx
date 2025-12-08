import { useAppContext } from "@/context/AppContext";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { List, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItemDetails from "../components/ListItemDetails";

const mockItems = [
  {
    accoordionTitle: "1874/200/1",
    lot: "Z2186",
    type: "S10L06",
    weight: "1440,0",
    amount: "15",
    supplier: "Neka firma",
    dateOfOrder: "14.05.2024.",
    entered: "15.05.2024.",
    comment: "komentar",
    code: "jflgkdflgndf-ggre4464",
  },
  {
    accoordionTitle: "1874/200/1",
    lot: "Z2186",
    type: "S10L06",
    weight: "1440,0",
    amount: "27",
    supplier: "Neka druga firma",
    dateOfOrder: "14.05.2024.",
    entered: "15.05.2024.",
    comment: "komentar",
    code: "jflgkdflgndf-ggr53453e",
  },
  {
    accoordionTitle: "1874/200/1",
    lot: "Z2186",
    type: "S10L06",
    weight: "1440,0",
    amount: "45",
    supplier: "treća firma",
    dateOfOrder: "14.05.2024.",
    entered: "15.05.2024.",
    comment: "komentar",
    code: "jflgkdflgndf-ggrefds",
  },
];

const WholesaleGoods = () => {
  const { state } = useAppContext();
  const styles = getStyles(state.isDarkThemeOn);
  const theme = useTheme();

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handlePress = (id: string) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <FlatList
        data={mockItems}
        keyExtractor={(item) => item.code}
        renderItem={({ item, index }) => {
          const isExpanded = item.code === expandedId;

          const conditionalStyles = isExpanded
            ? {
                borderBottomEndRadius: 0,
                borderBottomStartRadius: 0,
              }
            : {
                borderRadius: 16,
              };

          return (
            <List.Accordion
              expanded={isExpanded}
              onPress={() => handlePress(item.code)}
              style={[
                {
                  backgroundColor: theme.colors.primaryContainer,
                  marginTop: index !== 0 ? 8 : 0,
                  borderTopEndRadius: 16,
                  borderTopStartRadius: 16,
                },
                conditionalStyles,
              ]}
              title={
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text variant="headlineLarge">{item.accoordionTitle}</Text>
                  <Text variant="titleLarge">LOT: {item.lot}</Text>
                </View>
              }
            >
              <ListItemDetails {...item} />
            </List.Accordion>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default WholesaleGoods;

const getStyles = (isDarkThemeOn: boolean) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingHorizontal: 8,
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
