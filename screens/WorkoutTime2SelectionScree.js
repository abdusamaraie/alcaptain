import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import DaysSelection from "../components/DaysSelection";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const WorkoutTime2SelectionScree = () => {
  return (
    <View style={styles.workoutTime2SelectionScree}>
      <View style={styles.title}>
        <Text style={styles.text}>كم مره ستتمرن في ؟</Text>
      </View>
      <View style={styles.midNav}>
        <View style={styles.workoutTimeTabNav} />
        <DaysSelection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_9xl,
    fontWeight: "800",
    fontFamily: FontFamily.tajawalExtraBold,
    color: Color.labelColorDarkPrimary,
    textAlign: "right",
    flex: 1,
  },
  title: {
    width: 390,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
  workoutTimeTabNav: {
    width: 370,
    display: "none",
  },
  midNav: {
    alignSelf: "stretch",
    justifyContent: "center",
    padding: Padding.p_3xs,
    marginTop: 20,
    alignItems: "center",
  },
  workoutTime2SelectionScree: {
    backgroundColor: Color.labelColorLightPrimary,
    width: "100%",
    height: 508,
    overflow: "hidden",
    flex: 1,
  },
});

export default WorkoutTime2SelectionScree;
