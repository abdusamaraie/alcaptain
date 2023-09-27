import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressBar } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding } from "../GlobalStyles";

const TopNav31 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.progressBar}>
          <ProgressBar
            style={styles.progressbar}
            progress={0.35}
            color="#ff5555"
          />
        </View>
        <Image
          style={[styles.backArrowIcon, styles.backLayout]}
          contentFit="cover"
          source={require("../assets/backarrow1.png")}
        />
        <TouchableOpacity
          style={styles.backLayout}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("WeightSelectionScreen")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/backarrow1.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    backgroundColor: Color.gray_100,
  },
  backLayout: {
    marginLeft: 18,
    height: 24,
    width: 24,
  },
  progressBar: {
    alignSelf: "center",
    flex: 1,
    borderRadius: Border.br_6xl,
  },
  backArrowIcon: {
    display: "none",
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  view: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
    overflow: "hidden",
  },
});

export default TopNav31;
