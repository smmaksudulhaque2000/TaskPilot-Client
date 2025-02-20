import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div
      id="experience"
      className="py-16 px-8 md:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h3>

      <motion.div
        className="bg-gray-700 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h4
          className="text-2xl md:text-3xl font-semibold text-green-400 mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Project Intern - Audit Data Archiving
        </motion.h4>
        <motion.p
          className="text-lg text-gray-300 mb-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          May 2021 - July 2021
        </motion.p>
        <motion.p
          className="text-lg text-gray-200 font-medium mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Tappware Solution LTD
        </motion.p>
        <motion.p
          className="text-base text-gray-300 mb-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          As a Project Leader in the Commercial Audit Section, I led the data
          archiving project under a government contract. This project was
          conducted at the Audit Complex under the National Revenue Board.
        </motion.p>
        <motion.ul
          className="list-disc list-inside text-gray-300 mb-6 space-y-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <li>Project Leader at the Commercial Audit Section.</li>
          <li>
            Successfully completed the full Data Archive project for a
            government initiative.
          </li>
          <li>
            Utilized various methods to maintain data integrity while ensuring
            high-quality results.
          </li>
        </motion.ul>
        <motion.p
          className="text-base text-gray-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          During this project, I developed skills in teamwork, project
          management, and handling large datasets. The project had a significant
          impact on streamlining audit processes for the government,
          contributing to more efficient data storage and retrieval systems.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Experience;
