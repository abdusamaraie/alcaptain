import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar } from "react-native-paper";
import { Image } from "expo-image";
import { Slider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Color,
  FontFamily,
  StyleVariable,
  FontSize,
  Border,
} from "../GlobalStyles";

const GoalSelectionScreen = () => {
  const [slider1Value, setSlider1Value] = useState(10);
  const navigation = useNavigation();

  return (
    <View style={styles.goalSelectionScreen}>
      <SafeAreaView
        style={[styles.mainContainer, styles.mainContainerPosition]}
      >
        <View style={[styles.topNav, styles.navFlexBox]}>
          <View style={[styles.basicProgressBar, styles.titleFlexBox]}>
            <ProgressBar progress={0.4} color="#23b5d3" />
          </View>
          <Image
            style={[styles.backArrowIcons, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/backarrowicons.png")}
          />
        </View>
        <View style={[styles.title, styles.navFlexBox]}>
          <Text style={[styles.text, styles.textFlexBox]} numberOfLines={1}>
            حدد هدفك النهائي
          </Text>
        </View>
        <View style={styles.container}>
          <View style={[styles.goalSelectionCards, styles.navFlexBox]}>
            <Pressable style={styles.build}>
              <View style={styles.content}>
                <Text style={[styles.text1, styles.textTypo]}>بناء عضلات</Text>
                <Text style={[styles.text2, styles.textTypo]}>
                  هدفي الوصول لجسم رياضي وزيادة الكتله العضليه
                </Text>
              </View>
              <Image
                style={styles.bicepsIcon}
                contentFit="cover"
                source={require("../assets/biceps1.png")}
              />
              <Image
                style={styles.checkMarkIcon}
                contentFit="cover"
                source={require("../assets/check-mark5.png")}
              />
            </Pressable>
            <Pressable style={[styles.maintain, styles.loseFlexBox]}>
              <View style={styles.content}>
                <Text style={[styles.text1, styles.textTypo]}>حفظ الوزن</Text>
                <Text style={[styles.text2, styles.textTypo]}>
                  احب وزني الحالي وأريد الحفاظ عليه
                </Text>
              </View>
              <Image
                style={styles.bicepsIcon}
                contentFit="cover"
                source={require("../assets/weight1.png")}
              />
              <Image
                style={styles.checkMarkIcon}
                contentFit="cover"
                source={require("../assets/check-mark1.png")}
              />
            </Pressable>
            <Pressable style={[styles.lose, styles.loseFlexBox]}>
              <View style={styles.content}>
                <Text style={[styles.text1, styles.textTypo]}>خساره وزن</Text>
                <Text style={[styles.text2, styles.textTypo]}>
                  وزني زائد واريد حرق الدهون والتنشيف
                </Text>
              </View>
              <Image
                style={styles.bicepsIcon}
                contentFit="cover"
                source={require("../assets/weight-scale1.png")}
              />
              <Image
                style={styles.checkMarkIcon}
                contentFit="cover"
                source={require("../assets/check-mark5.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.targetWeight, styles.navFlexBox]}>
            <Text style={[styles.text7, styles.textFlexBox]}>
              ما الوزن الذي تريد الوصول اليه؟
            </Text>
            <View style={[styles.slider, styles.sliderFlexBox]}>
              <Image
                style={[styles.minusIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/minus1.png")}
              />
              <Slider
                style={styles.slider1}
                minimumValue={1}
                maximumValue={100}
                orientation="horizontal"
                step="1"
                value={slider1Value}
                onValueChange={setSlider1Value}
                thumbStyle={styles.slider1ts}
                thumbTintColor="#2ec7e5"
                minimumTrackTintColor="#3f3f3f"
                maximumTrackTintColor="#b3b3b3"
              />
              <Image
                style={[styles.plusIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/plus1.png")}
              />
            </View>
            <View style={[styles.weightLabel, styles.sliderFlexBox]}>
              <Text style={styles.kg} numberOfLines={1}>
                70 kg
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.buttomNav, styles.navFlexBox]}>
          <TouchableHighlight
            style={[styles.nextButton, styles.titleFlexBox]}
            underlayColor="#000"
            onPress={() => navigation.navigate("DietSelectionScreen")}
          >
            <>
              <Image
                style={[styles.buttonIcons, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/buttonicons8.png")}
              />
              <Text style={styles.text8}>التالي</Text>
            </>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
      <View style={[styles.statusBarDark, styles.mainContainerPosition]}>
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
  slider1ts: {
    height: 25,
    width: 25,
  },
  mainContainerPosition: {
    top: 0,
    position: "absolute",
  },
  navFlexBox: {
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  titleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconLayout: {
    height: 24,
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
  },
  textTypo: {
    fontFamily: FontFamily.bodySmReg,
    textAlign: "right",
    alignSelf: "stretch",
  },
  loseFlexBox: {
    marginTop: 10,
    minHeight: 80,
    minWidth: 300,
    padding: StyleVariable.spacing2,
    borderStyle: "solid",
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.radiusSm,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  sliderFlexBox: {
    marginTop: 12,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  basicProgressBar: {
    padding: StyleVariable.spacingScreenMarginXs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  backArrowIcons: {
    marginLeft: 16,
    width: 24,
    height: 24,
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
    fontSize: FontSize.headingsTitleMdReg_size,
    flex: 1,
  },
  title: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  text1: {
    color: Color.colorBaseWhite,
    fontSize: FontSize.headingsTitleMdReg_size,
  },
  text2: {
    fontSize: FontSize.labelsSmBold_size,
    color: Color.colorBrandSecondaryLight,
  },
  content: {
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  bicepsIcon: {
    width: StyleVariable.spacing7,
    height: StyleVariable.spacing7,
    zIndex: 1,
    marginLeft: 8,
    overflow: "hidden",
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
  build: {
    minHeight: 80,
    minWidth: 300,
    padding: StyleVariable.spacing2,
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.radiusSm,
    borderWidth: 1,
    borderColor: Color.colorBrandSecondaryLight,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  maintain: {
    borderColor: Color.colorBlueBlue800,
    borderWidth: 3,
  },
  lose: {
    borderWidth: 1,
    borderColor: Color.colorBrandSecondaryLight,
    marginTop: 10,
  },
  goalSelectionCards: {
    paddingVertical: Padding.p_lg,
    justifyContent: "center",
    overflow: "hidden",
  },
  text7: {
    fontWeight: "500",
    fontFamily: FontFamily.tajawalMedium,
    fontSize: FontSize.labelsLgBold_size,
    alignSelf: "stretch",
  },
  minusIcon: {
    width: 24,
    height: 24,
  },
  slider1: {
    marginLeft: 6,
    alignSelf: "stretch",
    flex: 1,
  },
  plusIcon: {
    marginLeft: 6,
    width: 24,
    height: 24,
  },
  slider: {
    alignSelf: "stretch",
  },
  kg: {
    fontWeight: "700",
    fontFamily: FontFamily.tahoma,
    opacity: 0.7,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.headingsTitleMdReg_size,
  },
  weightLabel: {
    borderRadius: Border.br_mini,
    borderColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_base,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 12,
    paddingHorizontal: Padding.p_xl,
    overflow: "hidden",
  },
  targetWeight: {
    paddingVertical: 0,
    marginTop: 16,
    justifyContent: "center",
    overflow: "hidden",
  },
  container: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  buttonIcons: {
    maxWidth: "100%",
    display: "none",
    flex: 1,
  },
  text8: {
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    marginLeft: 4,
    textAlign: "center",
    fontSize: FontSize.labelsLgBold_size,
    color: Color.colorBaseWhite,
    flex: 1,
  },
  nextButton: {
    borderRadius: StyleVariable.radiusMd,
    backgroundColor: Color.colorPrimary,
    height: 61,
    paddingHorizontal: StyleVariable.spacing7,
    paddingVertical: StyleVariable.spacing2,
    minWidth: 320,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  buttomNav: {
    justifyContent: "flex-end",
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_51xl,
  },
  mainContainer: {
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "space-between",
    paddingTop: Padding.p_31xl,
    alignItems: "center",
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
    right: 8,
    left: 7,
    height: 56,
    overflow: "hidden",
  },
  goalSelectionScreen: {
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default GoalSelectionScreen;
