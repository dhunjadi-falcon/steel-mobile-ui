import { useAppContext } from "@/context/AppContext";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Modal,
  Portal,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Filter from "../components/Filter";
import InventoryCheckItem from "../components/inventoryCheckItem";

const InventoryCheckScreen = () => {
  const { state } = useAppContext();
  const styles = getStyles(state.isDarkThemeOn);
  const theme = useTheme();

  const [isNewCheckModalOpen, setIsNewCheckModalOpen] = useState(false);
  const [modalinputs, setModalInputs] = useState({ type: "", fi: "" });
  const [filteredList, setFilteredList] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);

  const flatlistHeader = (
    <React.Fragment>
      <Card style={styles.card}>
        <Card.Content>
          <Button
            buttonColor={theme.colors.primary}
            textColor={theme.colors.background}
            onPress={() => setIsNewCheckModalOpen(true)}
          >
            Nova provjera
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Filter
            data={[]}
            onFilteredData={() => {}}
            hideLOTFilter
            hideSupplierFilter
          />
        </Card.Content>
      </Card>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <SafeAreaView
        style={[
          styles.screenContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <FlatList
          data={filteredList}
          keyExtractor={(item) => item}
          ListHeaderComponent={flatlistHeader}
          renderItem={({ item }) => {
            return <InventoryCheckItem />;
          }}
        />
      </SafeAreaView>
      <Portal>
        <Modal
          visible={isNewCheckModalOpen}
          onDismiss={() => setIsNewCheckModalOpen(false)}
          contentContainerStyle={{ backgroundColor: theme.colors.background }}
        >
          <View style={[styles.modal, styles.card]}>
            <Text variant="headlineMedium">Odaberite tip artikla ili Fi</Text>
            <TextInput
              mode="outlined"
              outlineStyle={{ borderRadius: 16 }}
              contentStyle={{
                backgroundColor: theme.colors.background,
                borderRadius: 16,
              }}
              textColor={theme.colors.onBackground}
              placeholder="Pretraži tip artikla"
              value={modalinputs.type}
              onChangeText={(text) =>
                setModalInputs((prev) => ({ ...prev, type: text }))
              }
              disabled={modalinputs.fi.length > 0}
            />

            <TextInput
              mode="outlined"
              outlineStyle={{ borderRadius: 16 }}
              contentStyle={{
                backgroundColor: theme.colors.background,
                borderRadius: 16,
              }}
              textColor={theme.colors.onBackground}
              placeholder="Fi"
              value={modalinputs.fi}
              onChangeText={(text) =>
                setModalInputs((prev) => ({ ...prev, fi: text }))
              }
              disabled={modalinputs.type.length > 0}
            />
            <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
              <Button
                mode="outlined"
                textColor={theme.colors.tertiary}
                style={{ borderColor: theme.colors.tertiary, flex: 1 }}
                disabled={
                  modalinputs.type.length === 0 && modalinputs.fi.length === 0
                }
              >
                Potvrdi
              </Button>
              <Button
                mode="outlined"
                textColor={theme.colors.onErrorContainer}
                style={{ borderColor: theme.colors.errorContainer, flex: 1 }}
                onPress={() => setIsNewCheckModalOpen(false)}
              >
                Odustani
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    </React.Fragment>
  );
};

export default InventoryCheckScreen;

const getStyles = (isDarkThemeOn: boolean) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      paddingHorizontal: 8,
    },
    modal: {
      padding: 16,
      borderRadius: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 16,
    },

    card: {
      backgroundColor: isDarkThemeOn ? "#3e3e3e" : "#e4e5f1",
      marginBottom: 16,
    },
  });
