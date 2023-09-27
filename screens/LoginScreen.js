import * as React from "react";
import { View, StyleSheet, Text, Pressable, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import {
  Padding,
  StyleVariable,
  FontFamily,
  FontSize,
  Color,
} from "../GlobalStyles";

const LoginScreen = () => {
  return (
    <View style={styles.loginScreen}>
      <SafeAreaView
        style={[styles.mainContainer, styles.mainContainerPosition]}
      >
        <View style={[styles.loginFormContainer, styles.viewFlexBox]}>
          <Pressable style={[styles.googleSigninButton, styles.signinLayout]}>
            <Image
              style={styles.iconsLayout}
              contentFit="cover"
              source={require("../assets/bigoogle2.png")}
            />
            <Text style={[styles.google, styles.appleTypo]}>
              الدخول باستخدام Google
            </Text>
          </Pressable>
          <Pressable
            style={[styles.appleSigninButton, styles.signinSpaceBlock]}
          >
            <Image
              style={styles.iconsLayout}
              contentFit="cover"
              source={require("../assets/apple.png")}
            />
            <Text style={[styles.apple, styles.appleTypo]}>
              الدخول باستخدام Apple
            </Text>
          </Pressable>
          <View style={[styles.orLine, styles.signinSpaceBlock]}>
            <View style={[styles.orLineChild, styles.lineBorder]} />
            <Text style={[styles.text1, styles.text1SpaceBlock]}>
              أو الدخول عن طريق
            </Text>
            <View style={[styles.orLineItem, styles.text1SpaceBlock]} />
          </View>
          <Pressable
            style={[styles.emailSigninButton, styles.signinSpaceBlock]}
          >
            <Image
              style={styles.iconsLayout}
              contentFit="cover"
              source={require("../assets/buttonicons16.png")}
            />
            <Text style={[styles.apple, styles.appleTypo]}>
              الدخول باستخدام الإيميل
            </Text>
          </Pressable>
          <Text style={[styles.text3, styles.textTypo1]}>
            <Text
              style={[styles.text4, styles.textTypo]}
            >{`ليس لديك حساب؟ `}</Text>
            <Text style={styles.text5}>إنشاء حساب</Text>
          </Text>
        </View>
        <View style={styles.termsNServices}>
          <Text style={[styles.text6, styles.textTypo]} numberOfLines={1}>
            <Text style={styles.text7}>{`في الاستمرار, أنت توافق على `}</Text>
            <Text style={styles.text8}>شروط الخدمه</Text>
            <Text style={styles.text7}>{` و `}</Text>
            <Text style={styles.text8}>قوانين الخصوصيه</Text>
            <Text style={styles.text7}>.</Text>
          </Text>
        </View>
      </SafeAreaView>
      <StatusBar style={styles.mainContainerPosition} barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerPosition: {
    top: 0,
    position: "absolute",
  },
  viewFlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  titleFlexBox: {
    marginLeft: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  signinLayout: {
    minWidth: 320,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    height: StyleVariable.spacing7,
    borderStyle: "solid",
    borderRadius: StyleVariable.radiusMd,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  appleTypo: {
    fontFamily: FontFamily.bodySmReg,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    textAlign: "center",
    marginLeft: 4,
    flex: 1,
  },
  signinSpaceBlock: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  lineBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  text1SpaceBlock: {
    marginLeft: 27,
    flex: 1,
  },
  textTypo1: {
    textDecoration: "underline",
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  textTypo: {
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
  },
  iconsLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  google: {
    color: Color.colorUtilityBgColor,
  },
  googleSigninButton: {
    backgroundColor: Color.colorBaseWhite,
    borderColor: Color.secondaryContainer,
    borderWidth: 2,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    height: StyleVariable.spacing7,
    borderStyle: "solid",
    borderRadius: StyleVariable.radiusMd,
    alignSelf: "stretch",
  },
  apple: {
    color: Color.colorBaseWhite,
  },
  appleSigninButton: {
    borderColor: Color.colorBaseWhite,
    borderWidth: 1,
    minWidth: 320,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    height: StyleVariable.spacing7,
    borderStyle: "solid",
    borderRadius: StyleVariable.radiusMd,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 14,
    backgroundColor: Color.colorUtilityBgColor,
  },
  orLineChild: {
    flex: 1,
  },
  text1: {
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
    color: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_base,
    marginLeft: 27,
    textAlign: "center",
  },
  orLineItem: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  orLine: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  emailSigninButton: {
    backgroundColor: Color.colorPrimary,
    borderColor: Color.colorBrandPrimaryLight,
    minWidth: 320,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    height: StyleVariable.spacing7,
    borderStyle: "solid",
    borderRadius: StyleVariable.radiusMd,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 2,
  },
  text4: {
    color: Color.whitesmoke_200,
  },
  text5: {
    color: Color.tomato_100,
    fontFamily: FontFamily.tajawalMedium,
    fontWeight: "500",
  },
  text3: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  loginFormContainer: {
    paddingTop: 90,
    paddingBottom: Padding.p_11xl,
  },
  text7: {
    color: Color.whitesmoke_200,
  },
  text8: {
    color: Color.colorWhitesmoke_100,
  },
  text6: {
    textDecoration: "underline",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    flex: 1,
  },
  termsNServices: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_24xl,
    paddingBottom: Padding.p_xl,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  mainContainer: {
    right: 0,
    bottom: 0,
    left: 0,
    paddingTop: Padding.p_31xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginScreen: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorUtilityBgColor,
  },
});

export default LoginScreen;
