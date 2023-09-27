import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
} from "../GlobalStyles";

const EmailSignupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emailSignupScreen}>
      <SafeAreaView
        style={[styles.mainContainer, styles.mainContainerPosition]}
      >
        <View style={[styles.signupForm, styles.viewFlexBox]}>
          <View style={styles.title1}>
            <Text style={[styles.text1, styles.textTypo4]} numberOfLines={1}>
              التسجيل عن طريق الإيميل
            </Text>
          </View>
          <RNPTextInput
            style={[styles.fullNameTextfield, styles.textfieldLayout1]}
            mode="outlined"
          />
          <TextInput
            style={[styles.gymLocationTextfield, styles.textfieldLayout]}
            keyboardType="email-address"
          />
          <RNPTextInput
            style={[styles.gymLocationTextfield, styles.textfieldLayout]}
            label="أيميل"
            placeholder="أدخل الإيميل"
            mode="outlined"
          />
          <RNPTextInput
            style={[styles.passwordTextfield, styles.textfieldLayout]}
            label="باسوورد"
            placeholder="ادخل كلمه السر"
            disabled="false"
            error="false"
            mode="outlined"
            right={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="eye-off-outline"
              />
            }
          />
          <RNPTextInput
            style={[styles.phoneTextfield, styles.textfieldLayout1]}
            label="الموبايل"
            placeholder="ادخل رقم الهاتف"
            mode="outlined"
            placeholderTextColor="#f5f5f5"
            theme={{
              fonts: {
                regular: { fontFamily: "Tajawal", fontWeight: "Light" },
              },
              colors: { text: "#f5f5f5" },
            }}
          />
          <Text style={styles.text2}>
            <Text
              style={[styles.text3, styles.textTypo3]}
            >{`هل نسيت كلمه السر؟ `}</Text>
            <Text style={styles.text4}>إعاده كلمه السر</Text>
          </Text>
          <Pressable
            style={styles.signupButton}
            onPress={() => navigation.navigate("GenderSelectionScreen")}
          >
            <Image
              style={[styles.buttonIcons, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/buttonicons.png")}
            />
            <Text style={[styles.text5, styles.textTypo1]}>سجل الان</Text>
          </Pressable>
          <View style={styles.orLine}>
            <View style={[styles.orLineChild, styles.lineBorder]} />
            <Text style={[styles.text6, styles.text6SpaceBlock]}>انا مدرب</Text>
            <View style={[styles.orLineItem, styles.text6SpaceBlock]} />
          </View>
          <Pressable style={styles.trainerSignupButton}>
            <Image
              style={styles.iconsLayout}
              contentFit="cover"
              source={require("../assets/buttonicons11.png")}
            />
            <Text style={[styles.text7, styles.textTypo1]}>سجل كمدرب</Text>
          </Pressable>
          <Text style={[styles.text8, styles.textTypo]}>
            <Text
              style={[styles.text9, styles.textTypo3]}
            >{` لديك حساب؟ `}</Text>
            <Text style={[styles.text10, styles.textTypo2]}>تسجيل الدخول</Text>
          </Text>
        </View>
        <View style={styles.termsNServices}>
          <Text style={[styles.text11, styles.textTypo]}>
            <Text style={styles.text12}>{`في الاستمرار, أنت توافق على `}</Text>
            <Text style={styles.text13}>شروط الخدمه</Text>
            <Text style={styles.text12}>{` و `}</Text>
            <Text style={styles.text13}>قوانين الخصوصيه</Text>
            <Text style={styles.text12}>.</Text>
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
  textTypo4: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    flex: 1,
  },
  textfieldLayout1: {
    maxHeight: 48,
    marginTop: 14,
    alignSelf: "stretch",
  },
  textfieldLayout: {
    height: 48,
    marginTop: 14,
    maxHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo3: {
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
  },
  iconsLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  textTypo1: {
    fontSize: FontSize.labelsLgBold_size,
    color: Color.colorBaseWhite,
    textAlign: "center",
    marginLeft: 4,
    flex: 1,
  },
  lineBorder: {
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  text6SpaceBlock: {
    marginLeft: 14,
    flex: 1,
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    textAlign: "center",
  },
  textTypo2: {
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
  },
  text1: {
    fontFamily: FontFamily.bodySmReg,
    color: Color.whitesmoke_100,
    textAlign: "center",
  },
  title1: {
    paddingBottom: Padding.p_lg,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  fullNameTextfield: {
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  gymLocationTextfield: {
    alignSelf: "stretch",
  },
  passwordTextfield: {
    width: 350,
  },
  phoneTextfield: {
    marginTop: 14,
  },
  text3: {
    color: Color.whitesmoke_100,
  },
  text4: {
    color: Color.colorBaseWhite,
    textDecoration: "underline",
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
  },
  text2: {
    fontSize: FontSize.labelsSmBold_size,
    textAlign: "right",
    width: 353,
    marginTop: 14,
  },
  buttonIcons: {
    display: "none",
  },
  text5: {
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
  },
  signupButton: {
    backgroundColor: Color.colorPrimary,
    minWidth: 320,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    borderRadius: StyleVariable.radiusMd,
    marginTop: 14,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  orLineChild: {
    height: 1,
    flex: 1,
  },
  text6: {
    fontSize: FontSize.size_base,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
    textAlign: "center",
  },
  orLineItem: {
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  orLine: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: StyleVariable.spacingScreenMarginSm,
    marginTop: 14,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  text7: {
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
  },
  trainerSignupButton: {
    backgroundColor: Color.secondaryContainer,
    borderColor: Color.colorBrandSecondary,
    borderWidth: 1,
    height: StyleVariable.spacing7,
    borderStyle: "solid",
    minWidth: 320,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    borderRadius: StyleVariable.radiusMd,
    marginTop: 14,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  text9: {
    color: Color.whitesmoke_200,
  },
  text10: {
    color: Color.colorPrimary,
  },
  text8: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  signupForm: {
    height: 654,
    paddingVertical: 0,
  },
  text12: {
    color: Color.whitesmoke_200,
  },
  text13: {
    color: Color.colorWhitesmoke_100,
  },
  text11: {
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
    flex: 1,
  },
  termsNServices: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: Padding.p_xl,
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
  emailSignupScreen: {
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default EmailSignupScreen;
