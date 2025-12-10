import { Item } from "@/types";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface AccordionProps {
  children: React.ReactNode;
  item: Item;
}

const Accordion = ({ children, item }: AccordionProps) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const bottomRadius = useSharedValue(isExpanded ? 0 : 16);

  const animatedContainerStyle = useAnimatedStyle(() => {
    const targetRadius = isExpanded ? 0 : 16;
    const duration = isExpanded ? 300 : 300;

    bottomRadius.value = withTiming(targetRadius, {
      duration: duration,
    });

    return {
      borderBottomEndRadius: bottomRadius.value,
      borderBottomStartRadius: bottomRadius.value,
    };
  }, [isExpanded]);

  const headerBorderRadiusStyles = [animatedContainerStyle];

  const contentTranslateY = useSharedValue(-20);

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);

    if (isExpanded) {
      contentTranslateY.value = withTiming(-20, {
        duration: 300,
      });
    } else {
      contentTranslateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.ease,
      });
    }
  };

  const headerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: theme.colors.primaryContainer,
      borderRadius: 8,
      paddingHorizontal: 16,
      justifyContent: "center",
    };
  });

  const contentStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isExpanded ? 1 : 0, { duration: 300 }),
      transform: [
        {
          translateY: contentTranslateY.value,
        },
      ],
      overflow: "hidden",
    };
  });

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion}>
        <Animated.View
          style={[
            styles.headerContainer,
            headerStyle,
            headerBorderRadiusStyles,
          ]}
        >
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text variant="headlineLarge">{item.accoordionTitle}</Text>
            <Text variant="titleLarge">LOT: {item.lot}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.content,
          contentStyle,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        {isExpanded && <View>{children}</View>}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    marginVertical: 8,
  },
  headerContainer: {
    paddingVertical: 16,
    justifyContent: "center",
  },
  content: {
    overflow: "hidden",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default Accordion;
