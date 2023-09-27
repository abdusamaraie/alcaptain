import * as React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  StyleVariable,
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const HowDidYouHearAboutUsScre = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.howDidYouHearAboutUsScre}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={[styles.topNav, styles.titleFlexBox]}>
          <View style={styles.basicProgressBar}>
            <ProgressBar progress={0.4} color="#2ec7e5" />
          </View>
          <Image
            style={[styles.backArrowIcons, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/backarrowicons.png")}
          />
        </View>
        <View style={[styles.title, styles.titleFlexBox]}>
          <Text style={styles.text} numberOfLines={1}>
            كيف سمعت بنا؟
          </Text>
        </View>
        <View style={[styles.container, styles.titleFlexBox]}>
          <Pressable style={[styles.facebook, styles.facebookFlexBox]}>
            <Text style={[styles.facebook1, styles.text3FlexBox]}>
              Facebook
            </Text>
          </Pressable>
          <Pressable style={[styles.google, styles.xFlexBox]}>
            <Text style={[styles.facebook1, styles.text3FlexBox]}>Google</Text>
          </Pressable>
          <Pressable style={[styles.x, styles.xFlexBox]}>
            <Text style={[styles.facebook1, styles.text3FlexBox]}>X</Text>
          </Pressable>
          <Pressable style={styles.whatsappFlexBox}>
            <Text style={[styles.facebook1, styles.text3FlexBox]}>
              Instagram
            </Text>
          </Pressable>
          <Pressable style={[styles.ticktok, styles.xFlexBox]}>
            <Text style={[styles.facebook1, styles.text3FlexBox]}>TikTok</Text>
          </Pressable>
          <Pressable style={[styles.trainer, styles.xFlexBox]}>
            <Text style={[styles.facebook1, styles.text3FlexBox]}>مدرب</Text>
          </Pressable>
          <Pressable style={[styles.others, styles.xFlexBox]}>
            <Text style={[styles.facebook1, styles.text3FlexBox]}>شخص أخر</Text>
          </Pressable>
          <Pressable style={[styles.whatsapp, styles.whatsappFlexBox]}>
            <Text style={[styles.facebook1, styles.text3FlexBox]}>
              WhatsApp
            </Text>
          </Pressable>
        </View>
        <View style={styles.buttomNav}>
          <Pressable
            style={[styles.nextButton, styles.facebookFlexBox]}
            onPress={() => navigation.navigate("SignupScreen")}
          >
            <Image
              style={[styles.buttonIcons, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/buttonicons6.png")}
            />
            <Text style={[styles.text3, styles.text3FlexBox]}>التالي</Text>
          </Pressable>
        </View>
      </SafeAreaView>
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
  titleFlexBox: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    alignItems: "center",
  },
  iconsLayout: {
    height: 24,
    overflow: "hidden",
  },
  facebookFlexBox: {
    paddingVertical: StyleVariable.spacing2,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  text3FlexBox: {
    textAlign: "center",
    color: Color.colorBaseWhite,
    flex: 1,
  },
  xFlexBox: {
    paddingHorizontal: StyleVariable.spacing3,
    paddingVertical: StyleVariable.spacing2,
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.radiusSm,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  whatsappFlexBox: {
    width: 127,
    paddingHorizontal: StyleVariable.spacing3,
    paddingVertical: StyleVariable.spacing2,
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.radiusSm,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.headingsTitleMdReg_size,
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
    flex: 1,
  },
  title: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  facebook1: {
    fontSize: FontSize.size_base,
    lineHeight: 12,
    fontFamily: FontFamily.bodySmReg,
  },
  facebook: {
    paddingHorizontal: StyleVariable.spacing1,
    minWidth: 100,
    maxWidth: 130,
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.radiusSm,
    paddingVertical: StyleVariable.spacing2,
    flex: 1,
  },
  google: {
    width: 102,
  },
  x: {
    width: 59,
  },
  ticktok: {
    width: 97,
  },
  trainer: {
    width: 90,
  },
  others: {
    width: 129,
  },
  whatsapp: {
    borderStyle: "solid",
    borderColor: Color.colorBlueBlue800,
    borderWidth: 2,
  },
  container: {
    alignSelf: "center",
    flexWrap: "wrap",
    paddingVertical: Padding.p_base,
    minHeight: 250,
    justifyContent: "space-between",
  },
  buttonIcons: {
    maxWidth: "100%",
    display: "none",
    flex: 1,
  },
  text3: {
    fontSize: FontSize.labelsLgBold_size,
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    marginLeft: 4,
  },
  nextButton: {
    borderRadius: StyleVariable.radiusMd,
    backgroundColor: Color.colorPrimary,
    paddingHorizontal: StyleVariable.spacing7,
    minWidth: 320,
    alignSelf: "stretch",
  },
  buttomNav: {
    height: 244,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_lg,
    paddingTop: 134,
    paddingBottom: Padding.p_51xl,
    alignSelf: "stretch",
    alignItems: "center",
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
    top: 0,
    right: 11,
    left: 4,
    height: 56,
    position: "absolute",
    overflow: "hidden",
  },
  howDidYouHearAboutUsScre: {
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default HowDidYouHearAboutUsScre;
