import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import RoundedButton from "../components/RoundedButton";

import { spaces, fontSizes } from "../utils/sizes";
import { colors } from "../utils/colors";

function FocusScreen({ addFocusSubject }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spaces.md }}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
          <RoundedButton
            title="+"
            size={50}
            addItem={addFocusSubject}
            clearInputValue={setInputValue}
            inputValue={inputValue}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spaces.lg,
    flexDirection: "row",
    alignItems: "center",
  },
  focusItemStyles: {
    color: colors.white,
  },
});

export default FocusScreen;
