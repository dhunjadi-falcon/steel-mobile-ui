import { ActionType, useAppContext } from "@/context/AppContext";
import { useState } from "react";
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
  const { state, dispatch } = useAppContext();
  const [language, setLanguage] = useState<Language>("HR");
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  const styles = getStyles(state.isDarkThemeOn);
  const theme = useTheme();

  const toggleTheme = () => {
    console.log("first");
    dispatch({
      type: ActionType.TOGGLE_DARK_THEME,
      payload: { isDarkThemeOn: !state.isDarkThemeOn },
    });
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
            setSelected={(val: string) => setLanguage(val as Language)}
            data={languages}
            save="value"
            placeholder={language}
            search={false}
            dropdownTextStyles={{ color: theme.colors.onBackground }}
            dropdownStyles={{
              position: "absolute",
              top: 35,
              right: 0,
              width: "100%",
            }}
            inputStyles={{
              color: theme.colors.onBackground,
            }}
            arrowicon={<></>}
            boxStyles={{ position: "relative", width: "100%" }}
          />
        </View>

        <View>
          <Image
            resizeMode="contain"
            source={state.isDarkThemeOn ? logoLight : logoDark}
            style={styles.logo}
          />
          <TextInput
            mode="flat"
            placeholder="Korisničko ime ili Email"
            textColor="white"
            underlineColor={theme.colors.outline}
            activeUnderlineColor={theme.colors.outline}
            placeholderTextColor={styles.placeholderTextColor.color}
            contentStyle={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            mode="flat"
            placeholder="Lozinka"
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
            Prijava
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: isDark ? "#252526" : "#fafafa",
      padding: 16,
    },
    headerContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    logo: { width: "100%", height: 200, marginTop: 100, marginBottom: 50 },
    emailInput: {
      height: 40,
      margin: 12,
      padding: 10,
      borderWidth: 1,
      borderRadius: 99,
      backgroundColor: "transparent",
      borderColor: isDark ? "#fafafa" : "#252526",
      color: isDark ? "#fafafa" : "#252526",
    },
    placeholderTextColor: { color: isDark ? "#fafafa" : "#252526" },
    button: { borderRadius: 8 },
  });
