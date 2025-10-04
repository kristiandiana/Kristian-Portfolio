import React from "react";
import { motion } from "framer-motion";
import { FileEarmarkText, Download } from "react-bootstrap-icons";

const Footer = ({ currentSection, setCurrentSection }) => {
  const links = [
    { path: "contact", label: "Contact" },
    { path: "about", label: "About" },
    { path: "experience", label: "Experience" },
    { path: "projects", label: "Projects" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        width: "100%",
        textAlign: "center",
        position: "relative",
        color: "rgba(255, 255, 255, 0.9)",
        marginTop: "60px",
        padding: "40px 20px 10px 20px",
      }}
    >
      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          width: "60%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
          margin: "0 auto 40px",
          transformOrigin: "center",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {links.map((link) => {
            const isActive = currentSection === link.path;
            return (
              <motion.button
                key={link.path}
                onClick={() => setCurrentSection(link.path)}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  color: "#f093fb",
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: isActive
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(255, 255, 255, 0.1)",
                  borderRadius: "25px",
                  padding: "12px 24px",
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {link.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1xfxc0VfBNtWeDMIN4HkHA6KJvUiQM4kN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
              borderRadius: "30px",
              padding: "16px 32px",
              color: "white",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(99, 102, 241, 0.2)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <FileEarmarkText style={{ fontSize: "1.3rem" }} />
            <span>View Resume</span>
            <Download style={{ fontSize: "1rem", opacity: 0.8 }} />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{
            padding: "20px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "0.95rem",
              margin: 0,
              color: "rgba(255, 255, 255, 0.7)",
              fontWeight: "400",
            }}
          >
            &copy; {new Date().getFullYear()} Kristian Diana. All rights
            reserved.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{
              fontSize: "0.85rem",
              margin: "10px 0 0 0",
              color: "rgba(255, 255, 255, 0.5)",
              fontStyle: "italic",
            }}
          >
            Built with React, Framer Motion, and lots of espresso
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "80px",
          height: "80px",
          background: "linear-gradient(45deg, #f093fb, #4facfe)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1.7 }}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "60px",
          height: "60px",
          background: "linear-gradient(45deg, #667eea, #764ba2)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />
    </motion.footer>
  );
};

export default Footer;
