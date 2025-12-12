import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const ErrorScreen = () => {
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation();

  const [reason, setReason] = useState("");

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
          {t("itemActions.reasonError.cardHeader")}
        </Text>

        <TextInput
          mode="outlined"
          outlineStyle={{ borderRadius: 16 }}
          contentStyle={{
            backgroundColor: theme.colors.background,
            borderRadius: 16,
          }}
          textColor={theme.colors.onBackground}
          placeholderTextColor={theme.colors.onBackground}
          placeholder=""
          value={reason}
          onChangeText={(val) => setReason(val)}
        />

        <Button
          mode="outlined"
          textColor={theme.colors.primary}
          style={{ borderColor: theme.colors.primary, width: "100%" }}
        >
          {t("common.confirm")}
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

export default ErrorScreen;

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
});
