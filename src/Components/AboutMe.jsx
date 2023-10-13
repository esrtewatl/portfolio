import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./AboutMe.css"; // Import custom CSS styles for the About Me section
import Quotes from "./Quotes";

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
        damping: 10, // Adjust damping for the bounce effect
        duration: 1.5,
        delay: 1, // Delay the animation
      },
    },
  };

  const [isSummaryInView, setIsSummaryInView] = useState(false);
  const summaryRef = useRef();

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsSummaryInView(true);
      }
    });
  };

  useEffect(() => {
    const options = {
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (summaryRef.current) {
      observer.observe(summaryRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (summaryRef.current) {
        observer.unobserve(summaryRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      className="about-me-section"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Software Developer</h2>
      <motion.h1 className="name" variants={nameVariants} initial="hidden" animate="visible">
        Erica Stewart
      </motion.h1>
      <Quotes />
      <div className="summary" ref={summaryRef}>
        {isSummaryInView && (
          <motion.p className="summaryP" variants={itemVariants}>
        My passion for web design setting me on a five-year journey as a dedicated Frontend React Developer. I specialize in creating engaging web interfaces with a focus on animation and refined UX/UI design to provide exceptional user experiences. Proficient in JavaScript, CSS3, and HTML5, I prioritize compatibility across browsers and adhere to accessibility and design standards. My toolkit includes industry-standard tools such as Figma, Framer, Bootstrap, and Chakra UI, enabling me to craft clean, maintainable code and contribute comprehensively to the development process.
          </motion.p>
        )}
      </div>
    </motion.section>
  );
};

export default AboutMe;
