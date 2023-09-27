import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableHighlight,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const TAgeSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tAgeSelectionScreen}>
      <View style={styles.mainContainer}>
        <View style={[styles.form, styles.viewSpaceBlock]}>
          <Text style={styles.text}>ما هي مواليدك؟</Text>
          <View style={styles.datepicker}>
            <View style={styles.monthPicker}>
              <View style={styles.monthYear}>
                <Text style={[styles.month, styles.monthTypo]}>June 2022</Text>
                <Image
                  style={styles.sfIconChevronforward}
                  contentFit="cover"
                  source={require("../assets/sf-icon--chevronforward1.png")}
                />
              </View>
              <View style={styles.arrows}>
                <Image
                  style={styles.sfSymbolChevronbackward}
                  contentFit="cover"
                  source={require("../assets/sf-symbol--chevronbackward1.png")}
                />
                <Image
                  style={styles.sfSymbolChevronbackward}
                  contentFit="cover"
                  source={require("../assets/sf-symbol--chevronforward1.png")}
                />
              </View>
            </View>
            <View style={styles.datepickerDayrow}>
              <Text style={[styles.day, styles.dayTypo]}>SUN</Text>
              <Text style={[styles.day1, styles.dayTypo]}>MON</Text>
              <Text style={[styles.day, styles.dayTypo]}>TUE</Text>
              <Text style={[styles.day, styles.dayTypo]}>WED</Text>
              <Text style={[styles.day, styles.dayTypo]}>THU</Text>
              <Text style={[styles.day, styles.dayTypo]}>FRI</Text>
              <Text style={[styles.day, styles.dayTypo]}>SAT</Text>
            </View>
            <View style={[styles.datepickerDayrow1, styles.datepickerPosition]}>
              <View style={styles.digitLayout}>
                <Text style={[styles.date, styles.datePosition]}>8</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date1, styles.datePosition]}>8</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date, styles.datePosition]}>8</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date3, styles.dateTypo]}>1</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>2</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date5, styles.dateTypo]}>3</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>4</Text>
              </View>
            </View>
            <View style={[styles.datepickerDayrow2, styles.datepickerPosition]}>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>5</Text>
              </View>
              <View style={[styles.digit8, styles.digitLayout]}>
                <Text style={[styles.date8, styles.dateTypo]}>6</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>7</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date3, styles.dateTypo]}>8</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>9</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date5, styles.dateTypo]}>10</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>11</Text>
              </View>
            </View>
            <View style={[styles.datepickerDayrow3, styles.datepickerPosition]}>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>12</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date3, styles.dateTypo]}>13</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>14</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date3, styles.dateTypo]}>15</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>16</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date5, styles.dateTypo]}>17</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>18</Text>
              </View>
            </View>
            <View style={[styles.datepickerDayrow4, styles.datepickerPosition]}>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>19</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date3, styles.dateTypo]}>20</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>21</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date3, styles.dateTypo]}>22</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>23</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date5, styles.dateTypo]}>24</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>25</Text>
              </View>
            </View>
            <View style={[styles.datepickerDayrow5, styles.datepickerPosition]}>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>26</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date3, styles.dateTypo]}>27</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>28</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date3, styles.dateTypo]}>29</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date4, styles.dateTypo]}>30</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date5, styles.dateTypo]}>31</Text>
              </View>
              <View style={styles.digitLayout}>
                <Text style={[styles.date, styles.datePosition]}>8</Text>
              </View>
            </View>
            <View style={[styles.timePicker, styles.datePosition]}>
              <Text style={[styles.month, styles.monthTypo]}>Time</Text>
              <View style={styles.time1}>
                <View style={styles.datepickerTimepicker}>
                  <Text style={[styles.time2, styles.monthTypo]}>9:41 AM</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.buttomNav, styles.viewSpaceBlock]}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="rgba(255, 85, 85, 0.6)"
            onPress={() => navigation.navigate("TGymExperienceSelectionSc")}
          >
            <Text style={styles.text1}>التالي</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.statusBarDark}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons4.png")}
        />
        <Text style={styles.time3}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    backgroundColor: "#1c1c1c",
  },
  viewSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  monthTypo: {
    fontFamily: FontFamily.defaultBoldBody,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
  },
  dayTypo: {
    width: 32,
    color: Color.labelColorDarkTertiary,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    letterSpacing: 0,
  },
  datepickerPosition: {
    paddingVertical: Padding.p_3xs,
    left: 19,
    right: 19,
    paddingHorizontal: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datePosition: {
    display: "none",
    position: "absolute",
    alignItems: "center",
  },
  dateTypo: {
    display: "flex",
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 25,
    fontSize: FontSize.labelsLgBold_size,
    top: "50%",
    width: 40,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    color: Color.labelColorDarkPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
  digitLayout: {
    height: 40,
    width: 40,
  },
  text: {
    fontSize: FontSize.size_9xl,
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    textAlign: "right",
    color: Color.labelColorDarkPrimary,
    alignSelf: "stretch",
  },
  month: {
    textAlign: "left",
    fontWeight: "600",
  },
  sfIconChevronforward: {
    width: 7,
    marginLeft: 8,
    height: 11,
  },
  monthYear: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  sfSymbolChevronbackward: {
    width: 10,
    height: 17,
  },
  arrows: {
    width: 51,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  monthPicker: {
    top: 16,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    height: 44,
    left: 16,
    right: 16,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  day: {
    textAlign: "center",
  },
  day1: {
    textAlign: "left",
  },
  datepickerDayrow: {
    top: 62,
    left: 16,
    right: 16,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 25,
    fontSize: FontSize.labelsLgBold_size,
    display: "none",
    top: "50%",
    marginTop: -12,
    width: 40,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.labelColorDarkPrimary,
    justifyContent: "center",
    left: 0,
  },
  date1: {
    left: 1,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 25,
    fontSize: FontSize.labelsLgBold_size,
    display: "none",
    top: "50%",
    marginTop: -12,
    width: 40,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.labelColorDarkPrimary,
    justifyContent: "center",
  },
  date3: {
    left: 1,
    marginTop: -12,
    display: "flex",
  },
  date4: {
    left: 0,
    marginTop: -12,
    display: "flex",
  },
  date5: {
    marginTop: -16,
    height: 32,
    left: 1,
  },
  datepickerDayrow1: {
    top: 85,
  },
  date8: {
    left: 1,
    marginTop: -12,
    display: "flex",
    fontWeight: "600",
  },
  digit8: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.tomato_100,
  },
  datepickerDayrow2: {
    top: 131,
  },
  datepickerDayrow3: {
    top: 177,
  },
  datepickerDayrow4: {
    top: 223,
  },
  datepickerDayrow5: {
    top: 269,
  },
  time2: {
    textAlign: "left",
  },
  datepickerTimepicker: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.fillColorDarkTertiary,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    flexDirection: "row",
  },
  time1: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  timePicker: {
    top: 320,
    right: 0,
    paddingHorizontal: Padding.p_base,
    left: 0,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datepicker: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.systemBackgroundDarkElevatedPrimary,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    width: 354,
    height: 370,
    marginTop: 50,
  },
  form: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: FontSize.headingsTitleMdReg_size,
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
  },
  button: {
    borderRadius: Border.br_mini,
    height: 60,
    paddingHorizontal: Padding.p_62xl,
    paddingVertical: Padding.p_6xl,
    backgroundColor: Color.tomato_100,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  buttomNav: {
    justifyContent: "flex-end",
    paddingBottom: Padding.p_51xl,
    alignItems: "center",
  },
  mainContainer: {
    paddingTop: Padding.p_31xl,
    zIndex: 0,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  icons: {
    top: 18,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  time3: {
    marginTop: -8,
    left: 32,
    fontSize: FontSize.subheadlineBold_size,
    lineHeight: 20,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldBody,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
    color: Color.labelColorDarkPrimary,
  },
  statusBarDark: {
    top: 0,
    left: 8,
    width: 375,
    zIndex: 1,
    height: 44,
    position: "absolute",
  },
  tAgeSelectionScreen: {
    backgroundColor: Color.labelColorLightPrimary,
    height: 844,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default TAgeSelectionScreen;
