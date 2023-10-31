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

import { Helmet } from "react-helmet";
import fitapp from '../assets/fitapp.png';
import mfz from "../assets/mfz.png"
import pixel from '../assets/Pixel.png';
import UC from "./UC.JSX";
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
    }, { threshold: 0.5 });

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="portfolio-container">
      <Helmet>
        <meta name="description" content="Passionate Front-End Developer with expertise in crafting engaging and responsive web experiences. Proficient in HTML, CSS, JavaScript, and React.js. Skilled in UI/UX design principles, web accessibility, and performance optimization. Explore my portfolio to see projects showcasing creativity, interactivity, and clean code." />
      </Helmet>
      <UC />
      <motion.nav
        className="portfolio-nav"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <ul>
          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about">About</a>
          </li>
          <li className={activeSection === "skills" ? "active" : ""}>
            <a href="#skills ">Skills</a>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <a href="#projects">Projects</a>
          </li>
          
          <li>
          <a
        href="https://www.dropbox.com/scl/fi/zyf274bq1jh8ol7znwyxa/Portfolio-Stewart-Front-End-React-Developer.pdf?rlkey=q97cveze99wdgniaknd3ik5p3&dl=0"
        target="_blank"  // This will open the link in a new tab/window
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
        </li>


        </ul>
      </motion.nav>
      <motion.section id="about" className="portfolio-section">
      
        <AboutMe />
      </motion.section>
      <motion.section id="skills" className="portfolio-section">
     
       
        <motion.h3 className='ss'variants={itemVariants}>Specialized Skills</motion.h3>
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
      <section id="projects" className="portfolio-section">
        <h2>My Projects</h2>
        <div className="project-card">
          <div className="project">
            <div className="memory-game-container">
              {showCover ? (
                <div className="project">
                  <h2>Memory Game</h2>
                  <div className="tech-list">
                    <div className="tech-item">
                      <FaReact size={32} />
                      <span>React</span>
                    </div>
                    <div className="tech-item">
                      <FaSmile size={32} />
                      <span>React Icons</span>
                    </div>
                    <div className="tech-item">
                      <FaHtml5 size={32} />
                      <span>HTML</span>
                    </div>
                    <div className="tech-item">
                      <FaCss3Alt size={32} />
                      <span>CSS</span>
                    </div>
                    <div className="tech-item">
                      <FaJsSquare size={32} />
                      <span>JavaScript</span>
                    </div>
                  </div>
                  <button className="start-button" onClick={() => setShowCover(false)}>Start Game</button>
                </div>
              ) : (
                <MemoryGame />
              )}
            </div>
          </div>
          <Slider {...settings} className="project-carousel">
            <div className="project1">
              <div className="sprite-projects">
            <FaReact size={28} color="#61dafb" />
      <FaJsSquare size={28} color="#f0db4f" />
      <FaPalette  size={28} color="#319795" />
      <FaRoute  size={28} color="#ca4245" />
      </div>
              <div className="thumbnail-div">
               <p className="thumb-title"> Modern Formz Blog</p>
              <p>Modern Formz: Where art converges with activism, featuring dynamic visuals and critical conversations. Powered by React with React Router for seamless navigation and animated with Framer Motion for engaging user experience. A fusion of creativity and societal dialogue.</p>
            
       
                <img src={mfz} alt="Modern Forms Thumbnail" className="mfz" />
                 <a href="https://64e17ef9d46b3e21c2ea9512--sparkly-cactus-7e7a41.netlify.app/"  target="_blank" rel="noopener noreferrer">DEMO</a>
              </div>
              {/* ... */}
            </div>
            <div className="project2">
              <div className="sprite-projects">
            <FaReact size={28} color="#61dafb" />
      <FaJsSquare size={28} color="#f0db4f" />
      <FaPalette  size={28} color="#319795" />
      <FaRoute  size={28} color="#ca4245" />
      </div>
              <div className="thumbanail-div">
              <p className="thumb-title">Flex Flow</p>
              <p>This fitness app uses ReactJS and Redux for a dynamic front-end with Material-UI components for design. Responsive CSS media queries adapt the app to various screens. It includes component structuring, state management, data handling, and interactive charts for workout progress. Dark/light mode themes offer customization through CSS variables and media queries.</p>
              <img src={fitapp} alt="Flex Flow App Thumbnail" className="mfz" />
                 <a href="https://64e8068069b7c717849c6577--superb-cassata-f33e24.netlify.app/"  target="_blank" rel="noopener noreferrer">DEMO</a>

              {/* ... */}
            </div>
            </div>
            <div className="project3">
              <div className="sprite-projects">
            <FaReact size={28} color="#61dafb" />
      <FaJsSquare size={28} color="#f0db4f" />
      <FaPalette  size={28} color="#319795" />
     
      </div>
              <div className="thumbanail-div">
              <p className="thumb-title">Pixel Creator</p>
             <p> (Not for phones/tablet)</p> <br/>
              <p>Pixel Pal Creator is a React.js app for creating pixel art with ease. It provides a responsive canvas with customizable grids, real-time painting, and undo capabilities. You can save your artwork as JPEG and even import/export pixel art using JSON files. With a user-friendly interface and responsive design, expressing your creativity through pixel art has never been smoother.</p>
              <img src={pixel} alt="Flex Flow App Thumbnail" className="mfz" />
                 <a href="https://64ebfb208de23f3e7e29b64c--endearing-pony-bcc5fb.netlify.app/"  target="_blank" rel="noopener noreferrer">Pixel Creator Demo</a>

              {/* ... */}
            </div>
            </div>
            {/* Add more project cards */}
          </Slider>
        </div>
      </section>
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
