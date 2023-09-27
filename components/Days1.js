import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Days = ({ style }) => {
  return (
    <Pressable style={[styles.days, style]}>
      <Text style={styles.text}>ايام محدده</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.labelsSmBold_size,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
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

export default Days;
