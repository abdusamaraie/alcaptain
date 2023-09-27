import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Days11 = ({ style }) => {
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
    color: Color.whitesmoke_100,
    textAlign: "center",
  },
  days: {
    flex: 1,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.tomato_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
  },
});

export default Days11;
