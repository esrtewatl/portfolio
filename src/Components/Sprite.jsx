import React from "react";
import { FaLaptopCode, FaServer, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Sprite.css";

const Sprite = () => {
  const skillsVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const skillIconVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="sprite-container">
      <div className="sprite">
        <div className="front-end">
          <div className="skill">
            <FaLaptopCode color="orange" className="icon" />
            Front End
          </div>
          <motion.div className="skills" variants={skillsVariants} initial="hidden" animate="visible">
            <motion.div variants={skillIconVariants} className="skill-icon">
              <FaHtml5 color="#E44D26" size={64} />HTML
            </motion.div>
            <motion.div variants={skillIconVariants} className="skill-icon">
              <FaCss3Alt color="#2965F1" size={64} />CSS
            </motion.div>
            <motion.div variants={skillIconVariants} className="skill-icon">
              <FaJsSquare color="#F0DB4F" size={64} />Javascript
            </motion.div>
            <motion.div variants={skillIconVariants} className="skill-icon">
              <FaReact color="#61DAFB" size={64} />React
            </motion.div>
          </motion.div>
        </div>
        <div className="back-end">
          <div className="skill">
            <FaServer className="icon skillb" color="orange" />
            Back-end
          </div>
          <motion.div className="skills" variants={skillsVariants} initial="hidden" animate="visible">
            <motion.div variants={skillIconVariants} className="skill-icon">
              <FaNodeJs color="#68A063" size={64} />Nodejs
            </motion.div>
            <motion.div variants={skillIconVariants} className="skill-icon">
              <FaCodeBranch color="#6e5494" size={64} />API
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sprite;
