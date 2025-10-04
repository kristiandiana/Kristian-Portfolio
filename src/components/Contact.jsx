import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = ({ currentSection, setCurrentSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/kristiandiana",
      description: "Check out my code and projects",
      color: "#333",
      hoverColor: "#667eea",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/kristiandiana/",
      description: "Connect with me professionally",
      color: "#0077b5",
      hoverColor: "#667eea",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:dianak@mcmaster.ca",
      description: "Send me a direct message",
      color: "#ea4335",
      hoverColor: "#667eea",
    },
    {
      name: "Devpost",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853Z" />
        </svg>
      ),
      url: "https://devpost.com/kristian8diana?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
      description: "View my hackathon projects",
      color: "#003e54",
      hoverColor: "#667eea",
    },
  ];

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
        {/* Header */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              color: "white",
              marginBottom: "20px",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            Let's Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology!
          </motion.p>
        </motion.div>

        {/* Social Links - 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
            maxWidth: "800px",
            margin: "0 auto 60px",
          }}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.name === "Email" ? "_self" : "_blank"}
                rel={social.name === "Email" ? "" : "noopener noreferrer"}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: `0 20px 40px ${social.hoverColor}25`,
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "20px",
                  padding: "30px 25px",
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                  minHeight: "160px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Hover Effect Background */}
                <motion.div
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${social.color}10, ${social.hoverColor}10)`,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                />

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  style={{
                    fontSize: "2.5rem",
                    color: social.color,
                    marginBottom: "15px",
                    transition: "color 0.3s ease",
                    zIndex: 1,
                  }}
                >
                  <IconComponent />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    margin: "0 0 8px 0",
                    zIndex: 1,
                  }}
                >
                  {social.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    margin: 0,
                    textAlign: "center",
                    lineHeight: "1.4",
                    zIndex: 1,
                  }}
                >
                  {social.description}
                </motion.p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "40px" }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  style={{
                    height: "2px",
                    background: `linear-gradient(90deg, ${social.color}, ${social.hoverColor})`,
                    borderRadius: "2px",
                    marginTop: "15px",
                    zIndex: 1,
                  }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            padding: "40px 30px",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "white",
              marginBottom: "15px",
            }}
          >
            Ready to Collaborate?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.9)",
              margin: 0,
              lineHeight: "1.6",
            }}
          >
            Whether you're looking for a software engineer, want to discuss a
            project, or just want to chat about tech - I'd love to hear from
            you! I typically respond within 24 hours.
          </motion.p>
        </motion.div>
      </motion.div>

      <Footer
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};

export default Contact;
