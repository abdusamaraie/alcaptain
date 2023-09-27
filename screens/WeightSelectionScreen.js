import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Border,
} from "../GlobalStyles";

const WeightSelectionScreen = () => {
  const [timePickerDatePicker, setTimePickerDatePicker] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.weightSelectionScreen}>
      <View style={[styles.mainContainer, styles.mainContainerPosition]}>
        <View style={[styles.title, styles.navFlexBox]}>
          <Text style={styles.text} numberOfLines={1}>
            كم وزنك؟
          </Text>
        </View>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.containerScrollViewContent}
        >
          <RNKDatepicker
            style={styles.timepicker}
            label={() => (
              <Text style={styles.timePickerDatePickerLabel}>41</Text>
            )}
            caption={() => (
              <Text style={styles.timePickerDatePickerCaption}>kg</Text>
            )}
            placeholder={() => (
              <Text style={styles.timePickerDatePickerPlaceHolder}>9</Text>
            )}
            date={timePickerDatePicker}
            onSelect={setTimePickerDatePicker}
            status="primary"
            controlStyle={styles.timePickerDatePickerValue}
          />
        </ScrollView>
        <View style={[styles.buttomNav, styles.navFlexBox]}>
          <Pressable
            style={[styles.nextButton, styles.titleFlexBox]}
            onPress={() => navigation.navigate("BodyFatSelectionScreen")}
          >
            <Image
              style={[styles.buttonIcons, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/buttonicons10.png")}
            />
            <Text style={styles.text1}>التالي</Text>
          </Pressable>
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
    </View>
  );
};

const styles = StyleSheet.create({
  timePickerDatePickerLabel: {
    fontFamily: "SF Pro Display",
    color: "rgba(235, 235, 245, 0.6)",
    fontSize: 23,
  },
  timePickerDatePickerCaption: {
    fontFamily: "SF Pro Display",
    color: "rgba(235, 235, 245, 0.6)",
    fontSize: 23,
  },
  timePickerDatePickerPlaceHolder: {
    fontFamily: "SF Pro Display",
    color: "rgba(235, 235, 245, 0.6)",
    fontSize: 23,
  },
  timePickerDatePickerValue: {
    position: "relative",
    height: 178,
  },
  containerScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 122,
    alignItems: "center",
    justifyContent: "flex-start",
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
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_9xl,
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
    flex: 1,
  },
  title: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  timepicker: {
    height: 178,
  },
  container: {
    alignSelf: "stretch",
    flex: 1,
  },
  buttonIcons: {
    display: "none",
    maxWidth: "100%",
    height: 24,
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
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  buttomNav: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_51xl,
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
  weightSelectionScreen: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default WeightSelectionScreen;
