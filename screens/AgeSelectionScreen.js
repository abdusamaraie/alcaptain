import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearProgress } from "@rneui/themed";
import { Image } from "expo-image";
import { Datepicker as RNKDatepicker, Icon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Border,
} from "../GlobalStyles";

const AgeSelectionScreen = () => {
  const [datePicker, setDatePicker] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={[styles.ageSelectionScreen, styles.iconLayout]}>
      <SafeAreaView
        style={[styles.mainContainer, styles.mainContainerPosition]}
      >
        <View style={[styles.title, styles.navSpaceBlock]}>
          <Text style={styles.text} numberOfLines={1}>
            ما هي مواليدك؟
          </Text>
        </View>
        <View style={[styles.container, styles.navSpaceBlock]}>
          <RNKDatepicker
            label={() => <Text style={styles.datePickerLabel}>مواليد</Text>}
            caption={() => <Text style={styles.datePickerCaption}>MON</Text>}
            placeholder={() => (
              <Text style={styles.datePickerPlaceHolder}>June 2022</Text>
            )}
            accessoryLeft={<Icon name="calendar-outline" pack="material" />}
            date={datePicker}
            onSelect={setDatePicker}
            status="danger"
            controlStyle={styles.datePickerValue}
          />
        </View>
        <View style={[styles.buttomNav, styles.navSpaceBlock]}>
          <TouchableOpacity
            style={[styles.nextButton, styles.titleFlexBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("HeightSelectionScreen")}
          >
            <Image
              style={styles.buttonIcons}
              contentFit="cover"
              source={require("../assets/buttonicons9.png")}
            />
            <Text style={styles.text1}>التالي</Text>
          </TouchableOpacity>
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
  datePickerLabel: {
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#fff",
    fontSize: 17,
  },
  datePickerCaption: {
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "rgba(235, 235, 245, 0.3)",
    fontSize: 13,
  },
  datePickerPlaceHolder: {
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "rgba(235, 235, 245, 0.3)",
    fontSize: 13,
  },
  datePickerValue: {},
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  mainContainerPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  navSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
  },
  titleFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
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
  container: {
    paddingVertical: 0,
    alignItems: "center",
  },
  buttonIcons: {
    maxWidth: "100%",
    display: "none",
    height: 24,
    overflow: "hidden",
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
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  buttomNav: {
    paddingVertical: StyleVariable.spacingScreenMarginLg,
    alignItems: "center",
  },
  mainContainer: {
    top: 1,
    bottom: 1,
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
    top: -1,
    height: 56,
    overflow: "hidden",
  },
  ageSelectionScreen: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorUtilityBgColor,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default AgeSelectionScreen;
