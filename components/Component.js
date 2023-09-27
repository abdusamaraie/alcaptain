import * as React from "react";
import { Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Component = ({ style }) => {
  return (
    <Text style={[styles.text, style]} numberOfLines={1}>
      41
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
    textAlign: "left",
  },
});

export default Component;
