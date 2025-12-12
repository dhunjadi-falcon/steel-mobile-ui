import { Href, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const DeleteActionScreen = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView
      style={[
        styles.screenContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Card
        style={[
          styles.card,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ color: theme.colors.onBackground }}
          >
            Odaberi razlog
          </Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.errorAndDispatchButtons}>
              <Button
                mode="outlined"
                icon="delete"
                textColor={theme.colors.onErrorContainer}
                style={{ borderColor: theme.colors.errorContainer, flex: 1 }}
                onPress={() =>
                  router.navigate(
                    "/(protected)/(actions)/deleteActionErrorScreen" as Href
                  )
                }
              >
                Greška
              </Button>
              <Button
                mode="outlined"
                icon="file-document-edit"
                textColor={theme.colors.tertiary}
                style={{ borderColor: theme.colors.tertiary, flex: 1 }}
              >
                Otpremi
              </Button>
            </View>

            <View style={styles.internalProcessesButtonContainer}>
              <Button
                mode="outlined"
                icon="cloud-refresh-variant"
                textColor={theme.colors.primary}
                style={[
                  styles.internalProcessesButton,
                  { borderColor: theme.colors.primary },
                ]}
              >
                Interni procesi
              </Button>
            </View>

            <View style={styles.closeButtonContainer}>
              <Button
                mode="outlined"
                textColor={theme.colors.primary}
                style={[styles.closeButton, { width: "100%" }]}
                onPress={() => router.replace("/(protected)/wholesaleGoods")}
              >
                Zatvori
              </Button>
            </View>
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default DeleteActionScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 16,
  },
  errorAndDispatchButtons: { display: "flex", flexDirection: "row", gap: 16 },
  internalProcessesButtonContainer: { display: "flex", flexDirection: "row" },
  internalProcessesButton: { width: "100%" },
  closeButtonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 32,
  },
  closeButton: { width: "100%" },
});
