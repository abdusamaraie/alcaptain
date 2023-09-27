import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Days3 = ({ style }) => {
  return (
    <View style={[styles.days, style]}>
      <Text style={styles.text}>ايام محدده</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
    color: Color.silver,
    textAlign: "center",
    flex: 1,
  },
  days: {
    borderRadius: Border.br_13xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    flex: 1,
  },
});

export default Days3;
