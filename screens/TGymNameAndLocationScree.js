import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const TGymNameAndLocationScree = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.tGymNameAndLocationScree, styles.mainContainerFlexBox]}
    >
      <View style={[styles.mainContainer, styles.mainContainerFlexBox]}>
        <View style={[styles.form, styles.viewSpaceBlock]}>
          <View style={styles.titleSubTitle}>
            <Text style={styles.text}>ما إسم وعنوانه الجم الخاص بك؟</Text>
            <Text
              style={[styles.text1, styles.textTypo]}
            >{`نحتاج اسم الجم وعنوانه لكي يصلك المتدرب
`}</Text>
          </View>
          <View style={styles.form1}>
            <View style={styles.textInput}>
              <Text style={[styles.text2, styles.textTypo]}>أسم الجم</Text>
              <TextInput
                style={[styles.email, styles.emailFlexBox]}
                placeholder="|"
              />
            </View>
            <View style={styles.emailFlexBox}>
              <Text style={[styles.text2, styles.textTypo]}>العنوان</Text>
              <TextInput
                style={[styles.email, styles.emailFlexBox]}
                placeholder="|"
              />
            </View>
          </View>
        </View>
        <View style={styles.buttomNav}>
          <TouchableHighlight
            style={[styles.button, styles.viewFlexBox]}
            underlayColor="rgba(255, 85, 85, 0.6)"
            onPress={() => navigation.navigate("TEmailSignupScreen")}
          >
            <Text style={styles.text4}>التالي</Text>
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
    alignItems: "center",
  },
  viewSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.tajawalLight,
    fontWeight: "300",
    textAlign: "right",
  },
  emailFlexBox: {
    marginTop: 7,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  viewFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  text: {
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    width: 346,
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.headingsTitleMdReg_size,
  },
  text1: {
    fontSize: FontSize.size_base,
    color: Color.silver,
    height: 32,
    marginTop: 8,
    width: 346,
  },
  titleSubTitle: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  text2: {
    fontSize: FontSize.labelsSmBold_size,
    color: Color.whitesmoke_100,
    alignSelf: "stretch",
  },
  email: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gray_200,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
    overflow: "hidden",
  },
  textInput: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  form1: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    marginTop: 50,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  form: {
    height: 400,
    alignItems: "center",
  },
  text4: {
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
  tGymNameAndLocationScree: {
    backgroundColor: Color.labelColorLightPrimary,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default TGymNameAndLocationScree;
