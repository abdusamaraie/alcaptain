import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TopNav = ({ style }) => {
  return (
    <SafeAreaView>
      <View style={[styles.view, styles.viewFlexBox]}>
        <View style={[styles.leftIcon, styles.viewFlexBox]}>
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/navicons.png")}
          />
        </View>
        <View style={[styles.title, styles.titleFlexBox]}>
          <Text style={[styles.text, styles.viewFlexBox]}>تسجيل الدخول</Text>
        </View>
        <Pressable style={[styles.rightIcon, styles.titleFlexBox]}>
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/backarrowicons1.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleFlexBox: {
    marginLeft: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  iconsLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  leftIcon: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.tajawalMedium,
    color: Color.colorBrandPrimaryExtraLight,
    textAlign: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  title: {
    justifyContent: "space-between",
    flex: 1,
  },
  rightIcon: {
    justifyContent: "center",
  },
  view: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default TopNav;
