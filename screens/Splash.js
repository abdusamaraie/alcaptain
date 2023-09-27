import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Splash = () => {
  return (
    <LinearGradient
      style={styles.splash}
      locations={[0, 0.5, 1]}
      colors={["#2e2e2e", "rgba(255, 255, 255, 0.47)", "#20bfc4"]}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/splash.png")}
      >
        <View style={styles.loading}>
          <View style={[styles.logo, styles.logoFlexBox]}>
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <View style={[styles.title, styles.logoFlexBox]}>
            <Text style={styles.text}>
              <Text style={styles.text1}>تحميل</Text>
              <Text style={styles.text2}>{` ....
برنامجك اليومي`}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.statusbarIphone13truedef}>
          <Image
            style={[styles.notchIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={[styles.leftSide, styles.leftSideLayout]}>
            <View style={[styles.statusbarTime, styles.leftSideLayout]}>
              <Text style={styles.text3}>9:41</Text>
            </View>
          </View>
          <Image
            style={[styles.rightSideIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/right-side.png")}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    alignItems: "center",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  icon1: {
    width: 45,
    height: 45,
  },
  vectorIcon: {
    width: 80,
    height: 32,
  },
  logo: {
    width: 299,
    justifyContent: "center",
    paddingVertical: 0,
    overflow: "hidden",
  },
  text1: {
    color: "#060606",
  },
  text2: {
    color: Color.labelColorDarkPrimary,
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
    textAlign: "center",
    flex: 1,
  },
  title: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_3xs,
    justifyContent: "space-between",
  },
  loading: {
    top: 79,
    height: 687,
    justifyContent: "space-between",
    alignItems: "center",
    width: 390,
    left: 0,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -82,
    width: 164,
    top: 0,
    height: 32,
  },
  text3: {
    top: 1,
    fontSize: FontSize.defaultBoldBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody,
    height: 20,
    width: 54,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    top: 0,
    borderRadius: Border.br_5xl,
    height: 21,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
  },
  statusbarIphone13truedef: {
    height: 47,
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    flex: 1,
    borderRadius: Border.br_5xl,
    width: "100%",
  },
  splash: {
    height: 844,
    width: "100%",
  },
});

export default Splash;
