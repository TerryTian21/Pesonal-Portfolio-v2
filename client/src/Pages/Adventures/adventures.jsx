import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/navbar";

function Adventures() {
  const [activePage, setActivePage] = useState("adventures");

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 100 }}
    >
      <Navbar activePage={activePage} onNavClick={handleNavClick} />;
    </motion.div>
  );
}

export default Adventures;
