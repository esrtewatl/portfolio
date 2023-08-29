import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Action.css";

const Action = () => {
  return (
    <div className="cta-container">
      <div className="cta-icons">
        <a href="https://github.com/esrtewatl" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/erica-stewart" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
        <a href="https://twitter.com/codebrewatl" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={32} />
        </a>
        <a href="mailto:erica.stewart770@gmail.com">
          <FaEnvelope size={32} />
        </a>
      </div>
      <p className="cta-text">Connect with me on social media or send me an email!</p>
    </div>
  );
};

export default Action;
