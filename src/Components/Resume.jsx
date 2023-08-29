import React from "react";
import { Document, Page } from "react-pdf";

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <Document
        file="public/Resume.pdf" // Replace with the actual path to your PDF file
        onLoadSuccess={({ numPages }) => {
          console.log(`Loaded ${numPages} pages`);
        }}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;
