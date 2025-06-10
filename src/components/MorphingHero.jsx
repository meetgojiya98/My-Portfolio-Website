import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { motion, AnimatePresence } from "framer-motion";

const { Title } = Typography;

const phrases = [
  "Innovator",
  "Developer",
  "Problem Solver",
  "Solution Analyst",
  "Tech Enthusiast",
];

export default function MorphingHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: 60, overflow: "hidden", position: "relative" }}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={phrases[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", width: "100%" }}
        >
          <Title level={2} style={{ color: "#2978F0" }}>
            {phrases[index]}
          </Title>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
