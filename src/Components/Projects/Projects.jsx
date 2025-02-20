import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";
import {
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiEslint,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodemon,
  SiVercel,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const projects = [
  {
    name: "WhereIsIt",
    video: "https://www.youtube.com/watch?v=tiPABeeijtk",
    image: "https://i.ibb.co.com/QFYHkjW4/Screenshot-4.png",
    description:
      "WhereIsIt (Client Side) is the user interface for the Lost and Found platform, allowing users to report lost or found items, manage submissions, and interact easily with the platform. It is designed to be user-friendly, intuitive, and fully responsive.",
    techStack: [
      SiFirebase,
      SiExpress,
      SiMongodb,
      SiNodedotjs,
      SiEslint,
      SiReact,
      SiTailwindcss,
      SiVite,
      SiNodemon,
      SiVercel,
    ],
    liveLink: "https://whereisit-4b5c6.web.app/",
    githubLink: "https://github.com/smmaksudulhaque2000/Wherelist",
    challenges:
      "Handling real-time updates for lost and found items efficiently and ensuring user authentication was seamless.",
    futurePlans:
      "Implementing AI-based image recognition to match lost and found items automatically.",
  },
  {
    name: "Crowd Funding",
    video: "https://www.youtube.com/watch?v=3Bb3xRKb0d8",
    image: "https://i.ibb.co.com/1G2S1PQT/Screenshot-3.png",
    description:
      "Crowdcube is an intuitive crowdfunding platform where users can raise funds for personal causes, creative projects, startups, and more. It also allows users to donate and support ongoing campaigns.",
    techStack: [
      SiFirebase,
      SiExpress,
      SiMongodb,
      SiNodedotjs,
      SiReact,
      SiTailwindcss,
      SiNodemon,
    ],
    liveLink: "https://crowd-funding-b2152.web.app/",
    githubLink: "https://github.com/smmaksudulhaque2000/Crowd-Funding",
    challenges:
      "Ensuring secure payment transactions and preventing fraudulent campaigns was a major challenge.",
    futurePlans:
      "Adding a feature to allow backers to track fund usage and progress updates from campaign creators.",
  },
  {
    name: "Winter Clothing Donation",
    video: "https://www.youtube.com/watch?v=bhRJTv0Jlx0",
    image: "https://i.ibb.co.com/MD4xvD1w/Screenshot-2.png",
    description:
      "The Winter Clothing Donation platform connects donors with volunteers to provide winter clothing to people in need across Bangladesh. It ensures that vulnerable communities, especially in rural and low-income areas, receive essential clothing during the cold season.",
    techStack: [
      SiHtml5,
      SiCss3,
      SiFirebase,
      SiExpress,
      SiMongodb,
      SiNodedotjs,
      SiTailwindcss,
    ],
    liveLink: "https://winter-clothing-donation-e20cd.web.app/",
    githubLink:
      "https://github.com/smmaksudulhaque2000/Winter-Clothing-Donation",
    challenges:
      "Coordinating between donors and volunteers efficiently, and ensuring timely delivery of clothing.",
    futurePlans:
      "Introducing a real-time tracking system for donations and expanding to other essential items beyond clothing.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const colors = {
    SiFirebase: "text-yellow-500",
    SiExpress: "text-gray-500",
    SiMongodb: "text-green-500",
    SiNodedotjs: "text-green-600",
    SiEslint: "text-purple-500",
    SiReact: "text-blue-500",
    SiTailwindcss: "text-teal-500",
    SiVite: "text-purple-400",
    SiNodemon: "text-green-400",
    SiVercel: "text-black",
    SiHtml5: "text-orange-500",
    SiCss3: "text-blue-600",
  };

  return (
    <div
      id="projects"
      className="py-16 px-8 md:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-lg shadow-lg p-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="w-full ">
              <img src={project.image} alt="Project ScreenShort" />
            </div>
            <h4 className="text-2xl font-semibold text-blue-400 m-4">
              {project.name}
            </h4>
            <button
              onClick={() => setSelectedProject(project)}
              className="text-green-400 text-lg font-semibold btn btn-outline border-0 border-b-2"
            >
              View More
            </button>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={project.liveLink}
                className="text-yellow-400 text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href={project.githubLink}
                className="text-gray-300 text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <motion.div
            className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl max-w-5xl w-full relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-3xl"
            >
              <FaTimes />
            </button>
            <div className="w-full h-72 mb-6 overflow-hidden rounded-xl">
              <ReactPlayer
                url={selectedProject.video}
                width="100%"
                height="100%"
                controls
              />
            </div>
            <h4 className="text-xl lg:text-3xl font-extrabold text-blue-700 lg:mb-4">
              {selectedProject.name}
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm lg:text-lg lg:mb-4">
              {selectedProject.description}
            </p>
            <div className="text-gray-800 font-semibold text-xl lg:mb-6 flex flex-col sm:flex-row items-center gap-6 bg-gray-100 lg:p-5 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="text-blue-600 lg:text-2xl">🚀 Tech Stack:</span>
              <div className="flex flex-wrap gap-2 lg:gap-6 animate-fadeIn">
                {selectedProject.techStack.map((Icon, index) => (
                  <Icon
                    key={index}
                    className={`text-2xl lg:text-4xl transition-transform duration-300 hover:scale-125 ${
                      colors[Icon.name] || "text-gray-800"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="py-1 lg:py-6 bg-gray-100 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <p className="lg:text-xl font-bold text-red-600 lg:mb-2 animate-fadeIn">
                💪 Challenges:
              </p>
              <p className="lg:text-lg text-gray-800 mb-4 animate-slideIn">
                {selectedProject.challenges}
              </p>
              <p className="lg:text-xl font-bold text-green-600 lg:mb-2 animate-fadeIn">
                🌱 Future Plans:
              </p>
              <p className="lg:text-lg text-gray-800 animate-slideIn">
                {selectedProject.futurePlans}
              </p>
            </div>
            <div className="flex justify-center gap-6 mt-2 lg:mt-5">
              <a
                href={selectedProject.liveLink}
                className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={selectedProject.githubLink}
                className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub Repo
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
