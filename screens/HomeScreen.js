import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <View style={[styles.title, styles.titleFlexBox]} />
      <View style={[styles.buttomNav, styles.titleFlexBox]} />
      <View style={styles.statusBarDark}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons5.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
  },
  title: {
    zIndex: 0,
  },
  buttomNav: {
    height: 244,
    zIndex: 1,
  },
  icons: {
    top: 18,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    top: "50%",
    left: 32,
    fontSize: FontSize.subheadlineBold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  statusBarDark: {
    top: 0,
    left: 4,
    width: 375,
    height: 44,
    zIndex: 2,
    position: "absolute",
  },
  homeScreen: {
    backgroundColor: Color.labelColorLightPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    justifyContent: "space-between",
    paddingTop: Padding.p_31xl,
    alignItems: "center",
  },
});

export default HomeScreen;
