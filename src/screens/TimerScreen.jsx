import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import { spaces } from "../utils/sizes";
import { colors } from "../utils/colors";
import CountDown from "../components/CountDown";
function TimerScreen({ focusItem }) {
  return (
    <View style={styles.container}>
      <CountDown />
      <View>
        <Text style={styles.title}>Focusing on :</Text>
        <Text style={styles.task}>{focusItem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? spaces.lg : spaces.lg,
  },
  title: {
    fontSize: spaces.lg,
    color: colors.white,
    textAlign: "center",
  },
  task: {
    fontSize: spaces.lg,
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default TimerScreen;
