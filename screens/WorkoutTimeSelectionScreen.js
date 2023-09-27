import * as React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar } from "react-native-paper";
import { Image } from "expo-image";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Days2 from "../components/Days";
import DaysSelection from "../components/DaysSelection";
import Weeks1 from "../components/Weeks1";
import Days1 from "../components/Days11";
import Weeks from "../components/Weeks";
import Days from "../components/Days1";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  StyleVariable,
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const TopTab = createMaterialTopTabNavigator();
const WorkoutTimeSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workoutTimeSelectionScreen}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={[styles.topNav, styles.navFlexBox]}>
          <View style={[styles.basicProgressBar, styles.titleFlexBox]}>
            <ProgressBar progress={0.4} color="#2ec7e5" />
          </View>
          <Image
            style={[styles.backArrowIcons, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/backarrowicons.png")}
          />
        </View>
        <View style={[styles.title, styles.navFlexBox]}>
          <Text style={styles.text}>كم مره سوف تتمرن؟</Text>
        </View>
        <View style={[styles.container, styles.navFlexBox]}>
          <TopTab.Navigator
            style={styles.workoutTimeTabNavToptabs}
            tabBar={({ state, descriptors, navigation, position }) => {
              const [activeItems] = React.useState([<Weeks1 />, <Weeks />]);
              const [normalItems] = React.useState([<Days1 />, <Days />]);
              const activeIndex = state.index;
              return (
                <View style={styles.topTabBarStyle}>
                  {normalItems.map((item, index) => {
                    const isFocused = state.index === index;
                    return (
                      <TouchableOpacity
                        key={index}
                        style={{ flex: 1 }}
                        onPress={() => {
                          navigation.navigate({
                            name: state.routes[index].name,
                            merge: true,
                          });
                        }}
                      >
                        {activeIndex === index ? activeItems[index] : item}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            }}
          >
            <TopTab.Screen name="days" component={Days2} />
            <TopTab.Screen name="custom selection" component={DaysSelection} />
          </TopTab.Navigator>
        </View>
        <View style={[styles.buttomNav, styles.navFlexBox]}>
          <Pressable
            style={[styles.nextButton, styles.sundayFlexBox]}
            onPress={() => navigation.navigate("WorkoutTime3SelectionScree")}
          >
            <Image
              style={[styles.buttonIcons, styles.iconsLayout]}
              contentFit="cover"
              source={require("../assets/buttonicons9.png")}
            />
            <Text style={[styles.text8, styles.textFlexBox]}>التالي</Text>
          </Pressable>
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
  workoutTimeTabNavToptabs: {
    width: "100%",
  },
  topTabBarStyle: {
    alignSelf: "stretch",
    borderRadius: 32,
    backgroundColor: "#1f373c",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 4,
    minHeight: 40,
    zIndex: 1,
  },
  navFlexBox: {
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  titleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconsLayout: {
    height: 24,
    overflow: "hidden",
  },
  sundayFlexBox: {
    paddingVertical: StyleVariable.spacing2,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.colorBaseWhite,
  },
  basicProgressBar: {
    padding: StyleVariable.spacingScreenMarginXs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  backArrowIcons: {
    width: 24,
    marginLeft: 16,
  },
  topNav: {
    paddingVertical: StyleVariable.spacingScreenMarginSm,
    justifyContent: "center",
    flexDirection: "row",
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
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    height: 343,
    paddingVertical: 0,
    justifyContent: "center",
    overflow: "hidden",
  },
  buttonIcons: {
    maxWidth: "100%",
    display: "none",
    flex: 1,
  },
  text8: {
    fontSize: FontSize.labelsLgBold_size,
    fontWeight: "900",
    fontFamily: FontFamily.tajawalBlack,
    marginLeft: 4,
    flex: 1,
  },
  nextButton: {
    borderRadius: StyleVariable.radiusMd,
    backgroundColor: Color.colorPrimary,
    paddingHorizontal: StyleVariable.spacing7,
    minWidth: 320,
    alignSelf: "stretch",
  },
  buttomNav: {
    justifyContent: "flex-end",
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_51xl,
  },
  mainContainer: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "space-between",
    paddingTop: Padding.p_31xl,
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
    top: 1,
    right: 8,
    left: 7,
    height: 56,
    position: "absolute",
    overflow: "hidden",
  },
  workoutTimeSelectionScreen: {
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default WorkoutTimeSelectionScreen;
