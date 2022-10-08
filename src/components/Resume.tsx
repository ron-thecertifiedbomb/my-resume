import React from "react";
import "../components/Resume.css";
import { AboutMe } from "./AboutMe";
import ProjectSection from "./ProjectSection";
import ContactDetails from "./ContactDetails";
import WorkExperience from "./WorkExperience";

const Resume = () => {

  return (
    
    <div className="resume-section">

      <div className="resume-page">

        <div className="top-container-content">

          <div className="left-column">
            <ContactDetails />
          </div>

          <div className="right-column">

            <AboutMe />
            <ProjectSection />
            <WorkExperience />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
