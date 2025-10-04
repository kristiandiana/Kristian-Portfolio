import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import cucaiPhoto from "../assets/cucai.jpg";
import hikingPhoto from "../assets/hiking.JPEG";

const About = ({ currentSection, setCurrentSection }) => {
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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "50px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Header Section */}
        <motion.div
          variants={sectionVariants}
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              color: "white",
              marginBottom: "20px",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Passionate about software engineering, AI applications, and building
            user-facing features
          </motion.p>
        </motion.div>

        {/* CUCAI Keynote Section */}
        <motion.div
          variants={sectionVariants}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "25px",
            padding: isMobile ? "30px 20px" : "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "30px" : "40px",
            alignItems: "center",
          }}
        >
          <motion.div
            variants={imageVariants}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={cucaiPhoto}
              alt="Kristian presenting at CUCAI 2025"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: "700",
                color: "#667eea",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Building Products That Matter
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#4a4a4a",
                marginBottom: "20px",
              }}
            >
              I'm passionate about building software that creates real impact
              for users. From reducing CO2 emissions through smart traffic
              systems to shipping Chrome extensions with 1000+ active users, I
              love taking complex technical concepts and turning them into
              products people actually use. Leading technical teams has taught
              me that the best innovations happen when you focus on solving real
              problems, not just showing off technical skills.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {[
                "Applied AI & RL",
                "User-Facing Products",
                "Team Leadership",
                "Real-World Impact",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    background: "#667eea20",
                    color: "#667eea",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    border: "1px solid #667eea40",
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hiking & Personal Interests Section */}
        <motion.div
          variants={sectionVariants}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "25px",
            padding: isMobile ? "30px 20px" : "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "30px" : "40px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: "700",
                color: "#667eea",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beyond the Code
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#4a4a4a",
                marginBottom: "20px",
              }}
            >
              Former Team Canada acrobatic gymnast with 7+ years of
              international competition experience across 3 continents and 6
              countries. Placed 8th at the World Acrobatic Gymnastics
              Competition 2022 in Baku, Azerbaijan. This background instilled
              discipline, teamwork, and a relentless pursuit of excellence that
              I bring to every technical challenge. This has also made me
              competitive in most areas of life... lmk if you can beat some of
              my stats below!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "15px",
              }}
            >
              {[
                { icon: "🎯", text: "3x3 Rubik's Cube Sub-20s" },
                { icon: "🎣", text: "PB Pike 30+ inches" },
                { icon: "🏋️", text: "Weightlifting (215lbs Bench PR)" },
                { icon: "🎵", text: "Concert Goer (25+ shows)" },
                { icon: "🌍", text: "4 Continents Travelled" },
              ].map((interest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + idx * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#f8f9fa",
                    padding: "12px 16px",
                    borderRadius: "15px",
                    border: "1px solid #e9ecef",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{interest.icon}</span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      color: "#333",
                    }}
                  >
                    {interest.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={hikingPhoto}
              alt="Kristian hiking with scenic mountain view"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};

export default About;
