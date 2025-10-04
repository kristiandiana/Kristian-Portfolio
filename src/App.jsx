import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Navbar from "./components/Navbar.jsx";

const sectionComponents = {
  home: Home,
  about: About,
  contact: Contact,
  experience: Experience,
  projects: Projects,
};

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const CurrentComponent = sectionComponents[currentSection];

  // Scroll to top when section changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSection]);

  // Pokemon SoulSilver checkerboard transition variants - snake-like squares!
  const getTransitionVariants = (section) => {
    switch (section) {
      case "about":
        return {
          initial: {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)", // Start as single point
            opacity: 1,
            zIndex: 2,
          },
          animate: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Full rectangle
            opacity: 1,
            zIndex: 2,
            transition: {
              duration: 1.2, // Slower transitions
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.6, // Slower exit
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };

      case "projects":
        return {
          initial: {
            clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)", // Start from top-right
            opacity: 1,
            zIndex: 2,
          },
          animate: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Full rectangle
            opacity: 1,
            zIndex: 2,
            transition: {
              duration: 1.2, // Slower transitions
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.6, // Slower exit
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };

      case "contact":
        return {
          initial: {
            clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)", // Start from bottom-left
            opacity: 1,
            zIndex: 2,
          },
          animate: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Full rectangle
            opacity: 1,
            zIndex: 2,
            transition: {
              duration: 1.2, // Slower transitions
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.6, // Slower exit
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };

      case "experience": // Changed from education
        return {
          initial: {
            clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)", // Start from bottom-right
            opacity: 1,
            zIndex: 2,
          },
          animate: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Full rectangle
            opacity: 1,
            zIndex: 2,
            transition: {
              duration: 1.2, // Slower transitions
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.6, // Slower exit
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };

      case "home":
      default:
        return {
          initial: {
            scale: 0.95,
            opacity: 0,
            zIndex: 1,
          },
          animate: {
            scale: 1,
            opacity: 1,
            zIndex: 1,
            transition: {
              duration: 1.2, // Slower transitions
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0.6, // Slower exit
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        };
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 50%, #CBD5E1 100%)", // Slightly darker grayscale gradient
        color: "#1F2937",
        overflow: currentSection === "home" ? "hidden" : "auto", // Only hidden on home page
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: "relative", // Ensure proper stacking context
      }}
    >
      {/* Only show navbar when not on home page */}
      {currentSection !== "home" && (
        <Navbar
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      )}

      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSection}
          variants={getTransitionVariants(currentSection)}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            minHeight: "100vh", // Ensure full height
            willChange: "transform, opacity, clip-path", // Add clip-path optimization
            transform: "translateZ(0)", // Force hardware acceleration
            backfaceVisibility: "hidden", // Prevent flickering
          }}
        >
          <CurrentComponent
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
