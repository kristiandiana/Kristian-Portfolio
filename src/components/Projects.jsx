import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";

const Projects = ({ currentSection, setCurrentSection }) => {
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
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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

  const projects = [
    {
      title: "TrafficLightRL",
      github: "https://github.com/McMasterAI2024-2025/TrafficLightRL",
      researchPaper:
        "https://drive.google.com/file/d/19SGuZadoFl0zRNdO8E5Pmin_YlY_-vWb/view?usp=sharing",
      image: "/src/assets/trafficlightrl.gif",
      description:
        "Led a 5-person team to develop a reinforcement learning agent that reduced CO2 emissions by 12% and idling times by 26% using SUMO and Stable-Baselines3. Presented as keynote speaker at CUCAI 2025 (300+ attendees) and co-authored research paper detailing smart-city applications.",
      highlights: [
        "Reduced CO2 emissions by 12% and idling times by 26%",
        "Presented at CUCAI 2025 as keynote speaker (300+ attendees)",
        "Co-authored research paper on smart-city applications",
        "Team leadership and project management",
      ],
      technologies: [
        "Python",
        "SUMO",
        "Stable-Baselines3",
        "Reinforcement Learning",
        "Research",
      ],
      color: "#667eea",
      order: 1,
    },
    {
      title: "Just The Instructions",
      chromeStore:
        "https://chromewebstore.google.com/detail/lfoilkbebjommkenfehehofgoiopmenn?utm_source=item-share-cb",
      github: "https://github.com/kristiandiana/JustTheInstructions",
      image: "/src/assets/justtheinstructions.jpg",
      description:
        "Shipped a Chrome Extension that extracts step-by-step instructions from recipes and tutorials using a fully client-side ONNX model, delivering sub-500ms inference via a lightweight 2.5MB architecture. Engineered web scraping pipeline to curate 1M+ instructional sentences.",
      highlights: [
        "1000+ active users with 4.9/5 average rating (50+ reviews)",
        "Google's Featured badge on Chrome Web Store",
        "Sub-500ms inference with 2.5MB architecture",
        "99.6% classification accuracy on 100k-sample test set",
      ],
      technologies: [
        "ONNX",
        "WebAssembly",
        "BeautifulSoup",
        "Docker",
        "GCP",
        "Chrome Extension",
      ],
      color: "#667eea",
      order: 2,
    },
    {
      title: "Ocular Disease Identifier",
      github: "https://github.com/DSC-McMaster-U/Ocular-Disease-Identifier",
      image: "/src/assets/ocular.gif",
      description:
        "As Team Lead of McMaster's Google Developers Student Club, I hired and led a 10-person development team to build a full-stack ML web app, driving delivery through Scrum-based sprints, GitHub issue tracking, and setting up scalable infrastructure with CI/CD pipelines.",
      highlights: [
        "Led 10-person development team",
        "Scalable infrastructure with CI/CD pipelines",
        "Google Cloud Platform Kubernetes deployments",
        "Scrum-based project management",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "React",
        "GCP",
        "Kubernetes",
        "CI/CD",
      ],
      color: "#667eea",
      order: 3,
    },
    {
      title: "SparkSlides",
      github: "https://github.com/IainMac32/GDSChackathon",
      devpost: "https://devpost.com/software/sparkslides",
      description:
        "Awarded 'Best Accessibility Hack' in McMaster's GDG Solution Challenge 2024 (top 10% of 30+ projects). Empowered non-technical users to generate Google Slides presentations through dictation, achieving 5x faster creation (<60s vs. 5+ min) using real-time preview/editing workflow.",
      highlights: [
        "Awarded 'Best Accessibility Hack' (top 10% of 30+ projects)",
        "5x faster presentation creation (<60s vs. 5+ min)",
        "Real-time preview/editing workflow",
        "Integration with OpenAI GPT-4.0/Whisper APIs",
      ],
      technologies: [
        "React",
        "Flask",
        "OpenAI GPT-4.0",
        "Whisper API",
        "Google Slides API",
        "Google Image Search API",
      ],
      color: "#667eea",
      order: 4,
    },
    {
      title: "Second Brain for Students",
      github: "https://github.com/McMasterAI/Second-Brain",
      description:
        "Contributed to an NLP-based retrieval-augmented generation (RAG) system that reduced token usage by 45% via efficient context retrieval using LangChain and Pinecone. Showcased at CUCAI 2024 and allows users to store documents and receive answers to relevant questions.",
      highlights: [
        "Reduced token usage by 45% via efficient context retrieval",
        "Showcased at CUCAI 2024",
        "Frontend and API development using React and Flask",
        "Document storage and intelligent question answering",
      ],
      technologies: [
        "Python",
        "LangChain",
        "Pinecone",
        "React",
        "Flask",
        "NLP",
        "RAG",
      ],
      color: "#667eea",
      order: 5,
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
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Header */}
        <motion.div
          variants={projectVariants}
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
            Featured Projects
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
            Showcasing technical leadership and impactful solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            marginBottom: "80px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "grid",
                gridTemplateColumns:
                  project.image && !isMobile ? "1fr 2fr" : "1fr",
                gap: isMobile ? "20px" : "30px",
                alignItems: "center",
              }}
            >
              {/* Project Image - Only show if image exists */}
              {project.image && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  style={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    order: 1, // Image first on mobile
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      borderRadius: "15px",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </motion.div>
              )}

              {/* Project Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                style={{
                  order: project.image ? 2 : 1, // Content second on mobile if image exists
                }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: "700",
                    color: project.color,
                    marginBottom: "15px",
                  }}
                >
                  {project.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#4a4a4a",
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </motion.p>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
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
                    }}
                  >
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ marginBottom: "5px" }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  style={{ marginBottom: "25px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: `${project.color}20`,
                          color: project.color,
                          padding: "4px 12px",
                          borderRadius: "20px",
                          fontSize: "0.8rem",
                          fontWeight: "500",
                          border: `1px solid ${project.color}40`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  style={{
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  {project.chromeStore && (
                    <motion.a
                      href={project.chromeStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: "linear-gradient(135deg, #4285f4, #34a853)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 15px rgba(66, 133, 244, 0.3)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Chrome Store
                    </motion.a>
                  )}

                  {project.devpost && (
                    <motion.a
                      href={project.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: "linear-gradient(135deg, #003e54, #667eea)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 15px rgba(0, 62, 84, 0.3)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Devpost
                    </motion.a>
                  )}

                  {project.researchPaper && (
                    <motion.a
                      href={project.researchPaper}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: "linear-gradient(135deg, #ea4335, #fbbc04)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 15px rgba(234, 67, 53, 0.3)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      Research Paper
                    </motion.a>
                  )}

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: "linear-gradient(135deg, #333, #666)",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "25px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                    GitHub
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};

export default Projects;
