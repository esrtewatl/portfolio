import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css"; // Import custom CSS styles for the About Me section



// import TypeAnimate from "./TypeAnimate";
const AboutMe = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };
  const nameVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Apply a spring animation
        stiffness: 100, // Adjust stiffness for the bounce effect
        damping: 10,    // Adjust damping for the bounce effect
        duration: 1.5,
        delay: 1,       // Delay the animation
      },
    },
  };


  return (
    <motion.section
      id="about"
      className="about-me-section"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
     {/* <TypeAnimate /> */}
        <h2>Software Developer</h2>  
         <motion.h1
        className="name"
        variants={nameVariants}
        initial="hidden"
        animate="visible"
     
      >
 
        Erica Stewart
      </motion.h1>
   
<div className="summary">

      <motion.p variants={itemVariants}>
     
      Music sparked my web design journey, leading me to 5 years of dedicated experience as a Frontend React Developer. My expertise thrives in crafting engaging web interfaces with animation and sophisticated UX/UI  design, ensuring fantastic user experiences. Proficient in JavaScript, CSS3, and HTML5, I embrace diversity in browser behaviors and prioritize accessibility and design standards. Figma,  Framer, BootStrap and Chakra Ui are my tools of choice, and I thrive on writing clear, maintainable code while contributing to all aspects of the development process.
      </motion.p>
      </div>
  

  
     
     
   

    </motion.section>
  );
};

export default AboutMe;
