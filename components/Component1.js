import * as React from "react";
import { Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Component1 = ({ style }) => {
  return (
    <Text style={[styles.text, style]} numberOfLines={1}>
      45
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_4xl,
    letterSpacing: 2,
    lineHeight: 28,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.labelColorDarkSecondary,
    textAlign: "right",
    opacity: 0.45,
  },
});

export default Component1;
