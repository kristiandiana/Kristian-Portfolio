import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Person, CodeSlash, Link45deg, Briefcase } from "react-bootstrap-icons";

const Home = ({ currentSection, setCurrentSection }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        duration: 1.2, // Slower transitions
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
        duration: 1.6, // Slower hero animation
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
      id: "experience", // Changed from education
      label: "Experience", // Changed from Education
      icon: Briefcase, // Changed from Mortarboard to Briefcase
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
        padding: isMobile ? "5px" : "20px", // Much less padding on mobile
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
          gap: isMobile ? "8px" : "20px", // Much smaller gap on mobile
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
                padding: isMobile ? "10px" : "20px", // Much less padding on mobile
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 1.0 }} // Slower icon animation
                style={{
                  fontSize: isMobile ? "2.5rem" : "4rem", // Much smaller icons on mobile
                  color: corner.color,
                  marginBottom: "10px", // Less margin
                  filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                }}
              >
                <IconComponent />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }} // Slower text animation
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 2.5rem)", // Smaller text on mobile
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
                transition={{ delay: 0.9 + index * 0.1, duration: 1.0 }} // Slower underline animation
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

        {/* Central Hero Section - Back to full height but more compact */}
        <motion.div
          variants={heroVariants}
          style={{
            gridArea: "2 / 1 / 4 / 5", // Back to spanning 2 rows (top to bottom buttons)
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "30px",
            padding: isMobile ? "15px 10px" : "30px 25px", // Much less padding on mobile
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
            transition={{ duration: 1.2, delay: 0.8 }} // Slower title animation
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3.5rem)", // Increased to match button text
              fontWeight: "800",
              color: "#1F2937", // Dark gray
              marginBottom: "20px", // More margin
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            Hey, it's Kristian!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }} // Slower typewriter animation
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)", // Increased to match button text
              color: "#4B5563", // Medium gray
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "15px", // More margin
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
            transition={{ duration: 1.2, delay: 1.5 }} // Slower description animation
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)", // Increased to be more readable
              color: "#6B7280", // Light gray
              maxWidth: "600px",
              lineHeight: "1.5", // Better line height
              margin: 0,
            }}
          >
            Explore my projects, experience, and skills through the interactive
            corners of this portfolio.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
