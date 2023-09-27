import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  StyleVariable,
  Border,
  Color,
  FontSize,
  FontFamily,
  Padding,
} from "../GlobalStyles";

const TrainerRegistration = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.trainerRegistration, styles.femaleIconLayout]}>
      <View style={styles.statusBarDark}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <Text style={styles.text} numberOfLines={2}>
            <Text style={styles.text1}>{`أهلا بيك كابتن!
`}</Text>
            <Text style={styles.text2}>خلينا نتعرف عليك أكثر</Text>
          </Text>
        </View>
        <View style={[styles.genderImagesContainer, styles.genderFlexBox]}>
          <Text style={styles.text3} numberOfLines={1}>
            أختر جنسك
          </Text>
          <View style={[styles.genderSelectionImages, styles.genderFlexBox]}>
            <Pressable
              style={[styles.femaleGenderSelectionButton, styles.genderLayout]}
            >
              <View style={styles.female}>
                <View style={[styles.cardFrame, styles.cardFrameSpaceBlock]}>
                  <View style={[styles.cardBg, styles.cardBgFlexBox]}>
                    <Image
                      style={[styles.femaleIcon, styles.femaleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/female.png")}
                    />
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={[styles.maleGenderSelectionButtons, styles.cardBgFlexBox]}
            >
              <View style={styles.male}>
                <View style={[styles.cardFrame1, styles.buttonsBg]}>
                  <View style={[styles.cardBg, styles.cardBgFlexBox]}>
                    <Image
                      style={[styles.femaleIcon, styles.femaleIconLayout]}
                      contentFit="cover"
                      source={require("../assets/male.png")}
                    />
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={[styles.formButtons, styles.genderFlexBox]}>
          <TouchableHighlight
            style={[styles.buttons, styles.buttonsBg]}
            underlayColor="rgba(255, 85, 85, 0.7)"
            onPress={() => navigation.navigate("GenderSelectionScreen")}
          >
            <>
              <Image
                style={styles.buttonIcons}
                contentFit="cover"
                source={require("../assets/buttonicons.png")}
              />
              <Text style={styles.text4}>ابدأ الأن</Text>
            </>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  femaleIconLayout: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
  headerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  genderFlexBox: {
    marginTop: 14,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  genderLayout: {
    maxHeight: 380,
    minHeight: 200,
    minWidth: 160,
    height: 380,
    justifyContent: "center",
    flexDirection: "row",
  },
  cardFrameSpaceBlock: {
    paddingBottom: StyleVariable.spacingScreenMarginMd,
    paddingTop: StyleVariable.spacingScreenMarginXs,
    paddingHorizontal: StyleVariable.spacingScreenMarginXs,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    flex: 1,
  },
  cardBgFlexBox: {
    borderRadius: StyleVariable.spacingRadiusSm,
    alignItems: "center",
    flex: 1,
  },
  buttonsBg: {
    backgroundColor: Color.colorPrimary,
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
    width: 375,
    height: 56,
    overflow: "hidden",
  },
  text1: {
    fontSize: FontSize.size_9xl,
    color: Color.labelColorDarkPrimary,
  },
  text2: {
    fontSize: FontSize.headingsTitleMdReg_size,
    color: Color.darkslategray,
  },
  text: {
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    textAlign: "right",
    flex: 1,
  },
  header: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
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
    backgroundColor: Color.secondaryContainer,
    padding: StyleVariable.spacingScreenMarginXs,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  cardFrame: {
    backgroundColor: Color.colorBrandSecondary,
    alignItems: "center",
  },
  female: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  femaleGenderSelectionButton: {
    borderRadius: StyleVariable.radiusSm,
    alignItems: "center",
    flex: 1,
  },
  cardFrame1: {
    paddingBottom: StyleVariable.spacingScreenMarginMd,
    paddingTop: StyleVariable.spacingScreenMarginXs,
    paddingHorizontal: StyleVariable.spacingScreenMarginXs,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    flex: 1,
  },
  male: {
    minHeight: 360,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  maleGenderSelectionButtons: {
    marginLeft: 19,
    maxHeight: 380,
    minHeight: 200,
    minWidth: 160,
    height: 380,
    justifyContent: "center",
    flexDirection: "row",
  },
  genderSelectionImages: {
    justifyContent: "center",
    flexDirection: "row",
  },
  genderImagesContainer: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
  },
  buttonIcons: {
    width: 24,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  text4: {
    fontSize: FontSize.labelsLgBold_size,
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    color: Color.colorBaseWhite,
    marginLeft: 4,
    textAlign: "center",
    flex: 1,
  },
  buttons: {
    borderRadius: StyleVariable.radiusMd,
    width: 350,
    paddingHorizontal: StyleVariable.spacing7,
    paddingVertical: StyleVariable.spacing2,
    minWidth: 320,
    justifyContent: "center",
    flexDirection: "row",
  },
  formButtons: {
    height: 158,
    justifyContent: "flex-end",
    paddingBottom: Padding.p_51xl,
    paddingHorizontal: Padding.p_xl,
  },
  mainContainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  trainerRegistration: {
    backgroundColor: Color.colorUtilityBgColor,
    height: 844,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default TrainerRegistration;
