import { useAppContext } from "@/context/AppContext";
import { mockActiveGoodsItems } from "@/data/mockActiveGoodsItems";
import { Item } from "@/types";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Card, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedAccordion from "../components/AnimatedAccordion";
import Filter from "../components/Filter";
import ItemDetails from "../components/ItemDetails";

const ActiveGoodsScreen = () => {
  const { state } = useAppContext();
  const styles = getStyles(state.isDarkThemeOn);
  const theme = useTheme();

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filteredList, setFilteredList] =
    useState<Item[]>(mockActiveGoodsItems);

  const handleFilteredData = (data: Item[]) => {
    setFilteredList(data);
  };

  const handlePress = (id: string) => {
    setExpandedId(id === expandedId ? null : id);
  };

  const flatListHeader = (
    <Card style={styles.card}>
      <Card.Content>
        <Filter
          data={mockActiveGoodsItems}
          onFilteredData={handleFilteredData}
          hideTypeFilter
          hideSupplierFilter
          hideIsRunningFilter
          hideFiFilter
        />
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.code}
        ListHeaderComponent={flatListHeader}
        renderItem={({ item }) => {
          const isExpanded = item.code === expandedId;
          return (
            <AnimatedAccordion
              item={item}
              isExpanded={isExpanded}
              onPress={() => handlePress(item.code)}
            >
              <ItemDetails {...item} hideButtons />
            </AnimatedAccordion>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ActiveGoodsScreen;

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
      marginBottom: 16,
    },
    cardText: {
      fontSize: 32,
      paddingVertical: 32,
      textAlign: "center",
    },
  });
