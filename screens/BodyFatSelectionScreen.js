import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { Slider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  FontSize,
  Color,
  Border,
  FontFamily,
  StyleVariable,
} from "../GlobalStyles";

const BodyFatSelectionScreen = () => {
  const [slider1Value, setSlider1Value] = useState(9);
  const navigation = useNavigation();

  return (
    <View style={styles.bodyfatSelectionScreen}>
      <View style={[styles.mainContainer, styles.mainContainerPosition]}>
        <View style={[styles.title, styles.titleSpaceBlock]}>
          <Text style={[styles.text, styles.textTypo]} numberOfLines={2}>
            كم نسبه الدهون في جسمك تقريبا؟
          </Text>
        </View>
        <View style={[styles.container, styles.titleSpaceBlock]}>
          <ScrollView
            style={styles.bodyFatPercent}
            horizontal={true}
            indicatorStyle="black"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={true}
            pagingEnabled={false}
            contentContainerStyle={styles.bodyFatPercentScrollViewContent}
          >
            <View style={styles.percentLayout}>
              <Image
                style={[styles.a3Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/a31.png")}
              />
            </View>
            <View style={[styles.percent1, styles.percentLayout]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/a21.png")}
              />
            </View>
            <View style={[styles.percent1, styles.percentLayout]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/a11.png")}
              />
            </View>
            <View style={[styles.percent1, styles.percentLayout]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/a41.png")}
              />
            </View>
            <View style={[styles.percent1, styles.percentLayout]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/a51.png")}
              />
            </View>
            <View style={[styles.percent1, styles.percentLayout]}>
              <Image
                style={[styles.a61Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/a6-11.png")}
              />
            </View>
            <View style={[styles.percent1, styles.percentLayout]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/a71.png")}
              />
            </View>
            <View style={[styles.percent1, styles.percentLayout]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/a91.png")}
              />
            </View>
          </ScrollView>
          <View style={[styles.slider, styles.sliderFlexBox]}>
            <Image
              style={styles.iconsLayout}
              contentFit="cover"
              source={require("../assets/minus2.png")}
            />
            <Slider
              style={[styles.slider1, styles.slider1SpaceBlock]}
              minimumValue={7}
              maximumValue={45}
              orientation="horizontal"
              step="1"
              value={slider1Value}
              onValueChange={setSlider1Value}
              thumbStyle={styles.slider1ts}
              thumbTintColor="#2ec7e5"
              minimumTrackTintColor="#b1f0fc"
              maximumTrackTintColor="#3f3f3f"
            />
            <Image
              style={[styles.plusIcon, styles.slider1SpaceBlock]}
              contentFit="cover"
              source={require("../assets/plus2.png")}
            />
          </View>
          <View style={[styles.percentText, styles.sliderFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]} numberOfLines={1}>
              9%
            </Text>
          </View>
        </View>
        <View style={[styles.buttomNav, styles.navFlexBox]}>
          <TouchableHighlight
            style={[styles.nextButton, styles.nextButtonLayout]}
            underlayColor="rgba(255, 85, 85, 0.6)"
            onPress={() => navigation.navigate("GenderSelectionScreen")}
          >
            <>
              <Image
                style={[styles.buttonIcons, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/buttonicons.png")}
              />
              <Text style={styles.text2}>التالي</Text>
            </>
          </TouchableHighlight>
        </View>
      </View>
      <View style={[styles.statusBarDark, styles.nextButtonLayout]}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons3.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyFatPercentScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  slider1ts: {
    height: 24,
    width: 24,
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
  topNavFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
    flexDirection: "row",
  },
  basicLayout: {
    height: 4,
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
  iconsLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  titleSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.headingsTitleMdReg_size,
    color: Color.labelColorDarkPrimary,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  percentLayout: {
    height: 96,
    width: 104,
    borderWidth: 2,
    borderColor: Color.colorBrandPrimaryLight,
    backgroundColor: Color.secondaryContainer,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  sliderFlexBox: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  slider1SpaceBlock: {
    marginLeft: 6,
    height: 24,
  },
  nextButtonLayout: {
    height: 56,
    overflow: "hidden",
  },
  text: {
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
    flex: 1,
  },
  title: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  a3Icon: {
    borderRadius: Border.br_mini,
  },
  percent1: {
    marginLeft: 14,
  },
  a61Icon: {
    borderRadius: Border.br_5xs,
    maxHeight: "100%",
  },
  bodyFatPercent: {
    alignSelf: "stretch",
    width: "100%",
  },
  slider1: {
    flex: 1,
  },
  plusIcon: {
    width: 24,
    marginLeft: 6,
    overflow: "hidden",
  },
  slider: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text1: {
    fontWeight: "700",
    fontFamily: FontFamily.tahoma,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
  },
  percentText: {
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 2,
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    marginTop: 16,
    overflow: "hidden",
  },
  container: {
    height: 315,
    justifyContent: "center",
  },
  buttonIcons: {
    display: "none",
  },
  text2: {
    fontSize: FontSize.labelsLgBold_size,
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    color: Color.colorBaseWhite,
    marginLeft: 4,
    textAlign: "center",
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
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttomNav: {
    paddingTop: 51,
    paddingBottom: Padding.p_51xl,
    justifyContent: "flex-end",
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
    left: 8,
    top: 0,
    position: "absolute",
  },
  bodyfatSelectionScreen: {
    backgroundColor: Color.colorUtilityBgColor,
    height: 844,
    width: "100%",
    flex: 1,
  },
});

export default BodyFatSelectionScreen;
