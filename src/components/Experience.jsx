import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";

const Experience = ({ currentSection, setCurrentSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const workExperience = [
    {
      title: "Software Engineer Intern",
      company: "GCT Maintenance Solutions Inc.",
      location: "Canada (Remote)",
      duration: "May 2025 – Aug. 2025",
      achievements: [
        "Enabled onboarding of company's first paying customers by launching tiered plans with Stripe Checkout",
        "Reduced load time from 2.5s to <100ms on 10k+ row datasets with server-side pagination",
        "Shipped full-stack Checksheets module, reducing UI latency from >500ms to <100ms",
      ],
      technologies: ["Stripe", "TypeScript", "Redux", "MySQL", "Knex"],
      color: "#667eea",
    },
  ];

  const education = [
    {
      institution: "McMaster University",
      degree: "Software and Biomedical Engineering",
      status: "Third Year Student",
      location: "Hamilton, Ontario",
      graduation: "Apr 2027",
      highlights: [
        "Focus on software engineering and biomedical applications",
        "Active in AI Society and Google Developers Student Club",
        "Coursework in data structures, algorithms, and system design",
      ],
      color: "#667eea",
    },
  ];

  const techSkills = {
    languages: [
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Java", icon: "☕" },
      { name: "C/C++", icon: "⚙️" },
      { name: "SQL", icon: "🗄️" },
    ],
    frameworks: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "Flask", icon: "🌶️" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Bootstrap", icon: "📱" },
    ],
    tools: [
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "📝" },
      { name: "GCP", icon: "☁️" },
      { name: "Kubernetes", icon: "⚓" },
      { name: "VS Code", icon: "💻" },
      { name: "Azure", icon: "🔵" },
    ],
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
        {/* Header */}
        <motion.div
          variants={itemVariants}
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
            Experience
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
            Professional experience and technical expertise
          </motion.p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {workExperience.map((job, index) => (
            <motion.div
              key={job.title}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: `0 20px 40px ${job.color}25`,
              }}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: job.color,
                      margin: "0 0 5px 0",
                    }}
                  >
                    {job.title}
                  </h2>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#333",
                      margin: "0 0 5px 0",
                    }}
                  >
                    {job.company}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      margin: "0",
                    }}
                  >
                    {job.location} • {job.duration}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                style={{ marginBottom: "20px" }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "10px",
                  }}
                >
                  Key Achievements:
                </h4>
                <ul
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    paddingLeft: "20px",
                    margin: 0,
                    lineHeight: "1.5",
                  }}
                >
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} style={{ marginBottom: "5px" }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {job.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: `${job.color}20`,
                        color: job.color,
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                        border: `1px solid ${job.color}40`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: `0 20px 40px ${edu.color}25`,
              }}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: edu.color,
                      margin: "0 0 5px 0",
                    }}
                  >
                    {edu.degree}
                  </h2>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#333",
                      margin: "0 0 5px 0",
                    }}
                  >
                    {edu.institution}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      margin: "0",
                    }}
                  >
                    {edu.status} • {edu.location} • Graduating {edu.graduation}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <ul
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    paddingLeft: "20px",
                    margin: 0,
                    lineHeight: "1.5",
                  }}
                >
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} style={{ marginBottom: "5px" }}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={itemVariants}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "#667eea",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Technical Skills
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {Object.entries(techSkills).map(
              ([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + categoryIndex * 0.1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "15px",
                      textTransform: "capitalize",
                    }}
                  >
                    {category}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "#f8f9fa",
                          padding: "8px 12px",
                          borderRadius: "15px",
                          border: "1px solid #e9ecef",
                        }}
                      >
                        <span style={{ fontSize: "1.2rem" }}>{skill.icon}</span>
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            color: "#333",
                          }}
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      <Footer
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};

export default Experience;
