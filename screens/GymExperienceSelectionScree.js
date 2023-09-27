import * as React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { LinearProgress } from "@rneui/themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Color,
  FontSize,
  FontFamily,
  StyleVariable,
} from "../GlobalStyles";

const GymExperienceSelectionScree = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gymExperienceSelectionScree}>
      <View style={styles.mainContainer}>
        <View style={[styles.topNav, styles.navFlexBox]}>
          <LinearProgress style={styles.basicProgressBar} color="#2ec7e5" />
          <Image
            style={[styles.backArrowIcons, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/backarrowicons.png")}
          />
        </View>
        <View style={[styles.title, styles.navFlexBox]}>
          <Text style={styles.text}>ما هي خبرتك في رفع الاثقال؟</Text>
        </View>
        <View style={[styles.container, styles.navFlexBox]}>
          <View style={[styles.experinceCards, styles.nextButtonFlexBox]}>
            <Pressable style={styles.bigenner}>
              <Text style={styles.text1}>مبتدئ</Text>
              <Text style={[styles.text2, styles.textTypo]}>
                انا مبتدئ واريد التعلم من الصفر. أو انا خبرتي بسيطه وصارلي اقل
                من سنه أتدرب.
              </Text>
              <Image
                style={styles.checkMarkIcon}
                contentFit="cover"
                source={require("../assets/check-mark6.png")}
              />
            </Pressable>
            <Pressable style={[styles.intermediate, styles.proLayout]}>
              <Text style={styles.text1}>متوسط</Text>
              <Text
                style={[styles.text2, styles.textTypo]}
              >{`انا أتمرن ولاكن بشكل متقطع. خبرتي متوسطه وصارلي اكثر من سنه أتدرب. `}</Text>
              <Image
                style={styles.checkMarkIcon}
                contentFit="cover"
                source={require("../assets/check-mark3.png")}
              />
            </Pressable>
            <Pressable style={[styles.advance, styles.proLayout]}>
              <Text style={styles.text1}>متقدم</Text>
              <Text style={[styles.text2, styles.textTypo]}>
                انا جيد وصارلي اتمرن من فتره طويله. عندي عضلات ظاهره ولاكن اريد
                التحسين.
              </Text>
              <Image
                style={styles.checkMarkIcon}
                contentFit="cover"
                source={require("../assets/check-mark6.png")}
              />
            </Pressable>
            <Pressable style={[styles.pro, styles.proLayout]}>
              <Text style={styles.text1}>محترف</Text>
              <Text
                style={[styles.text8, styles.textTypo]}
              >{`انا بطل محترف وعندي عضلات بارزه. أريد ان اتابع تماريني اليوميه `}</Text>
              <Image
                style={styles.checkMarkIcon}
                contentFit="cover"
                source={require("../assets/check-mark6.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.buttomNav, styles.navFlexBox]}>
          <Pressable
            style={[styles.nextButton, styles.nextButtonFlexBox]}
            onPress={() => navigation.navigate("WorkoutTimeSelectionScreen")}
          >
            <Image
              style={[styles.buttonIcons, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/buttonicons10.png")}
            />
            <Text style={styles.text9}>التالي</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.statusBarDark}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons2.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navFlexBox: {
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconsLayout: {
    height: 24,
    overflow: "hidden",
  },
  nextButtonFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    zIndex: 1,
    color: Color.colorBrandSecondaryLight,
    fontSize: FontSize.labelsSmBold_size,
    fontFamily: FontFamily.bodySmReg,
    textAlign: "right",
    alignSelf: "stretch",
  },
  proLayout: {
    marginTop: 8,
    minHeight: 80,
    minWidth: 350,
    padding: StyleVariable.radiusMd,
    borderStyle: "solid",
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.radiusSm,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  basicProgressBar: {
    padding: StyleVariable.spacingScreenMarginXs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  backArrowIcons: {
    width: 24,
    marginLeft: 16,
  },
  topNav: {
    paddingVertical: StyleVariable.spacingScreenMarginSm,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  text: {
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    textAlign: "right",
    fontSize: FontSize.headingsTitleMdReg_size,
    color: Color.labelColorDarkPrimary,
    flex: 1,
  },
  title: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    zIndex: 0,
    color: Color.colorBaseWhite,
    fontFamily: FontFamily.bodySmReg,
    textAlign: "right",
    fontSize: FontSize.headingsTitleMdReg_size,
    alignSelf: "stretch",
  },
  text2: {
    marginTop: 4,
  },
  checkMarkIcon: {
    top: 8,
    left: 8,
    width: 16,
    height: 16,
    zIndex: 2,
    position: "absolute",
    overflow: "hidden",
  },
  bigenner: {
    minHeight: 80,
    minWidth: 350,
    padding: StyleVariable.radiusMd,
    borderStyle: "solid",
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.radiusSm,
    borderWidth: 1,
    borderColor: Color.colorBrandSecondaryLight,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  intermediate: {
    borderColor: Color.colorBlueBlue800,
    borderWidth: 3,
    alignItems: "flex-end",
    marginTop: 8,
    justifyContent: "center",
  },
  advance: {
    borderWidth: 1,
    borderColor: Color.colorBrandSecondaryLight,
    alignItems: "center",
  },
  text8: {
    marginTop: 5,
  },
  pro: {
    alignItems: "flex-end",
    marginTop: 8,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorBrandSecondaryLight,
  },
  experinceCards: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
  },
  container: {
    paddingVertical: 0,
    justifyContent: "space-between",
    overflow: "hidden",
    flex: 1,
  },
  buttonIcons: {
    maxWidth: "100%",
    display: "none",
    flex: 1,
  },
  text9: {
    fontSize: FontSize.labelsLgBold_size,
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    textAlign: "center",
    marginLeft: 4,
    color: Color.colorBaseWhite,
    flex: 1,
  },
  nextButton: {
    borderRadius: StyleVariable.radiusMd,
    backgroundColor: Color.colorPrimary,
    paddingHorizontal: StyleVariable.spacing7,
    paddingVertical: StyleVariable.spacing2,
    minWidth: 320,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  buttomNav: {
    justifyContent: "flex-end",
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_51xl,
  },
  mainContainer: {
    top: 1,
    right: 0,
    bottom: 0,
    left: 0,
    paddingTop: Padding.p_31xl,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
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
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  statusBarDark: {
    top: -1,
    right: 8,
    left: 7,
    height: 56,
    position: "absolute",
    overflow: "hidden",
  },
  gymExperienceSelectionScree: {
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default GymExperienceSelectionScree;
