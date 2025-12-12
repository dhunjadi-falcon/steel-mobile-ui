import { ActionType, useAppContext } from "@/context/AppContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Switch,
  View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Button, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
const logoLight = require("../assets/images/intersteel-logo.png");
const logoDark = require("../assets/images/intersteel-logo-dark.png");

type Language = "HR" | "EN";

const languages = [
  { key: "1", value: "HR" },
  { key: "2", value: "EN" },
];

export default function LoginScreen() {
  const theme = useTheme();
  const { state, dispatch } = useAppContext();
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState<Language>("HR");

  const styles = getStyles(state.isDarkThemeOn);

  const toggleTheme = () => {
    dispatch({
      type: ActionType.TOGGLE_DARK_THEME,
      payload: { isDarkThemeOn: !state.isDarkThemeOn },
    });
  };

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={25}>
        <View style={styles.headerContainer}>
          <Switch
            trackColor={{ false: "#e4e5f1", true: "lightblue" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            thumbColor="#e4e5f1"
            value={state.isDarkThemeOn}
          />
          <SelectList
            setSelected={(lng: Language) => {
              setLanguage(lng.toLowerCase() as Language);
              changeLanguage(lng.toLowerCase() as Language);
            }}
            data={languages}
            save="value"
            placeholder={language}
            search={false}
            boxStyles={styles.boxStyles}
            dropdownStyles={styles.dropdownStyles}
            dropdownTextStyles={{
              color: theme.colors.onBackground,
              display: "flex",
              justifyContent: "center",
            }}
            inputStyles={{
              color: theme.colors.onBackground,
              display: "flex",
              justifyContent: "center",
            }}
            arrowicon={<></>}
          />
        </View>

        <View>
          <Image
            resizeMode="contain"
            source={state.isDarkThemeOn ? logoLight : logoDark}
            style={styles.logo}
          />
          <TextInput
            testID="textInput"
            mode="flat"
            placeholder={t("screens.login.usernamePlaceholder")}
            textColor="white"
            underlineColor={theme.colors.outline}
            activeUnderlineColor={theme.colors.outline}
            placeholderTextColor={styles.placeholderTextColor.color}
            contentStyle={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            testID="textInput"
            mode="flat"
            placeholder={t("screens.login.passwordPlaceholder")}
            underlineColor={theme.colors.outline}
            activeUnderlineColor={theme.colors.outline}
            textColor="white"
            placeholderTextColor={styles.placeholderTextColor.color}
            contentStyle={{ backgroundColor: theme.colors.background }}
          />
          <Button
            buttonColor={theme.colors.primary}
            textColor={theme.colors.background}
            style={{ marginTop: 32 }}
          >
            {t("screens.login.login")}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const getStyles = (isDarkThemeOn: boolean) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: isDarkThemeOn ? "#252526" : "#fafafa",
      padding: 16,
    },
    headerContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    logo: { width: "100%", height: 200, marginTop: 100, marginBottom: 50 },
    placeholderTextColor: { color: isDarkThemeOn ? "#fafafa" : "#252526" },
    button: { borderRadius: 8 },
    dropdownStyles: {
      position: "absolute",
      top: 35,
      right: 0,
      width: 70,
      display: "flex",
      justifyContent: "center",
    },
    boxStyles: {
      position: "relative",
      width: 70,
      display: "flex",
      justifyContent: "center",
    },
  });
