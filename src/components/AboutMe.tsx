import React from 'react'
import '../components/AboutMe.css'

export const AboutMe = () => {

    const aboutme: {
        id: number;
        name: string;
        position: string;
        title: string;
        technology: string;
        subtitle: string;
        tools: string;
    
      }[] = [
    
        {
          id: 0,
          name: "Ronan Sibunga",
          position: "Frontend Developer",
          title: "Skills",
          technology: "Front-end: ReactJS, Ionic-React, Javascript, Typescript, HTML 5, CSS3, Git",
          subtitle: 'Web Design',
          tools: 'Adobe Photoshop, Figma'
        },
    
      ];

  return (

    <div className="about-me-container">
    <h2 className="name-content">{aboutme[0].name}</h2>
    <h3 className="position-title">{aboutme[0].position}</h3>
    <h3 className="skills-content">{aboutme[0].title}</h3>
    
    <h3 className="fe-content">
    {aboutme[0].technology}
    </h3>
    <h3 className="web-content">{aboutme[0].subtitle}</h3>
    <h3 className="web-design-content"> {aboutme[0].tools}</h3>
    <hr className="hr-line"></hr>
  </div>

  )
}
