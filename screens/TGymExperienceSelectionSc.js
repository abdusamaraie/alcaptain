import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  TouchableHighlight,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const TGymExperienceSelectionSc = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tGymExperienceSelectionSc}>
      <View style={[styles.mainContainer, styles.titleFlexBox]}>
        <View style={[styles.form, styles.viewSpaceBlock]}>
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>
              ما هي خبرتك في التدريب؟
            </Text>
          </View>
          <View style={[styles.experinceCard, styles.titleFlexBox]}>
            <View style={[styles.experianceCard, styles.experianceCardFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>متوسط</Text>
              <Text style={styles.text2}>
                لدي خبره متوسطه بالتدريب وكسبتها من خبرتي في التمرين الفردي
              </Text>
            </View>
            <View
              style={[styles.experianceCard1, styles.experianceCardFlexBox]}
            >
              <Text style={[styles.text1, styles.textTypo]}>متقدم</Text>
              <Text style={styles.text2}>
                انا مدرب ولدي خبره اكثر من سنه في التدريب
              </Text>
            </View>
            <View
              style={[styles.experianceCard1, styles.experianceCardFlexBox]}
            >
              <Text style={[styles.text1, styles.textTypo]}>محترف</Text>
              <Text style={styles.text2}>
                انا بطل كمال اجسام ومدرب معتمد و لدي من الخبره الكافيه للتدريب
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttomNav}>
          <TouchableHighlight
            style={[styles.button, styles.titleFlexBox]}
            underlayColor="rgba(255, 85, 85, 0.6)"
            onPress={() => navigation.navigate("TGymNameAndLocationScree")}
          >
            <Text style={styles.text7}>التالي</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.statusBarDark}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons4.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    backgroundColor: "#1c1c1c",
  },
  titleFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  viewSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.tajawalExtraBold,
    fontWeight: "800",
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
  },
  experianceCardFlexBox: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_mini,
    alignItems: "flex-end",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gray_100,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text: {
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.headingsTitleMdReg_size,
    flex: 1,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: FontSize.size_3xl,
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
  },
  text2: {
    fontSize: FontSize.labelsSmBold_size,
    fontFamily: FontFamily.bodySmReg,
    color: Color.dimgray,
    width: 321,
    height: 29,
    textAlign: "right",
  },
  experianceCard: {
    borderColor: Color.tomato_100,
    borderWidth: 3,
  },
  experianceCard1: {
    borderColor: Color.darkslategray,
    borderWidth: 1,
    marginTop: 16,
  },
  experinceCard: {
    height: 332,
    marginTop: 50,
    justifyContent: "center",
  },
  form: {
    height: 474,
    alignItems: "center",
  },
  text7: {
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.headingsTitleMdReg_size,
  },
  button: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.tomato_100,
    height: 60,
    paddingHorizontal: Padding.p_62xl,
    paddingVertical: Padding.p_6xl,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  buttomNav: {
    justifyContent: "flex-end",
    paddingBottom: Padding.p_51xl,
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
    alignItems: "center",
  },
  mainContainer: {
    paddingTop: Padding.p_31xl,
    zIndex: 0,
    justifyContent: "space-between",
    flex: 1,
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
    position: "absolute",
    color: Color.labelColorDarkPrimary,
  },
  statusBarDark: {
    top: 0,
    left: 8,
    width: 375,
    height: 44,
    zIndex: 1,
    position: "absolute",
  },
  tGymExperienceSelectionSc: {
    backgroundColor: Color.labelColorLightPrimary,
    height: 844,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default TGymExperienceSelectionSc;
