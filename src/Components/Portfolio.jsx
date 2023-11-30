import React, { useState, useEffect, useMemo, useRef } from "react";
import { FaReact, FaSmile, FaHtml5, FaCss3Alt, FaJsSquare, FaPalette, FaRoute,} from "react-icons/fa";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "../Components/Portfolio.css";
import AboutMe from "./AboutMe";
import MemoryGame from "../Components/MemoryGame.jsx";
import Sprite from './Sprite.jsx';
import InteractiveHeading from "./InteractiveHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "./Projects";
import { Helmet } from "react-helmet";


const Portfolio = () => {
  const sectionsRef = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null)
  };
  
  const [activeSection, setActiveSection] = useState(null); // Include activeSection state

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.7 });

    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current); // Ensure the ref is a DOM element
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const [showCover, setShowCover] = useState(true);

  const navVariants = useMemo(() => ({
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }), []);
  
  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  }), []);
 
  return (
    <div className="portfolio-container">
      <Helmet>
        <meta name="description" content="Passionate Front-End Developer with expertise in crafting engaging and responsive web experiences. Proficient in HTML, CSS, JavaScript, and React.js. Skilled in UI/UX design principles, web accessibility, and performance optimization. Explore my portfolio to see projects showcasing creativity, interactivity, and clean code." />
      </Helmet>
    <div>
      <motion.nav
        className="portfolio-nav"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <ul>
          <div className="sect-links">
          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about">About</a>
          </li>
          </div>
          <div className="sect-links">
          <li className={activeSection === "projects" ? "active" : ""}>
            <a href="#projects">Projects</a>
          </li>
          </div>
          <div className="sect-links">
          <li>
          <a
        href="https://www.dropbox.com/scl/fi/yqay7ar1ex3x33havnh71/Portfolio-Stewart-Front-End-React-Developer.pdf?rlkey=xrucc1t9t4iae6d574g1vbtjq&dl=0"
        target="_blank"  // This will open the link in a new tab/window
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
        </li>
</div>

        </ul>
      </motion.nav>
      </div>
      <motion.section id="about" className="portfolio-section">
      
        <AboutMe />
      </motion.section>
      <motion.section id="skills" className="portfolio-section">
     
       
        <motion.h2 className='ss'variants={itemVariants}>Specialized Skills</motion.h2>
        <ul className="skills-list">
          
  <li>UI/UX Design Principles</li>
 
  <li>Web Accessibility (WCAG)</li>
  <li>Cross-browser Compatibility</li>
  <li>Sound Design</li>
 
  <li>Performance Optimization</li>

  <li>Debugging</li>

  <li>Animation Libraries (Framer Motion, GSAP)</li>

        </ul>
      </motion.section>
  <Projects />
    </div>
  );
};

const TechStackText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <motion.div
      ref={ref}
      className={`tech-stack-text ${inView ? "in-view" : ""}`}
    >
      My Tech Stack
    </motion.div>
  );
};

export default Portfolio;
