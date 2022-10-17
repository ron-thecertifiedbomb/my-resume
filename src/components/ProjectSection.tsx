import React from 'react'
import '../components/ProjectSection.css'
const ProjectSection = () => {

    const projectSection: {
        id: number;
        name: string;
        para: string;
      }[] = [
        {
          id: 0,
          name: "Professional Portfolio",
          para: "A personal webpage serving as a portfolio for my work, also to showcase my expertise and professionalism as front-end developer.",
        },
    
        {
          id: 1,
          name: "Work Hero App",
          para: "Optimizing the user experience, Developing and maintaining the user interface, Implementing design on mobile websites, Fixing bugs and testing for usability.",
        },
      ];

  return (


    <div className="project-section-contianer">
    <div className="project-section-box">
      <h4 className="project-section">Projects</h4>

      {projectSection.map((projectSection, index) => (
        <div className="project-section-content" key={index}>
          <h3 className="project-section-title">{projectSection.name}</h3>
          <ul className="project-list">
            <li>
              <p>{projectSection.para}</p>
            </li>

          </ul>
        </div>
      ))}


    </div>
  </div>


    
  )
}

export default ProjectSection