import React, { useState } from 'react';
import { FaReact, FaSmile, FaHtml5, FaCss3Alt, FaJsSquare, FaPalette, FaRoute } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MemoryGame from './MemoryGame'; // Import your MemoryGame component
import mfz from '../assets/mfz.png'; // Replace with the actual path to your Modern Forms Thumbnail image
import fitapp from '../assets/fitapp.png'; // Replace with the actual path to your Flex Flow App Thumbnail image
import pixel from '../assets/pixel.png'; // Replace with the actual path to your Pixel Creator Thumbnail image

const Projects = () => {
  const [showCover, setShowCover] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.section id="projects" className="portfolio-section">
      <div className="project-card">
        <h2>My Projects</h2>

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
                <button className="start-button" onClick={() => setShowCover(false)}>
                  Start Game
                </button>
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
              <FaPalette size={28} color="#319795" />
              <FaRoute size={28} color="#ca4245" />
            </div>
            <div className="thumbnail-div">
              <p className="thumb-title">Modern Formz Blog</p>
              <p>
                Modern Formz: Where art converges with activism, featuring dynamic visuals and critical conversations.
                Powered by React with React Router for seamless navigation and animated with Framer Motion for engaging
                user experience. A fusion of creativity and societal dialogue.
              </p>
              <img src={mfz} alt="Modern Forms Thumbnail" className="mfz" />
              <a href="https://64e17ef9d46b3e21c2ea9512--sparkly-cactus-7e7a41.netlify.app/" target="_blank" rel="noopener noreferrer">
                DEMO
              </a>
            </div>
          </div>

          <div className="project2">
            <div className="sprite-projects">
              <FaReact size={28} color="#61dafb" />
              <FaJsSquare size={28} color="#f0db4f" />
              <FaPalette size={28} color="#319795" />
              <FaRoute size={28} color="#ca4245" />
            </div>
            <div className="thumbanail-div">
              <p className="thumb-title">Flex Flow</p>
              <p>
                This fitness app uses ReactJS and Redux for a dynamic front-end with Material-UI components for design.
                Responsive CSS media queries adapt the app to various screens. It includes component structuring, state
                management, data handling, and interactive charts for workout progress. Dark/light mode themes offer
                customization through CSS variables and media queries.
              </p>
              <img src={fitapp} alt="Flex Flow App Thumbnail" className="mfz" />
              <a href="https://64e8068069b7c717849c6577--superb-cassata-f33e24.netlify.app/" target="_blank" rel="noopener noreferrer">
                DEMO
              </a>
            </div>
          </div>

          <div className="project3">
            <div className="sprite-projects">
              <FaReact size={28} color="#61dafb" />
              <FaJsSquare size={28} color="#f0db4f" />
              <FaPalette size={28} color="#319795" />
            </div>
            <div className="thumbanail-div">
              <p className="thumb-title">Pixel Creator</p>
              <p>(Not for phones/tablet)</p>
              <br />
              <p>
                Pixel Pal Creator is a React.js app for creating pixel art with ease. It provides a responsive canvas with
                customizable grids, real-time painting, and undo capabilities. You can save your artwork as JPEG and even
                import/export pixel art using JSON files. With a user-friendly interface and responsive design,
                expressing your creativity through pixel art has never been smoother.
              </p>
              <img src={pixel} alt="Flex Flow App Thumbnail" className="mfz" />
              <a href="https://64ebfb208de23f3e7e29b64c--endearing-pony-bcc5fb.netlify.app/" target="_blank" rel="noopener noreferrer">
                Pixel Creator Demo
              </a>
            </div>
          </div>

          {/* Add more project cards */}
        </Slider>
      </div>
    </motion.section>
  );
};

export default Projects;
