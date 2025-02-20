import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';
import { IoSchoolSharp } from 'react-icons/io5';

const EducationalQualification = () => {
  return (
    <div id="education" className="py-16 px-8 md:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Educational Qualifications
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          className="bg-gray-700 p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-semibold text-blue-400 mb-4">
            <IoSchoolSharp className="inline-block mr-3 text-3xl" />
            Higher Secondary Certificate (Commerce)
          </h4>
          <p className="text-lg text-gray-300">
            <strong>Institution:</strong> Dania University College
          </p>
          <p className="text-lg text-gray-300">
            <strong>GPA:</strong> 3.92
          </p>
          <p className="text-lg text-gray-300">
            <strong>Batch:</strong> HSC - 2020
          </p>
          <p className="text-lg text-gray-300">
            <strong>Role:</strong> Class Captain Section B
          </p>
          <p className="text-lg text-gray-300">
            <strong>Club Membership:</strong> Member of IT Club-DUCITC
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-700 p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-semibold text-blue-400 mb-4">
            <FaUniversity className="inline-block mr-3 text-3xl" />
            Honours 3rd Year (Accounting)
          </h4>
          <p className="text-lg text-gray-300">
            <strong>Institution:</strong> Demra University College - DUC
          </p>
          <p className="text-lg text-gray-300">
            <strong>Currently Studying:</strong> Accounting (Academic year 2021-2022)
          </p>
          <p className="text-lg text-gray-300">
            <strong>Role:</strong> Class Captain Section A
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationalQualification;
