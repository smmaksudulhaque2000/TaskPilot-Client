import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_xxxxxx", "template_xxxxxx", formData, "user_xxxxxx")
      .then(() => {
        setLoading(false);
        Swal.fire(
          "Success!",
          "Your message has been sent successfully!",
          "success"
        );
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        Swal.fire(
          "Error!",
          "Something went wrong. Please try again later.",
          "error"
        );
      });
  };

  return (
    <motion.div
      id="contact"
      className="py-16 px-8 md:px-24 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800 p-8 rounded-xl shadow-xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center bg-gray-700 p-4 rounded-lg shadow-md">
            <FaEnvelope className="text-yellow-400 text-2xl mr-4" />
            <span className="text-xs lg:text-lg">
              smmaksudulhaque2000@gmail.com
            </span>
          </div>
          <div className="flex items-center bg-gray-700 p-4 rounded-lg shadow-md">
            <FaPhone className="text-green-400 text-2xl mr-4" />
            <span className="text-lg">+880 1518474975</span>
          </div>
          <div className="flex items-center bg-gray-700 p-4 rounded-lg shadow-md">
            <FaWhatsapp className="text-blue-400 text-2xl mr-4" />
            <span className="text-lg">+880 1518474975</span>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center text-lg hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}{" "}
            <FaPaperPlane className="ml-2" />
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
