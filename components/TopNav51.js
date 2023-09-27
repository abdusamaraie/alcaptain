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

const TopNav5 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.progressBar}>
          <ProgressBar
            style={styles.progressbar}
            progress={0.5}
            color="#ff5555"
          />
        </View>
        <TouchableOpacity
          style={styles.backArrow}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("GymExperienceSelectionScree")}
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
  progressBar: {
    alignSelf: "center",
    flex: 1,
    borderRadius: Border.br_6xl,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    width: 24,
    height: 24,
    marginLeft: 18,
  },
  view: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
  },
});

export default TopNav5;
