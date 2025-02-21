import { motion } from "framer-motion";
import { FaTasks, FaUsers, FaClock, FaChartLine } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

const featuresData = [
  {
    name: "Create Tasks",
    icon: <FaTasks className="text-blue-400 text-5xl" />, 
    description: "Easily create tasks and organize them efficiently."
  },
  {
    name: "Assign Tasks",
    icon: <FaUsers className="text-green-500 text-5xl" />, 
    description: "Assign tasks to team members and collaborate seamlessly."
  },
  {
    name: "Track Progress",
    icon: <FaClock className="text-yellow-400 text-5xl" />, 
    description: "Monitor the progress of tasks in real-time."
  },
  {
    name: "Analytics",
    icon: <FaChartLine className="text-purple-400 text-5xl" />, 
    description: "Get insights and analytics on your team's performance."
  },
];

const Features = () => {
  return (
    <div id="features" className="py-16 px-8 md:px-24 bg-gray-200 text-white">
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
        <SectionTitle subTitle={"Key Features"} heading={"Manage your tasks efficiently with our intuitive task management system. From creating and assigning tasks to tracking progress and analyzing performance, our platform ensures seamless workflow and productivity. With a sleek gray-themed design and smooth animations, experience a modern and user-friendly interface tailored for effective task management."} />
      </motion.h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold text-blue-400 mb-2">{feature.name}</h4>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
