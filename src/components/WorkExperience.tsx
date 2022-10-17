import React from 'react'
import '../components/WorkExperience.css'
const WorkExperience = () => {



    const workExperience: {
        id: number;
        name: string;
       
      }[] = [
    
        {
          id: 0,
          name: "Frontend Developer (Present) - Freelancing.",
      
        },
        {
          id: 2,
          name: " Environmental Management Bureau (2015-2022) - Technical Assistant.",
      
        },
        {
          id: 3,
          name: "Department of Environment and Natural Resources - DENR (Foreign Assisted and Special Project Office - FASPO) (2011-2014) - Information Technology Specialist.",
      
        },
    
      ];



  return (

    <div className="work-experience-wrapper">
    <h4 className="work-experience-section">Work Experience</h4>
  {workExperience.map((workExperience, index) => (
    <div className="work-experience-container" key={index}>

      <h3 className="job-experience-section">
        {workExperience.name}
      </h3>
    </div>
      ))}
  </div>

  )
}

export default WorkExperience