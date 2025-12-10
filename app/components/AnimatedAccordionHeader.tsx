import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { List, useTheme } from "react-native-paper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface AnimatedAccordionHeaderProps {
  isExpanded: boolean;
  onPress: () => void;
  title: React.ReactNode;
  style: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const AnimatedAccordionHeader = ({
  isExpanded,
  onPress,
  title,
  style,
}: AnimatedAccordionHeaderProps) => {
  const theme = useTheme();
  const bottomRadius = useSharedValue(isExpanded ? 0 : 16);

  const animatedContainerStyle = useAnimatedStyle(() => {
    const targetRadius = isExpanded ? 0 : 16;

    const duration = isExpanded ? 100 : 300;

    bottomRadius.value = withTiming(targetRadius, { duration: duration });

    return {
      borderBottomEndRadius: bottomRadius.value,
      borderBottomStartRadius: bottomRadius.value,
    };
  }, [isExpanded]);

  const combinedStyle = [style, animatedContainerStyle];

  const iconName = isExpanded ? "chevron-up" : "chevron-down";

  return (
    <Animated.View style={combinedStyle}>
      <List.Item
        title={() => title}
        right={(props) => (
          <List.Icon
            {...props}
            icon={iconName}
            color={theme.colors.onPrimaryContainer}
          />
        )}
        onPress={onPress}
        style={{ backgroundColor: "transparent", paddingVertical: 12 }}
      />
    </Animated.View>
  );
};

export default AnimatedAccordionHeader;
