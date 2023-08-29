import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./InteractiveHeading.css"; // Import your custom CSS for styling

const icons = [
  { icon: FaHtml5, color: "#E34F26" },
  { icon: FaCss3Alt, color: "#FF69B4" },
  { icon: FaJs, color: "#F0DB4F" },
  { icon: FaReact, color: "#61DAFB" },
  { icon: FaNodeJs, color: "#6CC24A" },
  { icon: FaDatabase, color: "#4479A1" },
  { icon: FaGitAlt, color: "#F34F29" },
];

const InteractiveHeading = () => {
  const [iconPositions, setIconPositions] = useState([]);
  const radius = 100; // Adjust the radius of the circle

  useEffect(() => {
    const calculateIconPositions = () => {
      const totalIcons = icons.length;
      const angleIncrement = (2 * Math.PI) / totalIcons;

      const positions = icons.map((_, index) => {
        const angle = angleIncrement * index;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return { x, y };
      });

      setIconPositions(positions);
    };

    calculateIconPositions();
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="animated-background"
    >
      {iconPositions.map((position, index) => {
        const { x, y } = position;
        const icon = icons[index];

        return (
          <motion.div
            key={index}
            className="background-icon"
            style={{
              color: icon.color,
              left: `calc(47% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            initial={{
              x: 415,
              y: 680,
            }}
            animate={{
              x, 
              y, 
              transition: {
                duration: 10,
                repeat: 0,
               
              },
            }}
          >
            <icon.icon />
          </motion.div>
        );
      })}
      <div className="overlay" />

    </motion.div>
  );
};

export default InteractiveHeading;
