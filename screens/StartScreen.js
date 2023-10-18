import React, { useState } from "react";
import { View, Dimensions, StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import Slide2 from "../components/Slide2";
import Slide1 from "../components/Slide1";
import Slide from "../components/Slide";
import { Image } from "expo-image";
import {
  StyleVariable,
  FontFamily,
  FontSize,
  Color,
  Border,
} from "../GlobalStyles";

const StartScreen = () => {
  const [slidesItems, setSlidesItems] = useState([
    <Slide2 />,
    <Slide1 />,
    <Slide />,
  ]);

  return (
    <View style={styles.startScreen}>
      <SafeAreaView style={styles.container}>
        <View style={styles.slides}>
          <Carousel
            style={styles.carousel}
            width={390}
            mode="normal"
            autoPlay={true}
            loop={false}
            pagingEnabled={true}
            data={slidesItems}
            renderItem={({ item }) => item}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={[styles.startButton, styles.buttonFlexBox]}>
            <Image
              style={[styles.buttonIcons, styles.buttonLayout]}
              contentFit="cover"
              source={require("../assets/buttonicons.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>أبدا ألان</Text>
          </Pressable>
          <Pressable style={[styles.iHaveAccountButton, styles.buttonFlexBox]}>
            <Image
              style={styles.buttonLayout}
              contentFit="cover"
              source={require("../assets/buttonicons.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>عندي حساب</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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
    textAlign: "center",
    fontFamily: FontFamily.labelsLgBold,
    fontWeight: "700",
    fontSize: FontSize.labelsLgBold_size,
    flex: 1,
  },
  carousel: {
    width: 390,
    height: 535,
  },
  slides: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonIcons: {
    overflow: "hidden",
  },
  text: {
    color: Color.utilityPrimaryText,
  },
  startButton: {
    backgroundColor: Color.primaryBrand,
    height: 56,
  },
  text1: {
    color: Color.colorBrandSecondary,
  },
  iHaveAccountButton: {
    borderStyle: "solid",
    borderColor: Color.colorBrandSecondary,
    borderWidth: 2,
    height: StyleVariable.spacing7,
    marginTop: 18,
    overflow: "hidden",
  },
  buttonsContainer: {
    height: 213,
    paddingHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 70,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  startScreen: {
    borderRadius: Border.br_5xl,
    backgroundColor: "#00161b",
    width: "100%",
    height: 844,
    flex: 1,
  },
});

export default StartScreen;
