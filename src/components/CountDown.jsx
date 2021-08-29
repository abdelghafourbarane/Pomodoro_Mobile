import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../utils/colors";
import { spaces } from "../utils/sizes";

const minutesToMillis = (min) => {
  return min * 1000 * 60;
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

function CountDown({ minutes = 20, isPaused }) {
  const interval = React.useRef(null);
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // do more stuff here
        return time;
      }
      const timeLeft = time - 1000;
      // report the progress
      return timeLeft;
    });
  };

  useEffect(() => {
    interval.current = setInterval(countDown, 1000);
    console.log("comp dd mnt");
    return () => clearInterval(interval.current);
  }, []);

  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const min = Math.floor(millis / 1000 / 60) % 60;
  const sec = Math.floor(millis / 1000) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(min)}:{formatTime(sec)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(94,132,226,0.3)",
    marginBottom: spaces.lg,
    marginHorizontal: spaces.lg,
  },
  text: {
    fontSize: spaces.xxxl,
    color: colors.white,
    fontWeight: "bold",
    marginVertical: spaces.sm,
    textAlign: "center",
  },
});

export default CountDown;
