import * as React from "react";
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
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  FontFamily,
  StyleVariable,
  Color,
  FontSize,
} from "../GlobalStyles";

const DietSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dietSelectionScreen}>
      <SafeAreaView
        style={[styles.mainContainer, styles.mainContainerPosition]}
      >
        <View style={[styles.topNav, styles.titleFlexBox]}>
          <View style={styles.basicProgressBar}>
            <ProgressBar progress={0.4} color="#23b5d3" />
          </View>
          <Image
            style={[styles.backArrowIcons, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/backarrowicons.png")}
          />
        </View>
        <View style={[styles.title, styles.titleFlexBox]}>
          <Text style={styles.text} numberOfLines={1}>
            ما هي حميتك الغذائيه؟
          </Text>
        </View>
        <View style={[styles.goalSelectionButtons, styles.titleFlexBox]}>
          <Pressable style={styles.meatLayout}>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>لحوم</Text>
              <Text style={[styles.text2, styles.textTypo]}>
                ما عندي مشكله في اكل اللحوم
              </Text>
            </View>
            <Image
              style={styles.nonvegIcon}
              contentFit="cover"
              source={require("../assets/nonveg1.png")}
            />
            <Image
              style={styles.checkMarkIcon}
              contentFit="cover"
              source={require("../assets/check-mark4.png")}
            />
          </Pressable>
          <Pressable style={[styles.vegan, styles.meatLayout]}>
            <View style={[styles.content, styles.parentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>نباتي</Text>
              <Text style={[styles.text2, styles.textTypo]}>
                افضل اكل الخضراوات والفواكه فقط
              </Text>
            </View>
            <Image
              style={styles.nonvegIcon}
              contentFit="cover"
              source={require("../assets/healthy-eating1.png")}
            />
            <Image
              style={styles.checkMarkIcon}
              contentFit="cover"
              source={require("../assets/check-mark4.png")}
            />
          </Pressable>
          <Pressable style={[styles.vegan, styles.meatLayout]}>
            <View style={[styles.content, styles.parentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>آكل أي شئ</Text>
              <Text style={[styles.text2, styles.textTypo]}>
                لحوم خضراوات وجبات سريعه كلها احبها
              </Text>
            </View>
            <Image
              style={styles.nonvegIcon}
              contentFit="cover"
              source={require("../assets/burger1.png")}
            />
            <Image
              style={styles.checkMarkIcon}
              contentFit="cover"
              source={require("../assets/check-mark4.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.buttomNav, styles.buttomNavFlexBox]}>
          <TouchableHighlight
            style={[styles.nextButton, styles.buttomNavFlexBox]}
            underlayColor="rgba(0, 0, 0, 0.6)"
            onPress={() => navigation.navigate("HowDidYouHearAboutUsScre")}
          >
            <>
              <Image
                style={[styles.buttonIcons, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/buttonicons7.png")}
              />
              <Text style={styles.text7}>التالي</Text>
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
  mainContainerPosition: {
    top: 0,
    position: "absolute",
  },
  titleFlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconsLayout: {
    height: 24,
    overflow: "hidden",
  },
  parentFlexBox: {
    zIndex: 0,
    alignItems: "flex-end",
    flex: 1,
  },
  textTypo: {
    fontFamily: FontFamily.bodySmReg,
    textAlign: "right",
    alignSelf: "stretch",
  },
  meatLayout: {
    minHeight: 80,
    minWidth: 350,
    padding: StyleVariable.radiusMd,
    borderWidth: 1,
    borderColor: Color.colorBrandSecondaryLight,
    borderStyle: "solid",
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.radiusSm,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  buttomNavFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
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
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  text: {
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.headingsTitleMdReg_size,
    flex: 1,
  },
  title: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  text1: {
    color: Color.colorBaseWhite,
    fontSize: FontSize.headingsTitleMdReg_size,
    fontFamily: FontFamily.bodySmReg,
  },
  text2: {
    fontSize: FontSize.labelsSmBold_size,
    color: Color.colorBrandSecondaryLight,
  },
  parent: {
    justifyContent: "center",
  },
  nonvegIcon: {
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
  content: {
    justifyContent: "flex-end",
  },
  vegan: {
    marginTop: 10,
  },
  goalSelectionButtons: {
    paddingVertical: Padding.p_base,
    overflow: "hidden",
  },
  buttonIcons: {
    maxWidth: "100%",
    display: "none",
    flex: 1,
  },
  text7: {
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
    paddingHorizontal: Padding.p_lg,
    paddingTop: 120,
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
    right: 11,
    left: 4,
    height: 56,
    overflow: "hidden",
  },
  dietSelectionScreen: {
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default DietSelectionScreen;
