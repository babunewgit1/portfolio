import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "HTML",
      level: "Advance",
      count: 90,
    },
    {
      logo: "CSS",
      level: "Advance",
      count: 90,
    },
    {
      logo: "Bootstrap",
      level: "Advance",
      count: 80,
    },
    {
      logo: "Tailwind",
      level: "Advance",
      count: 75,
    },
    {
      logo: "Javascript",
      level: "Advance",
      count: 70,
    },
    {
      logo: "jQuery",
      level: "Intermediate",
      count: 65,
    },
    {
      logo: "React js",
      level: "Advance",
      count: 85,
    },
    {
      logo: "Node.js,",
      level: "Basic",
      count: 35,
    },
    {
      logo: "Express.js",
      level: "Basic",
      count: 45,
    },
    {
      logo: "MongoDB",
      level: "Basic",
      count: 30,
    },
    {
      logo: "Firebase",
      level: "Basic",
      count: 30,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <p>{skill.logo}</p>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
