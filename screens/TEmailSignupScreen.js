import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const TEmailSignupScreen = () => {
  return (
    <View style={styles.tEmailSignupScreen}>
      <View style={styles.statusBarDark}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons4.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={[styles.mainContainer, styles.navFlexBox]}>
        <View style={[styles.nav, styles.navFlexBox]}>
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require("../assets/image6.png")}
          />
          <Text style={styles.text}>تسجيل جديد</Text>
          <Image
            style={styles.backArrowIcon}
            contentFit="cover"
            source={require("../assets/backarrow.png")}
          />
        </View>
        <View style={[styles.title, styles.titleSpaceBlock]}>
          <Text style={[styles.text1, styles.textTypo3]}>
            التسجيل عن طريق الإيميل
          </Text>
        </View>
        <View style={[styles.signupForm, styles.buttonFlexBox]}>
          <View style={styles.textFlexBox1}>
            <Text style={[styles.text2, styles.textLayout]}>الاسم الكامل</Text>
            <View style={[styles.email, styles.buttonFlexBox]}>
              <Text style={[styles.text3, styles.textFlexBox]}>|</Text>
            </View>
          </View>
          <View style={[styles.textInput1, styles.textFlexBox1]}>
            <Text style={[styles.text2, styles.textLayout]}>الإيميل</Text>
            <View style={[styles.email, styles.buttonFlexBox]}>
              <Text style={[styles.text3, styles.textFlexBox]}>|</Text>
            </View>
          </View>
          <View style={[styles.textInput1, styles.textFlexBox1]}>
            <Text style={[styles.text6, styles.textTypo1]}>الباسورد</Text>
            <View style={[styles.email, styles.buttonFlexBox]}>
              <Image
                style={styles.iconsaxlineareyeslash}
                contentFit="cover"
                source={require("../assets/iconsaxlineareyeslash.png")}
              />
              <Text style={[styles.text7, styles.textFlexBox]}>
                ادخل كلمه السر
              </Text>
            </View>
          </View>
          <View style={[styles.textInput1, styles.textFlexBox1]}>
            <Text style={[styles.text6, styles.textTypo1]}>رقم الهاتف</Text>
            <View style={[styles.email, styles.buttonFlexBox]}>
              <View style={styles.numberCode}>
                <Image
                  style={styles.iraqFlagIcon}
                  contentFit="cover"
                  source={require("../assets/iraq-flag1.png")}
                />
                <Text style={[styles.text9, styles.textTypo2]}>+964</Text>
              </View>
              <Text style={[styles.text10, styles.textTypo2]}>
                ادخل رقم الهاتف
              </Text>
            </View>
            <Text style={[styles.text11, styles.textTypo1]}>
              <Text style={styles.text12}>{`هل نسيت كلمه السر؟ `}</Text>
              <Text style={styles.text13}>إعاده كلمه السر</Text>
            </Text>
          </View>
          <View style={[styles.signinButton, styles.buttonFlexBox]}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Image
                style={styles.iconsaxlineareyeslash}
                contentFit="cover"
                source={require("../assets/calendar.png")}
              />
              <Text style={[styles.text14, styles.textTypo3]}>سجل كـمدرب</Text>
            </View>
            <Text style={[styles.text15, styles.textTypo]}>
              <Text
                style={[styles.text16, styles.textTypo2]}
              >{` لديك حساب؟ `}</Text>
              <Text style={styles.text17}>تسجيل الدخول</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.buttomNav, styles.textFlexBox1]}>
          <Text style={[styles.text18, styles.textTypo]} numberOfLines={1}>
            <Text style={styles.text19}>{`في الاستمرار, أنت توافق على `}</Text>
            <Text style={styles.text20}>شروط الخدمه</Text>
            <Text style={styles.text19}>{` و `}</Text>
            <Text style={styles.text20}>قوانين الخصوصيه</Text>
            <Text style={styles.text19}>.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  titleSpaceBlock: {
    marginTop: 30,
    paddingHorizontal: Padding.p_lg,
  },
  textTypo3: {
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  textLayout: {
    height: 20,
    display: "flex",
    color: Color.whitesmoke_100,
    alignItems: "center",
  },
  textFlexBox: {
    display: "flex",
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
    textAlign: "right",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  textFlexBox1: {
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  textTypo1: {
    width: 353,
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
    fontSize: FontSize.labelsSmBold_size,
    textAlign: "right",
  },
  textTypo2: {
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    textAlign: "center",
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
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldBody,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    fontSize: FontSize.subheadlineBold_size,
    position: "absolute",
  },
  statusBarDark: {
    width: 375,
    height: 44,
  },
  image6Icon: {
    width: 15,
    height: 24,
  },
  text: {
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    textAlign: "right",
    color: Color.darkslategray,
    fontSize: FontSize.size_lg,
  },
  backArrowIcon: {
    width: 24,
    height: 24,
  },
  nav: {
    height: 28,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontFamily: FontFamily.bodySmReg,
    width: 369,
    color: Color.whitesmoke_100,
  },
  title: {
    paddingVertical: 33,
    alignSelf: "stretch",
    alignItems: "center",
  },
  text2: {
    width: 347,
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
    fontSize: FontSize.labelsSmBold_size,
    height: 20,
    textAlign: "right",
  },
  text3: {
    fontSize: FontSize.labelsLgBold_size,
    color: Color.tomato_100,
  },
  email: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_lg,
    marginTop: 7,
    flexDirection: "row",
    overflow: "hidden",
  },
  textInput1: {
    marginTop: 18,
  },
  text6: {
    height: 20,
    display: "flex",
    color: Color.whitesmoke_100,
    alignItems: "center",
  },
  iconsaxlineareyeslash: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text7: {
    marginLeft: 10,
    color: Color.whitesmoke_100,
    fontSize: FontSize.subheadlineBold_size,
  },
  iraqFlagIcon: {
    bottom: 4,
    left: 4,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  text9: {
    top: 8,
    right: 9,
    fontSize: FontSize.size_3xs,
    height: 10,
    color: Color.whitesmoke_100,
    width: 24,
    textAlign: "right",
    position: "absolute",
  },
  numberCode: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.dimgray,
    width: 55,
    height: 24,
  },
  text10: {
    fontSize: FontSize.size_base,
    marginLeft: 10,
    color: Color.whitesmoke_100,
    textAlign: "right",
    flex: 1,
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
  },
  text12: {
    color: Color.whitesmoke_100,
  },
  text13: {
    textDecoration: "underline",
    color: Color.tomato_100,
  },
  text11: {
    marginTop: 7,
  },
  text14: {
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
    color: Color.whitesmoke_200,
    marginLeft: 10,
  },
  button: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.tomato_100,
    height: 60,
    paddingHorizontal: Padding.p_62xl,
    paddingVertical: Padding.p_mini,
    flexDirection: "row",
    overflow: "hidden",
  },
  text16: {
    color: Color.whitesmoke_200,
  },
  text17: {
    fontWeight: "500",
    fontFamily: FontFamily.tajawalMedium,
    color: Color.tomato_100,
  },
  text15: {
    width: 354,
    height: 27,
    marginTop: 18,
  },
  signinButton: {
    marginTop: 18,
  },
  signupForm: {
    marginTop: 30,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
  },
  text19: {
    color: Color.whitesmoke_200,
  },
  text20: {
    color: Color.darkslategray,
  },
  text18: {
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
    flex: 1,
  },
  buttomNav: {
    paddingVertical: Padding.p_xl,
    marginTop: 30,
    paddingHorizontal: Padding.p_lg,
    flexDirection: "row",
    overflow: "hidden",
  },
  mainContainer: {
    height: 800,
  },
  tEmailSignupScreen: {
    backgroundColor: Color.labelColorLightPrimary,
    width: "100%",
    height: 844,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default TEmailSignupScreen;
