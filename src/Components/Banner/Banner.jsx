import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../../assets/img.svg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Banner = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1TYFiuAgWY2gI6N6xNQLUFRqz1B2I0Zm6";
    link.download = "Maksudul_Haque_Resume.pdf";
    link.click();
  };

  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <motion.div
        className="md:w-2/3 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-6">
          Hi, I'm Maksudul Haque
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-300 mb-8">
          <Typewriter
            words={[
              "👨‍💻 Full-Stack Web Developer",
              "🚀 Passionate About Innovation & Impactful Coding",
              "🎯 Focused on Delivering High-Performance Web Applications",
              "🌍 Crafting Scalable, User-Centric Solutions",
              "💻 Frontend Developer | Designing Beautiful, Responsive User Interfaces",
              "⚙️ Crafting Seamless Digital Experiences with Code",
              "🚀 Tech Enthusiast | Constantly Learning, Evolving, and Innovating",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Experienced in front-end & back-end technologies, dedicated to
          building scalable and efficient web applications that make a
          difference.
        </p>
        <hr className="my-5 border-2 text-gray-500" />
        <div className="grid lg:grid-cols-2 gap-8">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-70}
            className="text-center px-10 py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 cursor-pointer"
          >
            Contact Me
          </Link>
          <motion.button
            onClick={handleResumeDownload}
            className="text-center px-10 py-4 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Resume Download
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="md:w-1/3 flex justify-end mb-12 md:mb-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={img}
          alt="Profile"
          className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-blue-500"
        />
      </motion.div>
      <div className="grid grid-flow-col lg:grid-flow-row gap-5 p-5">
        <a
          href="https://github.com/smmaksudulhaque2000"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaGithub className="w-8 h-8 text-gray-300 hover:text-white" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin className="w-8 h-8 text-gray-300 hover:text-white" />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaEnvelope className="w-8 h-8 text-gray-300 hover:text-white" />
        </a>
        <a
          href="https://facebook.com/maksudulhaque2000"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaFacebook className="w-8 h-8 text-gray-300 hover:text-white" />
        </a>
        <a
          href="https://x.com/smmaksudulhaque"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaTwitter className="w-8 h-8 text-gray-300 hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
