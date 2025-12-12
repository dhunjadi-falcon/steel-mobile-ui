import { Item } from "@/types";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import {
  Checkbox,
  Icon,
  Modal,
  Portal,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";

type FilterProps = {
  data: Item[];
  onFilteredData: (filteredData: Item[]) => void;
  hideTypeFilter?: boolean;
  hideSupplierFilter?: boolean;
  hideLOTFilter?: boolean;
  hideFiFilter?: boolean;
  hideIsRunningFilter?: boolean;
};

type CalenderOutput = {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};

const Filter = ({
  data,
  onFilteredData,
  hideTypeFilter,
  hideSupplierFilter,
  hideLOTFilter,
  hideFiFilter,
  hideIsRunningFilter,
}: FilterProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [filters, setFilters] = useState({
    lot: "",
    type: "",
    supplier: "",
    fi: "",
    isRunning: false,
  });

  const showModal = () => setIsCalendarOpen(true);
  const hideModal = () => setIsCalendarOpen(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const filteredData = useMemo(() => {
    if (!data) return [];

    const typeFilter = filters.type.toLowerCase();
    const supplierFilter = filters.supplier.toLowerCase();
    const lotFilter = filters.lot.toLowerCase();
    const fiFilter = filters.fi.toLowerCase();
    const isRunningFilter = filters.isRunning;

    return data.filter((item) => {
      const typeMatch = item.type.toLowerCase().includes(typeFilter);

      const supplierMatch = item.supplier
        .toLowerCase()
        .includes(supplierFilter);

      const lotMatch = item.lot.toLowerCase().includes(lotFilter);
      const fiMatch = item.fi?.toLowerCase().includes(fiFilter);
      const isRunningMatch = item.isRunning;

      // Dodati fiMatch i isRunningMatch
      return typeMatch && supplierMatch && lotMatch;
    });
  }, [
    data,
    filters.supplier,
    filters.type,
    filters.lot,
    filters.fi,
    filters.isRunning,
  ]);

  useEffect(() => {
    onFilteredData(filteredData);
  }, [filteredData, onFilteredData]);

  const handleDayPress = (day: CalenderOutput) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.filterContainer}>
      {!hideLOTFilter && (
        <TextInput
          mode="outlined"
          outlineStyle={{ borderRadius: 16 }}
          contentStyle={{
            backgroundColor: theme.colors.background,
            borderRadius: 16,
          }}
          textColor={theme.colors.onBackground}
          outlineColor={theme.colors.outline}
          activeOutlineColor={theme.colors.outline}
          placeholderTextColor={theme.colors.onBackground}
          placeholder={t("components.filter.lotPlaceholder")}
          value={filters.lot}
          onChangeText={(text) => handleFilterChange("lot", text)}
        />
      )}

      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.calendatTouchableOpacity,
          {
            borderBlockColor: "transparent",
            backgroundColor: theme.colors.background,
            borderRadius: 16,
          },
        ]}
        onPress={showModal}
      >
        {selectedDate ? (
          <Text
            style={{
              color: theme.colors.onBackground,
              fontSize: 16,
            }}
          >
            {selectedDate}
          </Text>
        ) : (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 56,
            }}
          >
            <Text
              style={{
                color: theme.colors.onBackground,
                fontSize: 16,
                width: "auto",
                flexGrow: 1,
              }}
            >
              DD/MM/YYYY
            </Text>
            <Icon size={20} source="calendar" />
          </View>
        )}
      </TouchableOpacity>

      <Portal>
        <Modal
          visible={isCalendarOpen}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Calendar
            style={{ borderWidth: 0 }}
            theme={{
              backgroundColor: theme.colors.background,
              calendarBackground: theme.colors.background,
              textSectionTitleColor: theme.colors.onBackground,
              selectedDayBackgroundColor: "#00adf5",
              selectedDayTextColor: "#ffffff",
              todayTextColor: theme.colors.outline,
              dayTextColor: theme.colors.onBackground,
              textDisabledColor: theme.colors.errorContainer,
              arrowColor: theme.colors.primary,
              monthTextColor: theme.colors.primary,
            }}
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: theme.colors.primary,
              },
            }}
          />
        </Modal>
      </Portal>

      {!hideTypeFilter && (
        <TextInput
          mode="outlined"
          outlineStyle={{ borderRadius: 16 }}
          contentStyle={{
            backgroundColor: theme.colors.background,
            borderRadius: 16,
          }}
          textColor={theme.colors.onBackground}
          placeholderTextColor={theme.colors.onBackground}
          placeholder={t("components.filter.typePlaceholder")}
          value={filters.type}
          onChangeText={(text) => handleFilterChange("type", text)}
        />
      )}
      {!hideSupplierFilter && (
        <TextInput
          mode="outlined"
          outlineStyle={{ borderRadius: 16 }}
          contentStyle={{
            backgroundColor: theme.colors.background,
            borderRadius: 16,
          }}
          textColor={theme.colors.onBackground}
          placeholderTextColor={theme.colors.onBackground}
          placeholder={t("components.filter.supplierPlaceholder")}
          value={filters.supplier}
          onChangeText={(text) => handleFilterChange("supplier", text)}
        />
      )}

      {!hideFiFilter && (
        <TextInput
          mode="outlined"
          outlineStyle={{ borderRadius: 16 }}
          contentStyle={{
            backgroundColor: theme.colors.background,
            borderRadius: 16,
          }}
          textColor={theme.colors.onBackground}
          placeholderTextColor={theme.colors.onBackground}
          placeholder={t("components.filter.fiPlaceholder")}
          value={filters.fi}
          onChangeText={(text) => handleFilterChange("fi", text)}
        />
      )}

      {!hideIsRunningFilter && (
        <View>
          <Checkbox.Item
            label={t("components.filter.isRunningLabel")}
            status={filters.isRunning ? "checked" : "unchecked"}
            onPress={() => {
              setFilters((prev) => ({ ...prev, isRunning: !prev.isRunning }));
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Filter;
const styles = StyleSheet.create({
  filterContainer: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  calendatTouchableOpacity: {
    height: 56,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    borderWidth: 0,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
});
