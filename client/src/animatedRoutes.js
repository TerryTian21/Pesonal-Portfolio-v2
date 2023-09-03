import React from "react";
import Landing from "./Pages/Landing/landing.jsx";
import About from "./Pages/AboutMe/About.jsx";
import Workout from "./Pages/Workout/workout";
import Adventures from "./Pages/Adventures/adventures";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/adventures" element={<Adventures />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
