import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCode,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiFirebase, SiPostman } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
      {
        name: "JavaScript",
        icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
      },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-teal-400 text-5xl" />,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-5xl" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-400 text-5xl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600 text-5xl" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-500 text-5xl" />,
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
      { name: "VSCode", icon: <FaCode className="text-blue-400 text-5xl" /> },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500 text-5xl" />,
      },
      {
        name: "Database",
        icon: <FaDatabase className="text-green-600 text-5xl" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="py-16 px-8 md:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-12">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-8 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <h4 className="text-2xl font-semibold text-blue-400 mb-6">
              {category.category}
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {skill.icon}
                  <p className="text-lg text-gray-300 mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
