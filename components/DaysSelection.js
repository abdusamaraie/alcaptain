import React, { useState } from "react";
import { FlatList, StyleProp, ViewStyle, StyleSheet } from "react-native";
import Selection1 from "./Selection1";
import XText from "./X";

const DaysSelection = ({ style }) => {
  const [customDaysSelectionFlatListData, setCustomDaysSelectionFlatListData] =
    useState([<Selection1 />]);

  return (
    <FlatList
      style={[styles.customDaysSelection, style]}
      data={customDaysSelectionFlatListData}
      ListHeaderComponent={<XText />}
      renderItem={({ item }) => item}
      contentContainerStyle={styles.customDaysSelectionFlatListContent}
    />
  );
};

const styles = StyleSheet.create({
  customDaysSelectionFlatListContent: {
    flexDirection: "column",
    paddingHorizontal: 18,
    paddingVertical: 0,
  },
  customDaysSelection: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default DaysSelection;
