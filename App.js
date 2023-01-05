import React, { useRef, useState } from "react";
import { StyleSheet, Button, Text, SafeAreaView } from "react-native";
import { Timer } from "react-native-element-timer";

import { Text as SkiaText, useFont, Canvas } from "@shopify/react-native-skia";

const fontFile = require("./assets/fonts/Poppins-Medium.ttf");
const App = (_props) => {
  const timerRef = useRef(null);
  const font = useFont(fontFile, 20);

  const [text, setText] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Timer:</Text>
      <Timer
        ref={timerRef}
        style={styles.timer}
        textStyle={styles.timerText}
        onTimes={(e) => {
          setText(e.toString());
          console.log("font", font);
        }}
        onPause={(e) => {
          console.log("font", font);
        }}
        onEnd={(e) => {}}
      />

      <Text style={styles.text}>SKIA TEXT:</Text>

      <Canvas style={{ width: 200, height: 200 }}>
        {font && (
          <SkiaText x={10} y={15} color={"#000000"} font={font} text={text} />
        )}
      </Canvas>
      <Button
        style={styles.button}
        title={"Start"}
        onPress={() => {
          console.log("font", font.getSize());
          timerRef.current.start();
        }}
      />
      <Button
        style={styles.button}
        title={"Pause"}
        onPress={() => {
          timerRef.current.pause();
        }}
      />
      <Button
        style={styles.button}
        title={"Resume"}
        onPress={() => {
          timerRef.current.resume();
        }}
      />
      <Button
        style={styles.button}
        title={"Stop"}
        onPress={() => {
          timerRef.current.stop();
        }}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 40,
  },
  timer: {
    marginVertical: 10,
  },
  timerText: {
    fontSize: 20,
  },
  button: {
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 24,
    width: 100,
  },
});
