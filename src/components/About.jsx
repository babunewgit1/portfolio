import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-left leading-7">
                I consider myself a hardworking person. To build a challenging
                career in a highly competitive world where sincerity, honesty,
                hard work, and passion will encourage me to develop myself and
                utilize my knowledge and expertise for professional improvement
                in the relevant field and help me achieve personal and
                organizational goals. <br />
                Skill: <br /> ◉ Expert: JavaScript, ES6, React, React Router,
                React Bootstrap, HTML, CSS, Bootstrap, Tailwind CSS. <br /> ◉
                Comfortable: Node.js, Express.js, MongoDB, Firebase
                Authentication, Rest API. <br /> ◉ Familiar: JSON Web Token,
                Google Map. <br /> ◉ Tools: Git, Visual Studio Code, Chrome Dev
                Tool, GitHub, Netlify, Firebase, Photoshop, Figma, Create React
                App, vercel..
              </p>
              <br />
              <br />
              <div>
                <a href="./src/assets/Resume.pdf" download>
                  <button className="btn-primary">Download Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
