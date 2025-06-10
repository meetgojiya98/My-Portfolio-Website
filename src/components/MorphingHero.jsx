import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const phrases = ["Engineer.", "Dreamer.", "Coder.", "Explorer."];

export default function MorphingHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % phrases.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      style={{
        fontWeight: "900",
        fontSize: "3rem",
        color: "#2978F0",
        userSelect: "none",
      }}
    >
      I am a{" "}
      <TextTransition springConfig={presets.wobbly}>
        {phrases[index]}
      </TextTransition>
    </h1>
  );
}
