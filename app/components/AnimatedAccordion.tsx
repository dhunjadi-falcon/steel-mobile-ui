import { Item } from "@/types";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Animated, {
  LightSpeedInLeft,
  LightSpeedOutRight,
  LinearTransition,
} from "react-native-reanimated";

export interface CategoryData {
  item: Item;
  children: React.ReactNode;
}
type AccordionItemProps = {
  isExpanded: boolean;
  onPress: () => void;
} & CategoryData;

const AnimatedView = Animated.createAnimatedComponent(Animated.View);

// Height animation
const customLayout = LinearTransition.springify().duration(500);

const AnimatedAccordion = ({
  item,
  isExpanded,
  onPress,
  children,
}: AccordionItemProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.cardContainer}
      activeOpacity={1}
    >
      <AnimatedView
        style={[
          styles.card,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
        layout={customLayout}
      >
        <View style={styles.title}>
          <Text variant="headlineLarge">{item.accoordionTitle}</Text>
          <Text variant="titleLarge">LOT: {item.lot}</Text>
        </View>

        {isExpanded && (
          <AnimatedView
            style={[
              styles.details,
              { borderTopColor: theme.colors.onBackground },
            ]}
            entering={LightSpeedInLeft.duration(500)}
            exiting={LightSpeedOutRight.duration(500)}
          >
            <AnimatedView style={styles.children}>{children}</AnimatedView>
          </AnimatedView>
        )}
      </AnimatedView>
    </TouchableOpacity>
  );
};

export default AnimatedAccordion;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  title: { display: "flex", flexDirection: "column", padding: 16 },
  card: {
    minHeight: 100,
  },
  details: {
    borderTopWidth: 1,
    width: "100%",
  },
  children: {
    overflow: "hidden",
  },
});
