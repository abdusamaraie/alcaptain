import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  StyleVariable,
} from "../GlobalStyles";

const Slide2 = ({ style }) => {
  return (
    <View style={[styles.slide, style]}>
      <ImageBackground
        style={styles.slide1ImageIcon}
        resizeMode="cover"
        source={require("../assets/slide1image.png")}
      />
      <LinearGradient
        style={styles.slideContent}
        locations={[0.35, 1]}
        colors={["#00161b", "rgba(0, 32, 36, 0.03)"]}
      >
        <View style={styles.titleSubTitle}>
          <Text
            style={[styles.text, styles.textFlexBox]}
            numberOfLines={1}
          >{`برنامج تمرين وتغذيه مخصص `}</Text>
          <Text
            style={[styles.text1, styles.textFlexBox]}
            numberOfLines={2}
          >{`سجل ألان وأبدأ تمارينك مع مدربك الخاص `}</Text>
        </View>
        <View style={styles.slidePaging}>
          <Image
            style={styles.dotIconLayout}
            contentFit="cover"
            source={require("../assets/rightdot.png")}
          />
          <Image
            style={[styles.centerDotIcon, styles.dotIconLayout]}
            contentFit="cover"
            source={require("../assets/leftdot.png")}
          />
          <Image
            style={[styles.centerDotIcon, styles.dotIconLayout]}
            contentFit="cover"
            source={require("../assets/leftdot.png")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.utilityPrimaryText,
    alignSelf: "stretch",
  },
  dotIconLayout: {
    height: 8,
    width: 8,
  },
  slide1ImageIcon: {
    zIndex: 0,
    alignSelf: "stretch",
    height: 535,
  },
  text: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.labelsLgBold,
  },
  text1: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.tajawalMedium,
    marginTop: 8,
  },
  titleSubTitle: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
  centerDotIcon: {
    marginLeft: 16,
  },
  slidePaging: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    alignItems: "center",
  },
  slideContent: {
    position: "absolute",
    right: 0,
    bottom: 1,
    left: 0,
    height: 170,
    overflow: "hidden",
    paddingHorizontal: StyleVariable.spacingScreenMarginSm,
    paddingVertical: StyleVariable.spacingScreenMarginMd,
    backgroundColor: "transparent",
    zIndex: 1,
    alignItems: "center",
  },
  slide: {
    width: 390,
    height: 535,
  },
});

export default Slide2;
