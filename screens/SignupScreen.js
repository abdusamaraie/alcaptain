import * as React from "react";
import { View, StyleSheet, Text, Pressable, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import {
  Padding,
  FontFamily,
  StyleVariable,
  FontSize,
  Color,
} from "../GlobalStyles";

const SignupScreen = () => {
  return (
    <View style={styles.signupScreen}>
      <SafeAreaView style={[styles.mainContainer, styles.containerFlexBox]}>
        <View
          style={[styles.registrationFormContainer, styles.containerFlexBox]}
        >
          <View style={[styles.registrationForm, styles.viewFlexBox]}>
            <View style={[styles.introText, styles.iconFlexBox]}>
              <Text style={[styles.text1, styles.textTypo3]} numberOfLines={1}>
                ابدا التغيير ألان
              </Text>
              <Text style={[styles.text2, styles.textTypo3]} numberOfLines={2}>
                يجب عليك التسجيل أو الدخول لانشاء برنامج التمرين الخاص بك
              </Text>
            </View>
            <View style={[styles.buttonsContainer, styles.iconFlexBox]}>
              <Pressable
                style={[styles.googleSignupButton, styles.signupLayout1]}
              >
                <Image
                  style={styles.iconsLayout}
                  contentFit="cover"
                  source={require("../assets/bigoogle1.png")}
                />
                <Text style={[styles.google, styles.appleTypo]}>
                  التسجيل باستخدام Google
                </Text>
              </Pressable>
              <Pressable
                style={[styles.appleSignupButton, styles.signupLayout]}
              >
                <Image
                  style={styles.iconsLayout}
                  contentFit="cover"
                  source={require("../assets/apple1.png")}
                />
                <Text style={[styles.apple, styles.appleClr]}>
                  التسجيل باستخدام Apple
                </Text>
              </Pressable>
              <Pressable
                style={[styles.emailSignupButton, styles.signupLayout1]}
              >
                <Image
                  style={styles.iconsLayout}
                  contentFit="cover"
                  source={require("../assets/buttonicons15.png")}
                />
                <Text style={[styles.apple, styles.appleClr]}>
                  التسجيل باستخدام الإيميل
                </Text>
              </Pressable>
            </View>
            <View style={[styles.orLine, styles.iconFlexBox]}>
              <View style={[styles.orLineChild, styles.lineBorder]} />
              <Text
                style={[styles.text4, styles.text4SpaceBlock]}
                numberOfLines={1}
              >
                أو التسجيل كـمدرب
              </Text>
              <View style={[styles.orLineItem, styles.text4SpaceBlock]} />
            </View>
            <View style={[styles.buttonsContainer, styles.iconFlexBox]}>
              <Pressable style={[styles.trainerSignup, styles.signupLayout]}>
                <Image
                  style={[styles.buttonIcons1, styles.iconsLayout]}
                  contentFit="cover"
                  source={require("../assets/buttonicons14.png")}
                />
                <Text style={[styles.text5, styles.textTypo2]}>
                  التسجيل كمدرب
                </Text>
              </Pressable>
              <Text style={[styles.text6, styles.textTypo1]}>
                <Text
                  style={[styles.text7, styles.textTypo]}
                >{` لديك حساب؟ `}</Text>
                <Text style={styles.text8}>تسجيل الدخول</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.termsNServices}>
          <Text style={[styles.text9, styles.textTypo]} numberOfLines={1}>
            <Text style={styles.text10}>{`في الاستمرار, أنت توافق على `}</Text>
            <Text style={styles.text11}>شروط الخدمه</Text>
            <Text style={styles.text10}>{` و `}</Text>
            <Text style={styles.text11}>قوانين الخصوصيه</Text>
            <Text style={styles.text10}>.</Text>
          </Text>
        </View>
      </SafeAreaView>
      <StatusBar style={styles.mainContainerPosition} barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewFlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  textTypo3: {
    fontFamily: FontFamily.bodySmReg,
    textAlign: "center",
    alignSelf: "stretch",
  },
  signupLayout1: {
    minWidth: 320,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    height: StyleVariable.spacing7,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: StyleVariable.radiusMd,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  appleTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bodySmReg,
    textAlign: "center",
  },
  signupLayout: {
    borderWidth: 1,
    minWidth: 320,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    height: StyleVariable.spacing7,
    borderStyle: "solid",
    borderRadius: StyleVariable.radiusMd,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  appleClr: {
    color: Color.colorBaseWhite,
    marginLeft: 4,
    flex: 1,
  },
  lineBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  text4SpaceBlock: {
    marginLeft: 8,
    flex: 1,
  },
  iconsLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  textTypo2: {
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
    textAlign: "center",
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
  mainContainerPosition: {
    top: 0,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_9xl,
    color: Color.whitesmoke_200,
  },
  text2: {
    color: Color.whitesmoke_100,
    marginTop: 10,
    fontSize: FontSize.size_base,
  },
  introText: {
    paddingBottom: 41,
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  google: {
    color: Color.colorUtilityBgColor,
    marginLeft: 4,
    flex: 1,
  },
  googleSignupButton: {
    backgroundColor: Color.colorBaseWhite,
    borderColor: Color.secondaryContainer,
  },
  apple: {
    lineHeight: 12,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.bodySmReg,
    textAlign: "center",
  },
  appleSignupButton: {
    borderColor: Color.colorBaseWhite,
    marginTop: 16,
    backgroundColor: Color.colorUtilityBgColor,
  },
  emailSignupButton: {
    backgroundColor: Color.colorPrimary,
    borderColor: Color.colorBrandPrimaryLight,
    marginTop: 16,
  },
  buttonsContainer: {
    marginTop: 16,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  orLineChild: {
    flex: 1,
  },
  text4: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  orLineItem: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  orLine: {
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: StyleVariable.spacingScreenMarginSm,
    marginTop: 16,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  buttonIcons1: {
    display: "none",
  },
  text5: {
    fontSize: FontSize.labelsLgBold_size,
    color: Color.colorBaseWhite,
    marginLeft: 4,
    flex: 1,
  },
  trainerSignup: {
    backgroundColor: Color.secondaryContainer,
    borderColor: Color.colorBrandSecondary,
  },
  text7: {
    color: Color.whitesmoke_200,
  },
  text8: {
    color: Color.colorPrimary,
    fontFamily: FontFamily.tajawalMedium,
    fontWeight: "500",
  },
  text6: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  registrationForm: {
    paddingVertical: 0,
  },
  registrationFormContainer: {
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  text10: {
    color: Color.whitesmoke_200,
  },
  text11: {
    color: Color.colorWhitesmoke_100,
  },
  text9: {
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
    overflow: "hidden",
    alignSelf: "stretch",
  },
  mainContainer: {
    right: 0,
    bottom: 0,
    left: 0,
    paddingTop: Padding.p_31xl,
    top: 0,
    position: "absolute",
  },
  signupScreen: {
    width: "100%",
    height: 844,
    flex: 1,
    backgroundColor: Color.colorUtilityBgColor,
  },
});

export default SignupScreen;
