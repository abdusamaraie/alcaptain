import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Weeks11 = ({ style }) => {
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
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    flex: 1,
  },
  weeks: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.tomato_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    flex: 1,
  },
});

export default Weeks11;
