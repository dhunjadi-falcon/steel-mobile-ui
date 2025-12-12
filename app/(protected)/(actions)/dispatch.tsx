import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";

const options = [
  { title: "Veleprodaja" },
  { title: "OPTI-BAT-A" },
  { title: "OPTI-BAT-B" },
];

const DispatchScreen = () => {
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation();

  const [selectedPlace, setSelectedPlace] = useState("");

  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <Text variant="titleLarge" style={{ color: theme.colors.onBackground }}>
          Unesite mjesto slanja
        </Text>

        <SelectDropdown
          data={options}
          onSelect={(selectedItem) => {
            setSelectedPlace(selectedItem.title);
          }}
          renderButton={(_, isOpened) => {
            return (
              <View
                style={[
                  styles.dropdownButtonStyle,
                  { backgroundColor: theme.colors.onBackground },
                ]}
              >
                <Text style={styles.dropdownButtonTxtStyle}>
                  {selectedPlace || ""}
                </Text>
                <Icon
                  source={isOpened ? "chevron-up" : "chevron-down"}
                  size={20}
                  color={theme.colors.background}
                />
              </View>
            );
          }}
          renderItem={(item, _, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {
                    backgroundColor: theme.colors.onBackground,
                  }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />

        <Button
          mode="outlined"
          textColor={theme.colors.primary}
          style={{ borderColor: theme.colors.primary, width: "100%" }}
        >
          {t("itemActions.reasonDispatch.dispatch")}
        </Button>

        <Button
          mode="outlined"
          textColor={theme.colors.errorContainer}
          style={{ borderColor: theme.colors.errorContainer, width: "100%" }}
          onPress={() => router.back()}
        >
          {t("common.back")}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default DispatchScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "100%",
    padding: 16,
    borderRadius: 16,
  },
  dropdownButtonStyle: {
    width: "100%",
    height: 56,
    backgroundColor: "#E9ECEF",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    borderRadius: 16,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
