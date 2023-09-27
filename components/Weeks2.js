import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Weeks2 = ({ style }) => {
  return (
    <View style={[styles.weeks, style]}>
      <Text style={styles.text}>في الاسبوع</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.tajawalMedium,
    color: Color.silver,
    textAlign: "center",
    width: 64,
  },
  weeks: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.darkslategray,
    width: 162,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
});

export default Weeks2;
