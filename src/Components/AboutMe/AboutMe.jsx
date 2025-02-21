import { motion } from "framer-motion";
import { FaTasks, FaUsers, FaClipboardList, FaClock } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="py-16"
    >
      <motion.h3
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h3>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          className="md:w-1/2 text-lg md:text-xl  leading-relaxed"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mb-6">
            Welcome to <span className="text-blue-400 font-semibold">TaskFlow</span>, 
            your ultimate task management solution. Our platform is designed to help individuals 
            and teams organize their work efficiently, track progress, and meet deadlines seamlessly.
          </p>
          <p className="mb-6">
            With TaskFlow, you can create, assign, and prioritize tasks effortlessly. Whether you are
            a freelancer, a team leader, or a project manager, our intuitive interface ensures that
            you stay on top of your workload.
          </p>
          <p className="mb-6">
            We believe in boosting productivity through smart organization and collaboration. 
            Stay focused, work smarter, and achieve your goals with TaskFlow!
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
              icon: <FaTasks className="text-5xl text-blue-400 mb-4" />, 
              title: "Task Management", 
              desc: "Create, assign, and track tasks easily with our user-friendly interface."
            },
            {
              icon: <FaUsers className="text-5xl text-green-400 mb-4" />, 
              title: "Collaboration", 
              desc: "Work together with your team efficiently and track collective progress."
            },
            {
              icon: <FaClipboardList className="text-5xl text-yellow-400 mb-4" />, 
              title: "Project Tracking", 
              desc: "Monitor ongoing projects and ensure timely completion with clear milestones."
            },
            {
              icon: <FaClock className="text-5xl text-pink-400 mb-4" />, 
              title: "Time Management", 
              desc: "Prioritize your tasks and manage deadlines effectively to stay productive."
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
