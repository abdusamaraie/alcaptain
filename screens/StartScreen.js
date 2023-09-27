import * as React from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Border,
  Padding,
  Color,
  FontFamily,
  FontSize,
  StyleVariable,
} from "../GlobalStyles";

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.startScreen, styles.slidesLayout]}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={[styles.slides, styles.slidesLayout]}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.slidesScrollViewContent}
        >
          <View style={styles.slideLayout1}>
            <ImageBackground
              style={styles.slide1ImageIcon}
              resizeMode="cover"
              source={require("../assets/slide1image.png")}
            />
            <LinearGradient
              style={[styles.slideContent, styles.slideContentPosition]}
              locations={[0.35, 1]}
              colors={["#002024", "rgba(0, 32, 36, 0.03)"]}
            >
              <View style={styles.titleSubTitle}>
                <Text
                  style={[styles.text, styles.textTypo2]}
                  numberOfLines={1}
                >{`برنامج تمرين وتغذيه مخصص `}</Text>
                <Text
                  style={[styles.text1, styles.textTypo1]}
                  numberOfLines={2}
                >{`سجل ألان وأبدأ تمارينك مع مدربك الخاص `}</Text>
              </View>
              <View style={styles.slidePaging}>
                <Image
                  style={styles.slideLayout}
                  contentFit="cover"
                  source={require("../assets/ellipse-48.png")}
                />
                <Image
                  style={[styles.slidePagingItem, styles.slideLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-49.png")}
                />
                <Image
                  style={[styles.slidePagingItem, styles.slideLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-49.png")}
                />
              </View>
            </LinearGradient>
          </View>
          <View style={styles.slide2}>
            <ImageBackground
              style={styles.slide1ImageIcon}
              resizeMode="cover"
              source={require("../assets/image4.png")}
            />
            <LinearGradient
              style={[styles.slideContent1, styles.slideContentSpaceBlock]}
              locations={[0.35, 1]}
              colors={["#002024", "rgba(0, 32, 36, 0.03)"]}
            >
              <View style={styles.titleSubTitle1}>
                <Text style={[styles.text, styles.textTypo2]} numberOfLines={1}>
                  التطبيق رقم ١ في الوطن العربي
                </Text>
                <Text
                  style={[styles.text1, styles.textTypo1]}
                  numberOfLines={2}
                >
                  انظم لاكثر من ٢ مليون شخص يستخدم التطبيق اليوم
                </Text>
              </View>
              <View style={styles.slidePaging}>
                <Image
                  style={styles.slideLayout}
                  contentFit="cover"
                  source={require("../assets/ellipse-49.png")}
                />
                <Image
                  style={[styles.slidePagingItem, styles.slideLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-48.png")}
                />
                <Image
                  style={[styles.slidePagingItem, styles.slideLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-49.png")}
                />
              </View>
            </LinearGradient>
          </View>
          <View style={[styles.slide3, styles.slideLayout1]}>
            <ImageBackground
              style={styles.slide1ImageIcon}
              resizeMode="cover"
              source={require("../assets/imageslide3.png")}
            />
            <LinearGradient
              style={[styles.slideContent2, styles.slideContentSpaceBlock]}
              locations={[0.35, 1]}
              colors={["#002024", "rgba(0, 32, 36, 0.03)"]}
            >
              <View style={styles.titleSubTitle}>
                <Text
                  style={[styles.text4, styles.textTypo2]}
                  numberOfLines={1}
                >
                  احصل على نتائج حقيقيه
                </Text>
                <Text
                  style={[styles.text5, styles.textTypo1]}
                  numberOfLines={1}
                >{`سجل ألان وأبدأ تمارينك مع مدربك الخاص `}</Text>
              </View>
              <View style={styles.slidePaging}>
                <Image
                  style={styles.slideLayout}
                  contentFit="cover"
                  source={require("../assets/ellipse-49.png")}
                />
                <Image
                  style={[styles.slidePagingItem, styles.slideLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-49.png")}
                />
                <Image
                  style={[styles.slidePagingItem, styles.slideLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-48.png")}
                />
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
        <View style={[styles.buttons, styles.slideContentSpaceBlock]}>
          <TouchableHighlight
            style={[styles.startButton, styles.buttonFlexBox]}
            underlayColor="rgba(255, 85, 85, 0.6)"
            onPress={() => navigation.navigate("GenderSelectionScreen")}
          >
            <>
              <Image
                style={[styles.buttonIcons, styles.buttonLayout]}
                contentFit="cover"
                source={require("../assets/buttonicons.png")}
              />
              <Text style={[styles.text6, styles.textTypo]}>أبدا ألان</Text>
            </>
          </TouchableHighlight>
          <View style={[styles.iHaveAccountButton, styles.buttonFlexBox]}>
            <Image
              style={styles.buttonLayout}
              contentFit="cover"
              source={require("../assets/buttonicons.png")}
            />
            <Text style={[styles.text7, styles.textTypo]}>عندي حساب</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  slidesScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  slidesLayout: {
    width: "100%",
    borderRadius: Border.br_5xl,
  },
  slideContentPosition: {
    zIndex: 1,
    backgroundColor: "transparent",
    paddingBottom: Padding.p_23xl,
    paddingTop: Padding.p_xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "center",
    lineHeight: 53,
    letterSpacing: 1,
    color: Color.colorBaseWhite,
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  textTypo1: {
    fontFamily: FontFamily.bodySmReg,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBaseWhite,
    letterSpacing: 1,
    alignSelf: "stretch",
  },
  slideLayout: {
    height: 8,
    width: 8,
  },
  slideContentSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    overflow: "hidden",
    alignItems: "center",
  },
  slideLayout1: {
    height: 535,
    width: 390,
  },
  buttonFlexBox: {
    minWidth: 230,
    paddingVertical: StyleVariable.spacing2,
    paddingHorizontal: StyleVariable.spacing7,
    borderRadius: StyleVariable.radiusMd,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonLayout: {
    display: "none",
    height: 24,
    width: 24,
  },
  textTypo: {
    marginLeft: 4,
    fontSize: FontSize.labelsLgBold_size,
    textAlign: "center",
    flex: 1,
  },
  slide1ImageIcon: {
    zIndex: 0,
    alignSelf: "stretch",
    flex: 1,
  },
  text: {
    fontSize: FontSize.headingsTitleMdReg_size,
  },
  text1: {
    lineHeight: 26,
  },
  titleSubTitle: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  slidePagingItem: {
    marginLeft: 24,
  },
  slidePaging: {
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  slideContent: {
    height: 196,
    paddingHorizontal: Padding.p_lg,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
    bottom: 0,
    zIndex: 1,
    backgroundColor: "transparent",
    paddingBottom: Padding.p_23xl,
    paddingTop: Padding.p_xl,
  },
  titleSubTitle1: {
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  slideContent1: {
    bottom: -1,
    height: 205,
    zIndex: 1,
    backgroundColor: "transparent",
    paddingBottom: Padding.p_23xl,
    paddingTop: Padding.p_xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  slide2: {
    height: 534,
    width: 390,
    alignItems: "center",
  },
  text4: {
    fontSize: FontSize.size_9xl,
  },
  text5: {
    lineHeight: 28,
  },
  slideContent2: {
    height: 171,
    zIndex: 1,
    backgroundColor: "transparent",
    paddingBottom: Padding.p_23xl,
    paddingTop: Padding.p_xl,
    left: 0,
    right: 0,
    position: "absolute",
    bottom: 0,
  },
  slide3: {
    alignItems: "flex-end",
    borderRadius: Border.br_5xl,
    height: 535,
  },
  slides: {
    alignSelf: "stretch",
  },
  buttonIcons: {
    overflow: "hidden",
  },
  text6: {
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    color: Color.colorBaseWhite,
    marginLeft: 4,
    fontSize: FontSize.labelsLgBold_size,
  },
  startButton: {
    backgroundColor: Color.colorPrimary,
  },
  text7: {
    color: Color.colorBrandSecondary,
    marginLeft: 4,
    fontSize: FontSize.labelsLgBold_size,
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
  },
  iHaveAccountButton: {
    borderStyle: "solid",
    borderColor: Color.colorBrandSecondary,
    borderWidth: 2,
    height: StyleVariable.spacing7,
    marginTop: 18,
    overflow: "hidden",
  },
  buttons: {
    paddingTop: 13,
    paddingBottom: Padding.p_51xl,
    alignSelf: "stretch",
  },
  container: {
    top: 0,
    justifyContent: "space-between",
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
    bottom: 0,
  },
  startScreen: {
    backgroundColor: Color.colorUtilityBgColor,
    height: 844,
    flex: 1,
  },
});

export default StartScreen;
