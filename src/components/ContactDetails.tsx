import React from "react";
import "../components/ContactDetail.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMobile } from "react-icons/ai";

const ContactDetails = () => {
  
  const contactDetails: {
    id: number;
    icon: JSX.Element;
    link: JSX.Element;
  }[] = [
    {
      id: 0,
      icon: <AiOutlineMobile />,
      link: <a href="/">09913817033</a>,
    },

    {
      id: 1,
      icon: <AiOutlineMail />,
      link: <a href="www.google.com" target="_blank">ronan.ramos.sibunga</a>,
    },

    {
      id: 2,
      icon: <AiFillLinkedin />,
      link: <a href="www.linkedin.com">Ronan Sibunga</a>,
    },
    {
      id: 3,
      icon: <GoMarkGithub />,
      link: <a href="www.github.com">ron-thecertifiedbomb</a>,
    },

    {
      id: 4,
      icon: <IoLogoTwitter />,
      link: <a href="www.twitter.com">@ronansibunga</a>,
    },
  ];

  return (
    <>
      <div className="contact-details-container">
        <h4 className="contact-heading">CONTACT DETAILS</h4>
        <h3 className="address-content">
          Address: B 12 Lot 24 Ph 2B Ciudad Real CSJDM, Philippines.
        </h3>
      </div>

      <div className="contact-details-wrapper">
        <div className="contact-details-main-wrapper">
          {contactDetails.map((contactDetails, index) => (
            <div className="content-container" key={index}>
              <div className="icon-holder">{contactDetails.icon}</div>
              <h3 className="link-content">{contactDetails.link}</h3>
            </div>
          ))}
        </div>
      </div>

      <hr></hr>

      <h4 className="education-heading">Education</h4>
      <ul>
        <li className="education-content">
          Bachelor of Science in Computer Science (2013).
        </li>
      </ul>
    </>
  );
};

export default ContactDetails;
