import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FocusScreen from "./src/screens/FocusScreen";
import TimerScreen from "./src/screens/TimerScreen";
import { colors } from "./src/utils/colors";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <TimerScreen focusItem={focusSubject} />
      ) : (
        <FocusScreen addFocusSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    // alignItems: "center",
    justifyContent: "center",
  },
});
