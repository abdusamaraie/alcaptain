import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const XText = ({ style }) => {
  return <Text style={[styles.x, style]}>x اسبوع</Text>;
};

const styles = StyleSheet.create({
  x: {
    fontSize: FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 28,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.labelColorDarkSecondary,
    textAlign: "left",
  },
});

export default XText;
