import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar } from "react-native-paper";
import { Image } from "expo-image";
import Component1 from "../components/Component1";
import Component from "../components/Component";
import Text1 from "../components/Text1";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  StyleVariable,
  FontSize,
  FontFamily,
  Color,
  Border,
} from "../GlobalStyles";

const WorkoutTime3SelectionScree = () => {
  const [timeSelectorFlatListData, setTimeSelectorFlatListData] = useState([
    <Component1 />,
    <Component />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.timePerWorkoutSelectionScr}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={[styles.topNav, styles.navFlexBox]}>
          <View style={[styles.basicProgressBar, styles.topNavFlexBox]}>
            <ProgressBar progress={0.4} color="#2ec7e5" />
          </View>
          <Image
            style={[styles.backArrowIcons, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/backarrowicons.png")}
          />
        </View>
        <View style={[styles.title, styles.navFlexBox]}>
          <Text style={styles.text} numberOfLines={2}>
            كم تحتاج من الوقت للتمرين الواحد؟
          </Text>
        </View>
        <View style={styles.container}>
          <FlatList
            style={styles.timeSelector}
            data={timeSelectorFlatListData}
            ListHeaderComponent={<Text1 />}
            renderItem={({ item }) => item}
            numColumns={2}
            contentContainerStyle={styles.timeSelectorFlatListContent}
          />
        </View>
        <View style={[styles.buttomNav, styles.navFlexBox]}>
          <TouchableHighlight
            style={[styles.nextButton, styles.topNavFlexBox]}
            underlayColor="rgba(255, 85, 85, 0.6)"
            onPress={() => navigation.navigate("GoalSelectionScreen")}
          >
            <>
              <Image
                style={[styles.buttonIcons, styles.iconsLayout]}
                contentFit="cover"
                source={require("../assets/buttonicons9.png")}
              />
              <Text style={styles.text1}>التالي</Text>
            </>
          </TouchableHighlight>
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
  timeSelectorFlatListContent: {
    flexDirection: "row",
    paddingLeft: 190,
    paddingRight: 87,
  },
  navFlexBox: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  topNavFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  iconsLayout: {
    height: 24,
    overflow: "hidden",
  },
  basicProgressBar: {
    padding: StyleVariable.spacingScreenMarginXs,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  backArrowIcons: {
    width: 24,
    marginLeft: 16,
  },
  topNav: {
    paddingVertical: StyleVariable.spacingScreenMarginSm,
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeSelector: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.fillColorDarkQuaternary,
    flexWrap: "wrap",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  container: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonIcons: {
    maxWidth: "100%",
    display: "none",
    flex: 1,
  },
  text1: {
    fontSize: FontSize.labelsLgBold_size,
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    color: Color.colorBaseWhite,
    textAlign: "center",
    marginLeft: 4,
    flex: 1,
  },
  nextButton: {
    borderRadius: StyleVariable.radiusMd,
    backgroundColor: Color.colorPrimary,
    paddingHorizontal: StyleVariable.spacing7,
    paddingVertical: StyleVariable.spacing2,
    minWidth: 320,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  buttomNav: {
    alignItems: "flex-end",
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_51xl,
    justifyContent: "space-between",
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
  timePerWorkoutSelectionScr: {
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default WorkoutTime3SelectionScree;
