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
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const TGymLocationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.tGymLocationScreen, styles.mainContainerFlexBox]}>
      <View style={[styles.mainContainer, styles.buttonFlexBox]}>
        <View style={[styles.form, styles.viewSpaceBlock]}>
          <View style={styles.titleSubTitle}>
            <Text style={[styles.text, styles.textLayout]}>{`أين تتمرن وتدرب؟
`}</Text>
            <Text
              style={[styles.text1, styles.textLayout]}
            >{`ما حجم الجم الذي تعمل فيه 
`}</Text>
          </View>
          <View style={[styles.experinceCard, styles.buttonFlexBox]}>
            <View style={[styles.experianceCard, styles.experianceCardFlexBox]}>
              <Text style={[styles.text2, styles.textTypo]}>جم صغير</Text>
              <Text style={styles.text3}>جم صغير بمعدات وآلات محدوده</Text>
            </View>
            <View
              style={[styles.experianceCard1, styles.experianceCardFlexBox]}
            >
              <Text style={[styles.text2, styles.textTypo]}>جم كبير</Text>
              <Text
                style={styles.text3}
              >{`جم عام كبير بكافه المعدات والآلات المطلوبه `}</Text>
            </View>
            <View
              style={[styles.experianceCard1, styles.experianceCardFlexBox]}
            >
              <Text style={[styles.text2, styles.textTypo]}>في المنزل</Text>
              <Text style={styles.text3}>
                اتدرب في المنزل وادرب تمارين من المنزل
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttomNav}>
          <TouchableHighlight
            style={[styles.button, styles.viewFlexBox]}
            underlayColor="rgba(255, 85, 85, 0.6)"
            onPress={() => navigation.navigate("TGymNameAndLocationScree")}
          >
            <Text style={styles.text8}>التالي</Text>
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
  mainContainerFlexBox: {
    justifyContent: "space-between",
    height: 844,
  },
  buttonFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  viewSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  textLayout: {
    height: 32,
    width: 346,
    textAlign: "right",
  },
  experianceCardFlexBox: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_mini,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignItems: "flex-end",
    backgroundColor: Color.gray_100,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.tajawalExtraBold,
    fontWeight: "800",
    color: Color.labelColorDarkPrimary,
  },
  viewFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  text: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.tajawalExtraBold,
    fontWeight: "800",
    fontSize: FontSize.headingsTitleMdReg_size,
  },
  text1: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.tajawalLight,
    color: Color.silver,
    marginTop: 8,
  },
  titleSubTitle: {
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.size_3xl,
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
  },
  text3: {
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
    height: 309,
    marginTop: 50,
    justifyContent: "center",
  },
  form: {
    height: 474,
    alignItems: "center",
  },
  text8: {
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
    alignSelf: "stretch",
    alignItems: "center",
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
    height: 844,
    alignSelf: "stretch",
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
  tGymLocationScreen: {
    backgroundColor: Color.labelColorLightPrimary,
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "space-between",
    height: 844,
    width: "100%",
    flex: 1,
  },
});

export default TGymLocationScreen;
