import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text1 = ({ style }) => {
  return <Text style={[styles.text, style]}>دقيقه</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 28,
    fontFamily: FontFamily.bodySmReg,
    color: Color.labelColorDarkSecondary,
    textAlign: "left",
  },
});

export default Text1;
