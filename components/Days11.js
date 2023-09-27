import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Days1 = ({ style }) => {
  return (
    <View style={[styles.days, style]}>
      <Text style={styles.text}>في الاسبوع</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.labelsSmBold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.tajawalMedium,
    color: Color.colorBrandSecondaryLight,
    textAlign: "center",
    flex: 1,
  },
  days: {
    borderRadius: StyleVariable.radiusLg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    flex: 1,
  },
});

export default Days1;
