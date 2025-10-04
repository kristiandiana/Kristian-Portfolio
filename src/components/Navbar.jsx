import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Grid,
  Person,
  Link45deg,
  Mortarboard,
  CodeSlash,
} from "react-bootstrap-icons";

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  const renderIcon = () => {
    // Only show icon for home page, not for other sections
    if (currentSection.toLowerCase() === "home") {
      return <Grid style={{ marginRight: "8px" }} />;
    }
    return null;
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 1.5, // Delay after main transition completes
      }}
      style={{
        position: "fixed",
        top: "20px",
        left: "0",
        right: "0",
        width: "90%",
        maxWidth: "1000px",
        margin: "0 auto",
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(20px)",
        borderRadius: "50px",
        padding: "12px 0",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          flex: 1,
          textAlign: "left",
          color: "#667eea",
          fontWeight: "700",
          fontSize: "18px", // Equal font size
          cursor: "pointer",
          paddingLeft: "32px", // Increased padding from edges
        }}
        onClick={() => setCurrentSection("home")}
      >
        {isMobile ? "KD" : "Kristian Diana"}
      </motion.div>

      {/* Current Section Display - Centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }} // Delay after navbar appears
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#1a1a1a",
          fontWeight: "600",
          fontSize: "18px", // Equal font size
        }}
      >
        {renderIcon()}
        <span>{capitalizeFirstLetter(currentSection)}</span>
      </motion.div>

      {/* Home Button */}
      <motion.button
        onClick={() => setCurrentSection("home")}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "8px 32px 8px 16px", // Increased right padding from edges
          borderRadius: "25px",
          background: currentSection === "home" ? "#667eea" : "transparent",
          color: currentSection === "home" ? "white" : "#667eea",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          fontSize: "18px", // Equal font size
          fontWeight: "500",
        }}
      >
        <Grid style={{ marginRight: "6px", fontSize: "16px" }} />
        {!isMobile && <span>Home</span>}
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
