import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleVariable,
  FontFamily,
  Color,
  FontSize,
  Border,
} from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 0.47, 1]}
      colors={["#2e2e2e", "rgba(0, 0, 0, 0.47)", "#20bfc4"]}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/splashscreen.png")}
      >
        <View style={[styles.loading, styles.loadingPosition]}>
          <View style={[styles.logo, styles.logoSpaceBlock]}>
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={styles.logoSpaceBlock}>
            <Text style={styles.textFlexBox}>
              <Text style={styles.text1}>تحميل</Text>
              <Text style={styles.text2}> ....</Text>
            </Text>
            <Text style={[styles.text3, styles.textFlexBox]}>
              برنامجك اليومي
            </Text>
          </View>
        </View>
        <StatusBar style={styles.loadingPosition} barStyle="dark-content" />
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loadingPosition: {
    left: 0,
    position: "absolute",
  },
  logoSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: StyleVariable.spacingScreenMarginSm,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  textFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  icon1: {
    width: 91,
    height: 91,
  },
  vectorIcon: {
    width: 204,
    height: 91,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  text1: {
    fontSize: 31,
    color: "#060606",
    fontFamily: FontFamily.displayDisplayMedium,
  },
  text2: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
    color: Color.labelColorDarkPrimary,
  },
  text3: {
    fontSize: FontSize.displayDisplayMedium_size,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.displayDisplayMedium,
  },
  loading: {
    top: 367,
    right: 0,
    bottom: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
  splashScreen: {
    height: 844,
    width: "100%",
  },
});

export default SplashScreen;
