import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  StyleVariable,
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from "../GlobalStyles";

const GenderSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[styles.genderSelectionScreen, styles.femaleIconLayout]}
    >
      <View style={[styles.mainContainer, styles.mainContainerPosition]}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <Text style={styles.text} numberOfLines={2}>
            <Text style={styles.text1}>{`أهلا بيك كابتن!
`}</Text>
            <Text style={styles.text2}>خلينا نتعرف عليك أكثر</Text>
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text3} numberOfLines={1}>
            أختر جنسك
          </Text>
          <View
            style={[styles.genderSelectionButtons, styles.privacyTermsFlexBox]}
          >
            <Pressable
              style={styles.femaleGenderSelectionButton}
              onPress={() => navigation.navigate("AgeSelectionScreen")}
            >
              <View style={styles.female}>
                <View style={[styles.cardFrame, styles.cardFrameSpaceBlock]}>
                  <View style={[styles.cardBg, styles.cardFlexBox]}>
                    <Image
                      style={[styles.femaleIcon, styles.femaleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/female1.png")}
                    />
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={styles.maleGenderSelectionButton}
              onPress={() => navigation.navigate("AgeSelectionScreen")}
            >
              <View style={styles.male}>
                <View style={[styles.cardFrame1, styles.cardFrameSpaceBlock]}>
                  <View style={styles.cardFlexBox}>
                    <Image
                      style={[styles.femaleIcon, styles.femaleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/male1.png")}
                    />
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={[styles.orLine, styles.headerFlexBox]}>
          <View style={[styles.orLineChild, styles.lineBorder]} />
          <Text
            style={[styles.text4, styles.text4SpaceBlock]}
            numberOfLines={1}
          >
            أو سجيل كـمدرب
          </Text>
          <View style={[styles.orLineItem, styles.text4SpaceBlock]} />
        </View>
        <View style={styles.trainerButton}>
          <Pressable
            style={styles.buttons}
            onPress={() => navigation.navigate("TrainerRegistration")}
          >
            <Image
              style={styles.buttonIcons}
              contentFit="cover"
              source={require("../assets/buttonicons.png")}
            />
            <Text style={[styles.text5, styles.textTypo]}>انا مدرب</Text>
          </Pressable>
          <View style={[styles.privacyTerms, styles.privacyTermsFlexBox]}>
            <Text style={styles.text6} numberOfLines={1}>
              <Text style={styles.text7}>
                <Text style={styles.text8}>في الاستمرار, أنت توافق على</Text>
                <Text style={styles.text9}>{` `}</Text>
              </Text>
              <Text style={styles.text9}>
                <Text style={styles.text11}>شروط الخدمه</Text>
                <Text style={styles.text7}>{` `}</Text>
              </Text>
              <Text style={styles.text7}>
                <Text style={styles.text8}>{`و `}</Text>
              </Text>
              <Text style={styles.text9}>
                <Text style={styles.text11}>قوانين الخصوصيه</Text>
                <Text style={styles.text7}>.</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.statusBarDark, styles.mainContainerPosition]}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons2.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  femaleIconLayout: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
  mainContainerPosition: {
    top: 0,
    position: "absolute",
  },
  headerFlexBox: {
    paddingVertical: StyleVariable.spacingScreenMarginXs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  privacyTermsFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  cardFrameSpaceBlock: {
    paddingBottom: StyleVariable.spacingScreenMarginMd,
    paddingTop: StyleVariable.spacingScreenMarginXs,
    paddingHorizontal: StyleVariable.spacingScreenMarginXs,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  cardFlexBox: {
    padding: StyleVariable.spacingScreenMarginXs,
    backgroundColor: Color.secondaryContainer,
    borderRadius: StyleVariable.spacingRadiusSm,
    alignSelf: "stretch",
    alignItems: "center",
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
  textTypo: {
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBrandSecondaryLight,
  },
  text1: {
    fontSize: FontSize.size_9xl,
    color: Color.colorBaseWhite,
  },
  text2: {
    fontSize: FontSize.headingsTitleMdReg_size,
    color: Color.colorBrandSecondaryLight,
  },
  text: {
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    textAlign: "right",
    flex: 1,
  },
  header: {
    paddingHorizontal: Padding.p_xl,
  },
  text3: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.bodySmReg,
    color: Color.whitesmoke_100,
    textAlign: "center",
    alignSelf: "stretch",
  },
  femaleIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cardBg: {
    justifyContent: "space-between",
  },
  cardFrame: {
    backgroundColor: Color.colorBrandSecondary,
  },
  female: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  femaleGenderSelectionButton: {
    borderRadius: StyleVariable.radiusSm,
    maxHeight: 380,
    minHeight: 200,
    height: "100%",
    minWidth: 160,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  cardFrame1: {
    backgroundColor: Color.colorPrimary,
  },
  male: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  maleGenderSelectionButton: {
    marginLeft: 16,
    borderRadius: StyleVariable.spacingRadiusSm,
    maxHeight: 380,
    minHeight: 200,
    height: "100%",
    minWidth: 160,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  genderSelectionButtons: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingVertical: Padding.p_5xs,
    minWidth: 160,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  orLineChild: {
    flex: 1,
  },
  text4: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBrandSecondaryLight,
  },
  orLineItem: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  orLine: {
    paddingHorizontal: Padding.p_7xl,
    alignItems: "center",
  },
  buttonIcons: {
    width: 24,
    height: 24,
    display: "none",
  },
  text5: {
    fontSize: FontSize.labelsLgBold_size,
    marginLeft: 4,
    flex: 1,
  },
  buttons: {
    borderRadius: StyleVariable.radiusMd,
    borderColor: Color.colorBrandSecondary,
    borderWidth: 2,
    paddingHorizontal: StyleVariable.spacing7,
    paddingVertical: StyleVariable.spacing2,
    minWidth: 320,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  text8: {
    color: Color.colorBrandSecondaryLight,
  },
  text9: {
    color: Color.colorGainsboro_200,
  },
  text7: {
    fontWeight: "300",
    fontFamily: FontFamily.tajawalLight,
  },
  text11: {
    fontWeight: "500",
    fontFamily: FontFamily.tajawalMedium,
  },
  text6: {
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    textAlign: "center",
  },
  privacyTerms: {
    alignItems: "flex-end",
    paddingVertical: 0,
    marginTop: 16,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  trainerButton: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  mainContainer: {
    right: 0,
    bottom: 0,
    left: 0,
    paddingTop: 80,
    paddingBottom: 40,
    justifyContent: "space-between",
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
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  statusBarDark: {
    right: 7,
    left: 8,
    height: 56,
    overflow: "hidden",
  },
  genderSelectionScreen: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorUtilityBgColor,
    height: 844,
    overflow: "hidden",
  },
});

export default GenderSelectionScreen;
