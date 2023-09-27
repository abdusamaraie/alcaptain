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

const Weeks1 = ({ style }) => {
  return (
    <Pressable style={[styles.weeks, style]}>
      <Text style={styles.text}>في الاسبوع</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.labelsSmBold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
    color: Color.colorBaseWhite,
    textAlign: "center",
    flex: 1,
  },
  weeks: {
    borderRadius: StyleVariable.radiusLg,
    backgroundColor: Color.colorPrimary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    flex: 1,
  },
});

export default Weeks1;
