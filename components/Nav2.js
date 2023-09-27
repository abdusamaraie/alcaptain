import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Nav2 = ({ style }) => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <ImageBackground
          style={styles.image6Icon}
          resizeMode="cover"
          source={require("../assets/image6.png")}
        />
        <Text style={styles.text} numberOfLines={1}>
          تسجيل الدخول
        </Text>
        <Image
          style={styles.backArrowIcon}
          contentFit="cover"
          source={require("../assets/backarrow.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image6Icon: {
    width: 15,
    height: 24,
  },
  text: {
    fontSize: FontSize.size_lg,
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    color: Color.darkslategray,
    textAlign: "right",
  },
  backArrowIcon: {
    width: 24,
    height: 24,
  },
  view: {
    alignSelf: "center",
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
  },
});

export default Nav2;
