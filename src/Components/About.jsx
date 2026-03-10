import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-text">

          <h1>About Me</h1>

          <p>
            Hello! My name is Habib Ullah. I am a passionate Frontend Developer
            who enjoys building modern, responsive, and interactive websites.
            I mainly work with technologies like React, JavaScript, HTML, and CSS
            to create clean and user-friendly web interfaces.
          </p>

          <p>
            My journey in web development started with learning the basics of
            HTML and CSS. After that I explored JavaScript and later moved to
            React where I started building dynamic web applications and modern
            user interfaces.
          </p>

          <p>
            I love experimenting with animations, UI design, and modern layouts.
            My goal is to become a professional React developer and work on
            real-world projects that solve problems and help people.
          </p>

          <p>
            Currently I am improving my skills by building projects like
            portfolio websites, quiz apps, weather apps, and dynamic websites
            using APIs. I believe that practice and consistency are the keys to
            becoming a great developer.
          </p>

          <button>Learn More</button>

        </div>

        <div className="about-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
            alt="developer"
          />
        </div>

      </div>

    </section>
  );
};

export default About;