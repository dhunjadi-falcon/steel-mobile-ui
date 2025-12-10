import React, { PropsWithChildren, useEffect } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, {
  measure,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnUI } from "react-native-worklets";

interface AnimatedAccordionProps extends PropsWithChildren {
  isExpanded: boolean;
  style?: StyleProp<ViewStyle>;
}

const AnimatedAccordionContent: React.FC<AnimatedAccordionProps> = ({
  isExpanded,
  children,
  style,
}) => {
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  const contentRef = useAnimatedRef<Animated.View>();
  const contentFullHeight = useSharedValue(-1);

  useEffect(() => {
    const duration = 300;

    if (isExpanded) {
      if (contentFullHeight.value === -1) {
        scheduleOnUI(() => {
          "worklet";
          const measured = measure(contentRef);
          if (measured) {
            contentFullHeight.value = measured.height;
            height.value = withTiming(measured.height, { duration });
            opacity.value = withTiming(1, { duration: 10 });
          }
        });
      } else {
        height.value = withTiming(contentFullHeight.value, { duration });
        opacity.value = withTiming(1, { duration: 100 });
      }
    } else {
      height.value = withTiming(0, { duration });
      opacity.value = withTiming(0, { duration: 300 });
    }
  }, [isExpanded, contentRef, contentFullHeight, height, opacity]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      overflow: "hidden",
      opacity: opacity.value,
    };
  });

  const contentAnimatedStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      width: "100%",
    };
  });

  return (
    <Animated.View style={[animatedContainerStyle, style]}>
      <Animated.View
        ref={contentRef}
        style={contentAnimatedStyle}
        onLayout={() => {}}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export default AnimatedAccordionContent;
