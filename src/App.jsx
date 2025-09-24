import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./styles/style.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience/Experience.jsx";
import { motion, AnimatePresence } from "framer-motion";


export default function PortfolioApp() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isWEBGL, setIsWebGL] = useState(false);
  const [currentSection, setCurrentSection] = useState("about");


  return (
    <>
      <Canvas
        className="w-full h-full"
        shadows
        camera={{
          fov: 60,
          near: 0.1,
          far: 500,
          position: [200, 15, 150],
        }}
      >
        <Experience
          darkMode={isDarkMode}
          onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
        />
      </Canvas>
    </>
  );
}
