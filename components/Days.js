import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import {
  StyleVariable,
  Color,
  FontSize,
  FontFamily,
  Padding,
} from "../GlobalStyles";

const Days2 = ({ style }) => {
  return (
    <View style={[styles.days, style]}>
      <Pressable style={styles.sundayFlexBox}>
        <Text style={styles.text}>الاحد</Text>
      </Pressable>
      <Pressable style={[styles.monday, styles.sundayFlexBox]} day="monday">
        <Text style={styles.text}>الاثنين</Text>
      </Pressable>
      <Pressable style={[styles.monday, styles.sundayFlexBox]} day="tuesday">
        <Text style={styles.text}>الثلاثاء</Text>
      </Pressable>
      <Pressable style={[styles.monday, styles.sundayFlexBox]} day="wednesday">
        <Text style={styles.text}>الاربعاء</Text>
      </Pressable>
      <Pressable style={[styles.monday, styles.sundayFlexBox]} day="thursday">
        <Text style={styles.text}>الخميس</Text>
      </Pressable>
      <Pressable style={[styles.monday, styles.sundayFlexBox]} day="friday">
        <Text style={styles.text}>الجمعه</Text>
      </Pressable>
      <Pressable style={[styles.monday, styles.sundayFlexBox]} day="saturday">
        <Text style={styles.text}>السبت</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sundayFlexBox: {
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing3,
    overflow: "hidden",
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.radiusSm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_base,
    lineHeight: 12,
    fontFamily: FontFamily.bodySmReg,
    color: Color.colorBaseWhite,
    textAlign: "center",
  },
  monday: {
    marginLeft: 36,
  },
  days: {
    alignSelf: "stretch",
    flex: 1,
    flexWrap: "wrap",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Days2;
