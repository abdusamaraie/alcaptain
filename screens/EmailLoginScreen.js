import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  FontFamily,
  FontSize,
  Color,
  Border,
  StyleVariable,
} from "../GlobalStyles";

const EmailLoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emailLoginScreen}>
      <SafeAreaView
        style={[styles.mainContainer, styles.mainContainerPosition]}
      >
        <View style={[styles.signinFormContainer, styles.viewFlexBox]}>
          <View style={styles.title1}>
            <Text style={[styles.text1, styles.textTypo4]}>الدخول للحساب</Text>
          </View>
          <View style={[styles.emailTextfieldOutlined, styles.textSpaceBlock]}>
            <RNPTextInput
              style={styles.outlinedLabeled}
              label="ايميل"
              placeholder="ادخل الإيميل"
              mode="outlined"
              right={
                <RNPTextInput.Icon
                  style={{ marginTop: "50%" }}
                  name="email-outline"
                />
              }
              outlineColor="#fff"
              activeOutlineColor="#f2f2f2"
              theme={{
                fonts: { regular: { fontFamily: "Tajawal" } },
                colors: { text: "#f5f5f5" },
              }}
            />
            <Image
              style={[styles.buttonIcons, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/buttonicons12.png")}
            />
          </View>
          <RNPTextInput
            style={[styles.passowrdTextfieldOutlined, styles.textSpaceBlock]}
            label="الباسوورد"
            placeholder="ادخل كلمه السر"
            mode="outlined"
          />
          <Text style={[styles.text2, styles.textTypo2]}>
            <Text style={styles.text3}>{`هل نسيت كلمه السر؟ `}</Text>
            <Text style={styles.text4}>إعاده كلمه السر</Text>
          </Text>
          <TouchableHighlight
            style={styles.signinButton}
            underlayColor="rgba(255, 85, 85, 0.6)"
            onPress={() => navigation.navigate("GenderSelectionScreen")}
          >
            <>
              <Image
                style={[styles.buttonIcons1, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/buttonicons13.png")}
              />
              <Text style={[styles.text5, styles.textClr]}>سجل الدخول</Text>
            </>
          </TouchableHighlight>
          <View style={[styles.orLine, styles.textSpaceBlock]}>
            <View style={[styles.orLineChild, styles.lineBorder]} />
            <Text style={[styles.text6, styles.text6SpaceBlock]}>انا مدرب</Text>
            <View style={[styles.orLineItem, styles.text6SpaceBlock]} />
          </View>
          <View style={styles.trainerSigninButton}>
            <Image
              style={[styles.buttonIcons1, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/buttonicons14.png")}
            />
            <Text style={[styles.text7, styles.textTypo1]}>الدخول كمدرب</Text>
          </View>
          <Text style={[styles.text8, styles.textTypo]}>
            <Text
              style={[styles.text9, styles.textTypo2]}
            >{`ليس لديك حساب؟ `}</Text>
            <Text style={[styles.text10, styles.textTypo3]}>تسجيل جديد</Text>
          </Text>
        </View>
        <View style={styles.buttomNav}>
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
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  titleFlexBox: {
    marginLeft: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo3: {
    fontFamily: FontFamily.tajawalMedium,
    fontWeight: "500",
  },
  textTypo4: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    alignSelf: "stretch",
  },
  textSpaceBlock: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  iconsLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  textTypo2: {
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
  },
  textClr: {
    color: Color.colorBaseWhite,
    fontSize: FontSize.labelsLgBold_size,
    marginLeft: 4,
    flex: 1,
  },
  lineBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  text6SpaceBlock: {
    marginLeft: 14,
    flex: 1,
  },
  textTypo1: {
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
    textAlign: "center",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    textAlign: "center",
  },
  text1: {
    fontFamily: FontFamily.bodySmReg,
    color: Color.whitesmoke_100,
    textAlign: "center",
  },
  title1: {
    paddingHorizontal: 0,
    paddingVertical: 17,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  outlinedLabeled: {
    borderRadius: Border.br_mini,
    zIndex: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  buttonIcons: {
    marginTop: -10,
    top: "50%",
    left: 15,
    zIndex: 1,
    position: "absolute",
    width: 24,
  },
  emailTextfieldOutlined: {
    maxHeight: 48,
    height: 48,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  passowrdTextfieldOutlined: {
    maxHeight: 48,
    height: 48,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    color: Color.whitesmoke_100,
  },
  text4: {
    color: Color.tomato_100,
    textDecoration: "underline",
  },
  text2: {
    fontSize: FontSize.labelsSmBold_size,
    textAlign: "right",
    marginTop: 14,
    alignSelf: "stretch",
  },
  buttonIcons1: {
    display: "none",
  },
  text5: {
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    textAlign: "center",
  },
  signinButton: {
    backgroundColor: Color.colorPrimary,
    minWidth: 320,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    borderRadius: StyleVariable.radiusMd,
    marginTop: 14,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  orLineChild: {
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
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  orLine: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  text7: {
    color: Color.colorBaseWhite,
    fontSize: FontSize.labelsLgBold_size,
    marginLeft: 4,
    flex: 1,
  },
  trainerSigninButton: {
    backgroundColor: Color.secondaryContainer,
    borderColor: Color.colorBrandSecondary,
    borderWidth: 1,
    borderStyle: "solid",
    minWidth: 320,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    borderRadius: StyleVariable.radiusMd,
    marginTop: 14,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  text9: {
    color: Color.whitesmoke_200,
  },
  text10: {
    color: Color.tomato_100,
  },
  text8: {
    height: 27,
    marginTop: 14,
    alignSelf: "stretch",
  },
  signinFormContainer: {
    paddingVertical: 0,
    flex: 1,
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
  buttomNav: {
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  emailLoginScreen: {
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    flex: 1,
  },
});

export default EmailLoginScreen;
