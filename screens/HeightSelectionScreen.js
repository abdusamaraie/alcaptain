import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
  StatusBar,
} from "react-native";
import { LinearProgress, Slider } from "@rneui/themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  StyleVariable,
  Border,
} from "../GlobalStyles";

const HeightSelectionScreen = () => {
  const [timePickerValue, setTimePickerValue] = useState(10);
  const navigation = useNavigation();

  return (
    <View style={styles.heightSelectionScreen}>
      <View style={[styles.mainContainer, styles.mainContainerPosition]}>
        <View style={[styles.title, styles.titleFlexBox]}>
          <Text style={styles.text}>كم طولك؟</Text>
        </View>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.containerScrollViewContent}
        >
          <Slider
            style={styles.timepicker}
            minimumValue={1}
            orientation="vertical"
            step="1"
            maximumValue
            value={timePickerValue}
            onValueChange={setTimePickerValue}
            thumbStyle={styles.timePickerts}
            thumbTintColor="#ff0000"
            minimumTrackTintColor="#3f3f3f"
            maximumTrackTintColor="#b3b3b3"
          />
        </ScrollView>
        <View style={styles.buttomNav}>
          <Pressable
            style={[styles.nextButton, styles.titleFlexBox]}
            onPress={() => navigation.navigate("WeightSelectionScreen")}
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
      <StatusBar style={styles.mainContainerPosition} barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  timePickerts: {
    height: 25,
    width: 25,
  },
  containerScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainerPosition: {
    top: 0,
    position: "absolute",
  },
  titleFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  iconsLayout: {
    height: 24,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_9xl,
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    color: Color.labelColorDarkPrimary,
    textAlign: "right",
    flex: 1,
  },
  title: {
    paddingVertical: Padding.p_5xs,
    width: 390,
    paddingHorizontal: Padding.p_xl,
  },
  timepicker: {
    height: 178,
    alignSelf: "stretch",
  },
  container: {
    maxWidth: 390,
    width: 390,
    flex: 1,
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
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  buttomNav: {
    justifyContent: "flex-end",
    paddingVertical: StyleVariable.spacingScreenMarginLg,
    width: 390,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
  },
  mainContainer: {
    right: 0,
    bottom: 1,
    left: 0,
    justifyContent: "space-between",
    paddingTop: Padding.p_31xl,
    alignItems: "center",
  },
  heightSelectionScreen: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorUtilityBgColor,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default HeightSelectionScreen;
