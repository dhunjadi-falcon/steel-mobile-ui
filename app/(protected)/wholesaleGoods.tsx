import { useAppContext } from "@/context/AppContext";
import { Item } from "@/types";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Accordion from "../components/AnimatedAccordionItem";
import Filter from "../components/Filter";
import ListItemDetails from "../components/ListItemDetails";

const mockItems: Item[] = [
  {
    accoordionTitle: "1874/200/1",
    lot: "Z2186534",
    type: "abc",
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
    lot: "Z5657665",
    type: "cde",
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
    lot: "Z99877",
    type: "efg",
    weight: "1440,0",
    amount: "45",
    supplier: "treća firma",
    dateOfOrder: "14.05.2024.",
    entered: "15.05.2024.",
    comment: "komentar",
    code: "jflgkdflgndf-ggrefds",
  },
];

const WholesaleGoodsScreen = () => {
  const { state } = useAppContext();
  const styles = getStyles(state.isDarkThemeOn);
  const theme = useTheme();

  const [filteredList, setFilteredList] = useState<Item[]>(mockItems);

  const handleFilteredData = (data: Item[]) => {
    setFilteredList(data);
  };

  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Filter data={mockItems} onFilteredData={handleFilteredData} />
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <Accordion item={item}>
            <ListItemDetails {...item} />
          </Accordion>
        )}
      />
    </SafeAreaView>
  );
};

export default WholesaleGoodsScreen;

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
