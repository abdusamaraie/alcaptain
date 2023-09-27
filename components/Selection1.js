import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Selection1 = ({ style }) => {
  return (
    <View style={[styles.selection, style]}>
      <Text style={styles.text}>9</Text>
      <Text style={[styles.text1, styles.xTypo]}>41</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  xTypo: {
    marginLeft: 14,
    textAlign: "left",
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 28,
    fontSize: FontSize.size_4xl,
  },
  text: {
    textAlign: "right",
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 28,
    fontSize: FontSize.size_4xl,
    letterSpacing: 2,
  },
  text1: {
    letterSpacing: 2,
    marginLeft: 14,
    textAlign: "left",
  },
  selection: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.fillColorDarkQuaternary,
    width: 354,
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingHorizontal: 116,
    paddingVertical: 0,
  },
});

export default Selection1;
