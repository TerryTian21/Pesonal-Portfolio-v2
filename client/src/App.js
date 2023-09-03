import "./App.css";
import AnimatedRoutes from "./animatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
export default App;
