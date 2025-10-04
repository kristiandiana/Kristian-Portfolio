import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  Person,
  CodeSlash,
  Link45deg,
  Mortarboard,
} from "react-bootstrap-icons";

const Home = ({ currentSection, setCurrentSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const cornerButtons = [
    {
      id: "about",
      label: "About",
      icon: Person,
      color: "#3B82F6", // Blue - represents trust, reliability
      accentColor: "#1E40AF", // Darker blue
      gridArea: "1 / 1 / 2 / 3", // Top row, spans 2 columns
    },
    {
      id: "projects",
      label: "Projects",
      icon: CodeSlash,
      color: "#6366F1", // Indigo - represents creativity, innovation
      accentColor: "#4338CA", // Darker indigo
      gridArea: "1 / 3 / 2 / 5", // Top row, spans 2 columns
    },
    {
      id: "contact",
      label: "Contact",
      icon: Link45deg,
      color: "#8B5CF6", // Purple - represents connection, communication
      accentColor: "#7C3AED", // Darker purple
      gridArea: "4 / 1 / 5 / 3", // Bottom row, spans 2 columns
    },
    {
      id: "experience",
      label: "Experience",
      icon: Mortarboard,
      color: "#06B6D4", // Cyan - represents knowledge, growth
      accentColor: "#0891B2", // Darker cyan
      gridArea: "4 / 3 / 5 / 5", // Bottom row, spans 2 columns
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 50%, #CBD5E1 100%)", // Slightly darker grayscale gradient
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {/* Corner Buttons */}
        {cornerButtons.map((corner, index) => {
          const IconComponent = corner.icon;
          return (
            <motion.button
              key={corner.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: `0 20px 40px ${corner.color}30`,
                borderColor: corner.accentColor,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSection(corner.id)}
              style={{
                gridArea: corner.gridArea,
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                backdropFilter: "blur(20px)",
                border: `2px solid ${corner.color}20`, // Subtle colored border
                transition: "all 0.3s ease",
                padding: "20px",
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                style={{
                  fontSize: "4rem",
                  color: corner.color,
                  marginBottom: "15px",
                  filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                }}
              >
                <IconComponent />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: "700",
                  color: "#374151", // Dark gray instead of black
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {corner.label}
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
                style={{
                  height: "3px",
                  background: `linear-gradient(90deg, ${corner.color}, ${corner.accentColor})`,
                  borderRadius: "2px",
                  marginTop: "10px",
                }}
              />
            </motion.button>
          );
        })}

        {/* Hero Section - Center */}
        <motion.div
          variants={heroVariants}
          style={{
            gridArea: "2 / 1 / 4 / 5", // Middle two rows, spans all columns
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "30px",
            padding: "40px",
            backdropFilter: "blur(30px)",
            border: "2px solid rgba(148, 163, 184, 0.3)", // Subtle gray border
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "800",
              color: "#1F2937", // Dark gray
              marginBottom: "30px",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            Hey, it's Kristian!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              color: "#4B5563", // Medium gray
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <span>Welcome</span>
            <Typewriter
              words={[" to my portfolio."]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
              style={{ color: "#6366F1", fontWeight: "700" }} // Indigo accent
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            style={{
              fontSize: "1.1rem",
              color: "#6B7280", // Light gray
              lineHeight: "1.6",
              margin: 0,
              maxWidth: "600px",
            }}
          >
            Click any corner to dive into different realms of my portfolio
          </motion.p>
        </motion.div>

        {/* Subtle Background Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ delay: 2, duration: 2 }}
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "200px",
            height: "200px",
            background: "linear-gradient(45deg, #E2E8F0, #CBD5E1)",
            borderRadius: "50%",
            zIndex: -1,
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ delay: 2.5, duration: 2 }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: "150px",
            height: "150px",
            background: "linear-gradient(45deg, #F1F5F9, #E2E8F0)",
            borderRadius: "50%",
            zIndex: -1,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
