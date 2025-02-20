import { motion } from "framer-motion";
import { FaCode, FaDumbbell, FaBook, FaMusic } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="py-16 px-8 md:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h3>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          className="md:w-1/2 text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mb-6">
            Hello! I'm{" "}
            <span className="text-blue-400 font-semibold">Maksudul Haque</span>,
            a passionate Full-Stack Web Developer with a strong interest in
            crafting user-centric web solutions. My programming journey started
            during my early academic years, and since then, it has been a
            thrilling adventure of constant learning and growth.
          </p>
          <p className="mb-6">
            I enjoy working on both front-end and back-end projects. I thrive on
            building intuitive user interfaces and scalable back-end systems.
            Creating meaningful digital experiences that can make a positive
            impact is what excites me the most.
          </p>
          <p className="mb-6">
            When I'm not coding, you’ll find me exploring new technologies,
            reading books, working out, or listening to music. I believe in
            maintaining a balance between work and personal life, as it helps
            fuel creativity and motivation.
          </p>
          <p>
            I’m a curious and enthusiastic person who loves collaborating with
            others and taking on new challenges. Let’s create something amazing
            together!
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 grid grid-cols-2 gap-8 text-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {[
            {
              icon: <FaCode className="text-5xl text-blue-400 mb-4" />,
              title: "Coding",
              desc: "I love problem-solving and turning ideas into reality through code.",
            },
            {
              icon: <FaDumbbell className="text-5xl text-green-400 mb-4" />,
              title: "Workout",
              desc: "Working out keeps me healthy, focused, and energized.",
            },
            {
              icon: <FaBook className="text-5xl text-yellow-400 mb-4" />,
              title: "Reading",
              desc: "I enjoy reading books on technology, self-improvement, and fiction.",
            },
            {
              icon: <FaMusic className="text-5xl text-pink-400 mb-4" />,
              title: "Music",
              desc: "Music is my escape and a great source of inspiration.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-700 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {item.icon}
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
