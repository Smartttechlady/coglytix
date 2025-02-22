import React, { useState,  useEffect } from 'react';
import Banner from './../component/Banner'
import { Link } from 'react-router-dom'
import './Home.css'
import centerCircleImg from "./../images/Focus img.svg";
import leftCircleImg from "./../images/Focus img2.svg";
import rightCircleImg from "./../images/Focus img3.svg";
import aiIcon from "./../images/AI icon.svg";
import dataIcon from "./../images/Data icon.svg";
import roboticsIcon from "./../images/Robot icon.svg";
import insightImg from "./../images/Future insight img.svg";
import aiImage from "./../images/Robotics and AI.png";
import profile1 from "./../images/Ellipse 59.png";
import profile2 from "./../images/Ellipse 60.png";
import profile3 from "./../images/Ellipse 61.png";
import profile4 from "./../images/Ellipse 62.png";
import profile5 from "./../images/Ellipse 63.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


const testimonials = [
  {
    id: 1,
    name: "Kelvin Moore",
    role: "Director of Operations, Nexa Corp",
    text: "We partnered with Coglytix for AI-driven automation, and the results were beyond expectations! From predictive analytics to intelligent process automation, their solutions helped us scale effortlessly. Highly recommended!",
    image: profile1,
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "CTO, TechNova",
    text: "Coglytix transformed our business with their AI-driven automation. Their predictive analytics and automation tools gave us a major edge.",
    image: profile2,
  },
  {
    id: 3,
    name: "David Johnson",
    role: "CEO, InnoTech",
    text: "Working with Coglytix was a game-changer. Their AI solutions improved our workflow efficiency and decision-making capabilities.",
    image: profile3,
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Product Manager, NextGen Solutions",
    text: "Coglytix's AI automation helped us scale our business effortlessly. Their innovative approach is exactly what we needed.",
    image: profile4,
  },
  {
    id: 5,
    name: "James Anderson",
    role: "Founder, AI Labs",
    text: "Partnering with Coglytix gave us insights and automation capabilities that helped us stay ahead of the competition.",
    image: profile5,
  },
];







function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  function handleDotClick(index) {
    setActiveIndex(index);
  }

  return (
    <div>
      <div className=' container banner' >
        <Banner />
      </div>


      {/* SECTION 2 */}

      <section className="focus-section">
        <div className="container-75">
          <h2 className="text-center text-light">Our Main Focus</h2>

          {/* Top Section - Three Gradient Circles */}
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
            <img src={leftCircleImg} alt="Left Circle" className="focus-circle small-circle"  data-aos="zoom-out-up" data-aos-duration="3000"/>
            <img src={centerCircleImg} alt="Center Circle" className="focus-circle large-circle"  data-aos="zoom-out-up" data-aos-duration="3000" />
            <img src={rightCircleImg} alt="Right Circle" className="focus-circle small-circle"  data-aos="zoom-out-up" data-aos-duration="3000" />
          </div>

          {/* Bottom Section - Icons with Text */}
          <div className="row text-center mt-4 focusicon-section">
            {/* AI */}
            <div className="col-md-4">
              <img src={aiIcon} alt="AI" className="focus-icon"  data-aos="zoom-out-up" data-aos-duration="3000"/>
              <h4 className="text-light mt-3">AI</h4>
              <p className="text-unmuted">Cutting-edge artificial intelligence solutions transforming industries.</p>
            </div>

            {/* Data */}
            <div className="col-md-4">
              <img src={dataIcon} alt="Data" className="focus-icon" data-aos="zoom-out-up" data-aos-duration="3000" />
              <h4 className="text-light mt-3">Data</h4>
              <p className="text-unmuted">Harnessing the power of data to drive informed decision-making.</p>
            </div>

            {/* Robotics */}
            <div className="col-md-4">
              <img src={roboticsIcon} alt="Robotics" className="focus-icon" data-aos="zoom-out-up" data-aos-duration="3000" />
              <h4 className="text-light mt-3">Robotics</h4>
              <p className="text-unmuted">Innovative robotic solutions enhancing automation and efficiency.</p>
            </div>
          </div>
        </div>
      </section>




      {/* SECTION 3 */}

      <section className="future-insight-section">
        <div className="container-lg insight-text">
          {/* Heading */}
          <h2 className="text-center section-title">
            The Future is Insight: Live and Breathe Data
          </h2>
          {/* Description */}
          <p className="text-center section-description">
            We help businesses process, analyze, and visualize large datasets efficiently,
            uncovering valuable trends and making data-driven decisions without compromising
            security or compliance.
          </p>

          {/* Content Row */}
          <div className="row align-items-center">
            {/* Left Side - Text Content */}
            <div className="col-md-6">
              <h3 className="content-title">Data Driven Insight</h3>
              <p className="content-text">
                What you stand to gain when we analyse your big data:
              </p>
              <ul className="content-list">
                <li>✔ Actionable Insight</li>
                <li>✔ Enhanced Performance</li>
                <li>✔ Competitive Advantage</li>
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="col-md-6 text-center">
              <img src={insightImg} alt="Data Visualization" className="insight-image" data-aos="flip-left" data-aos-duration="3000" />
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4 */}
      <section className="ai-section">
        <div className="container-lg ai-content">
          <div className="row align-items-center ai-container">
            {/* Left Side - Text Content */}
            <div className="col-md-6">
              <h2 className="section-title">
                Artificial Intelligence and Robotics Solutions
              </h2>
              <p className="section-text">
                At Coglytix, we harness the power of Artificial Intelligence and
                Robotics to drive innovation, efficiency, and growth. Partner with
                us to gain cutting-edge automation, smarter decision-making, and a
                competitive edge in your industry.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="col-md-6 text-center">
              <img src={aiImage} alt="AI and Robotics" className="ai-image"  data-aos="flip-left" data-aos-duration="3000"/>
            </div>
          </div>
        </div>
      </section>




      {/* SECTION 5 */}

      <section className="testimonial-section">
        <div className="container-lg ">
          <h2 className="section-title">What Our Clients Say About Us</h2>

          {/* Testimonial Card */}
          <div className="testimonial-card" data-aos="flip-left"data-aos-duration="3000">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="profile-image"
            />
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonials[activeIndex].name}</h3>
              <p className="testimonial-role">{testimonials[activeIndex].role}</p>
              <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
            </div>
          </div>

          {/* Dots for navigation */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 6 */}

      <section className="gradient-section d-flex align-items-center">
        <div className="container-lg">
          <div className="gradient-box d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
            <div className="text-content">
              <h2 className="text-white">The Future is Here</h2>
              <p className="text-white">
                Let’s embark on this transformative journey with you, bringing innovation, efficiency, and limitless possibilities together.
              </p>
            </div>
            <button className="btn btn-primary get-started-btn">Get Started</button>
          </div>
        </div>
      </section>




    </div>
  )
}

export default Home