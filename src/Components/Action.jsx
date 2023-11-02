import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Action.css";

const Action = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 2.5, delay: 1.5 }}
      zindex={1}
      className="cta-container"
    >
      <div className="mask"></div> {/* Add the mask div */}
      <div className="cta-icons">
        <a href="https://github.com/esrtewatl" target="_blank" rel="noopener noreferrer">
          <FaGithub className="action-icon" />
        </a>
        <a href="https://www.linkedin.com/in/erica-stewart-416551278/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="action-icon" />
        </a>
        <a href="https://twitter.com/codebrewatl" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="action-icon" />
        </a>
        <a href="mailto:erica.stewart770@gmail.com">
          <FaEnvelope className="action-icon" />
        </a>
      </div>
      <p className="cta-text">Connect with me on social media or send me an email!</p>
    </motion.div>
  );
};

export default Action;
