import React, { useState } from "react";
import "./about.css";
import about from "../../assets/about.jpg";

const About = () => {
  const [activeSection, setActiveSection] = useState("mainSkills");

  return (
    <section className="about_info" >
      <div className="first__about">
        <div className="about__image">
          <img src={about} alt="about" />
        </div>
      </div>
      <div className="second__about">
        <div className="text__A">

        
        <h1 className="about__text">About Me</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered <a href="#">alteration</a> in some form, by
          injected humour, or randomised words which don't look even slightly
          believable. If you are going to use a passage of Lorem Ipsum,
        </p>
        </div>
        <div className="skills_butt">
          <a
            onClick={() => setActiveSection("mainSkills")}
            className={activeSection === "mainSkills" ? "active" : ""}
          >
            Main Skills
          </a>
          <a
            onClick={() => setActiveSection("awards")}
            className={activeSection === "awards" ? "active" : ""}
          >
            Awards
          </a>
          <a
            onClick={() => setActiveSection("experience")}
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </a>
          <div className="skill__sub">
            <br />
          <a
            onClick={() => setActiveSection("education & Certificates")}
            className={activeSection === "education & Certificates" ? "active" : ""}
          >
            Education & Certificates
          </a>
          </div>
         
        </div>
        <div className=" skill__details">
  
        {activeSection === "mainSkills" && (
          <div className="skill__one">
            <p>
              User experience design - UI/UX
              <br />
              Delight the user and make it work. <br />
              Web and user interface design - Development <br />
              Websites, web experiences, ... <br />
              Interaction design - Animation <br />
              I like to move it move it.
            </p>
          </div>
        )}

        {activeSection === "awards" && (
          <div>
            <p>
              Awwwards.com - Winner <br />
              2019 - 2020 <br />
              CSS Design Awards - Winner
              <br />2017 - 2018 <br />
              Design nominees - site of the day
              <br />2013- 2014
            </p>
          </div>
        )}

        {activeSection === "experience" && (
          <div>
            Sr. Front-end Engineer - Google <br />
            2018 - Current
            <br /> Front-end Engineer - Microsoft <br /> 2017 - 2018
            <br />Software Engineer - Alibaba
            <br />
            2013- 2014
          </div>
        )}

        {activeSection === "education & Certificates" && (
          <div>
            BSc In CSE - ABC University, Los Angeles, CA <br />
            2010 <br />
            Diploma in Computer Science - Gamma Technical Institute <br />
            2009
            <br />Graphic Designer - ABC Institute, Los Angeles, CA
            <br />2007
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default About;
