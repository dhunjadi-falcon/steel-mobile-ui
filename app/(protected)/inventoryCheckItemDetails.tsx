import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const InventoryCheckItemDetails = () => {
  const { code } = useLocalSearchParams();
  console.log(code, "InventoryCheckItemDetails");
  return (
    <View>
      <Text>InventoryCheckItemDetails</Text>
    </View>
  );
};

export default InventoryCheckItemDetails;
