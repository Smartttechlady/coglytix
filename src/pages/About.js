import React from 'react'
import './About.css'
import { FaBrain, FaRobot, FaGlobe, FaUsers,FaEye,FaBullseye  } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import videoBg from "./../Video/videobg2.mp4";




const values = [
    { name: "Openness", icon: './..//images/openness.svg' },
    { name: "Empathy", icon: './..//images/Empathy.svg' },
    { name: "Responsibility", icon: './..//images/Responsibility.svg' },
    { name: "Innovation", icon: './..//images/Innovation.svg' },
    { name: "Contribution", icon: './..//images/contribution.svg' },
    { name: "Collaboration", icon: './..//images/Collaboration.svg' },
    { name: "Impact", icon: './..//images/Impact.svg' },
];

function About() {
  
    return (
        <div className="about-page">
            {/* Banner Section */}
            <section className="banner-section">

                <video className="bg-video" autoPlay loop muted type="video/mp4" src={videoBg}></video>
                <div className="overlay"></div>
                <div className="container text-center content">
                    <h2 className="about-title1">Welcome To Coglytix</h2>
                    <p className="banner-text">
                Revolutionizing industries through Data, AI, and Innovation.
              </p>
                </div>
            </section>

            {/* Main Content */}
         {/* About Section - Centered */}
      <Container className="content-container">
        <Row className="justify-content-center text-center">
          <Col md={10}>
            <h3 className="section-title about-coglytix">About Coglytix</h3>
            <p className="section-text">
              Coglytix is a trailblazing research, intelligence, and product engineering lab at the
              cutting edge of Data, Analytics, Robotics, and AI. Fueled by ingenuity, Coglytix drives
              transformation across industries by delivering revolutionary solutions that empower dynamic
              startups, large enterprises, institutions, and non-profits alike. Through state-of-the-art
              technology and forward-thinking research, Coglytix is shaping the future, making a lasting
              impact on industries, communities, and individuals alike.
            </p>
          </Col>
        </Row>

        {/* Vision Section - Centered */}
        <Row className="justify-content-center" >
          <Col md={6} className="vision-container" >
            <div className="vision-box">
              <h3 className="section-title">
                <FaEye className="icon-faeye" /> Our Vision
              </h3>
              <p className="section-text">
                To be a global leader in pioneering and engineering data-driven, AI-powered products and
                technological innovations, transforming industries and fostering sustainable progress across
                startups, enterprises, and institutions.
              </p>
            </div>
          </Col>
        </Row>

        {/* Mission Section - Centered */}
        <Row className="justify-content-center" >
          <Col md={6} className="mission-container">
            <div className="mission-box">
              <h3 className="section-title">
                <FaBullseye className="icon-fabullseye" /> Our Mission
              </h3>
              <p className="section-text">Intelligence Impact.</p>
            </div>
          </Col>
        </Row>

        {/* Values Section - Centered & Background Applied */}
        <Row className="justify-content-center" >
          <Col md={6} className="values-container">
            <div className="values-box">
              <h3 className="values-title">
                <FaUsers className="icon-fausers" /> Our Values
              </h3>
              <div className="values-list">
                {values.map((value, index) => (
                  <div className="value-item" key={index}>
                    <img src={value.icon} alt={value.name} className="value-icon" />
                    <span className="value-name">{value.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>  


            {/* Operating Model */}
            <section className="container operating-model"  >
                <h2 className="text-center" >Operating Model - OPEM</h2>
                <div className="row text-center">
                    <div className="col-md-6 col-lg-3">
                        <div className="opem-item">
                            <FaBrain className="icon" />
                            <h3>Research</h3>
                            <p>Exploring domain-specific knowledge to refine insights and discover new frontiers.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="opem-item">
                            <FaRobot className="icon" />
                            <h3>Core</h3>
                            <p>Crafting innovative, AI-powered products through expert development.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="opem-item">
                            <FaUsers className="icon" />
                            <h3>Bespoke</h3>
                            <p>Dynamic, on-demand business consulting for startups and enterprises.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="opem-item">
                            <FaGlobe className="icon" />
                            <h3>Education</h3>
                            <p>Empowering communities through COGI initiatives in AI and Robotics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About