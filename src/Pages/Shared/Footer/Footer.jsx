import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 animate-fade-in">
          Thank you for visiting!
        </h3>
        <p className="text-gray-400 mb-6">
          © 2025 Maksudul's Dev World. All rights reserved.
        </p>

        <div className="flex justify-center space-x-6">
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

        <div className="mt-6 animate-bounce">
          <p className="text-sm text-gray-500">"Keep coding, keep growing!"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
