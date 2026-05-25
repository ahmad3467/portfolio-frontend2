import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {

  // Scroll To Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 pb-10 mt-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-14 mb-16">

          {/* Brand Section */}
          <div>

            <h1 className="text-4xl font-extrabold text-cyan-400 leading-tight">
              AHMAD SALIM
              <span className="block text-white mt-1">
                ABDALLA
              </span>
            </h1>

            <p className="text-gray-400 mt-6 leading-8 text-lg">
              Bachelor Degree Student in Data Science passionate
              about software development, cloud computing,
              and intelligent systems.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h2 className="text-2xl font-bold mb-8 text-white">
              Quick Links
            </h2>

            <ul className="space-y-5">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/skills"
                  className="text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Social Media */}
          <div>

            <h2 className="text-2xl font-bold mb-8 text-white">
              Connect With Me
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              Follow me on social media and connect
              with me for collaborations and projects.
            </p>

            {/* Icons */}
            <div className="flex gap-5">

              <a
                href="https://www.facebook.com/"
                className="bg-white/10 backdrop-blur-lg hover:bg-cyan-500 w-14 h-14 flex items-center justify-center rounded-2xl transition duration-300 hover:-translate-y-2"
              >
                <FaFacebookF size={22} />
              </a>

              <a
                href="https://www.instagram.com/"
                className="bg-white/10 backdrop-blur-lg hover:bg-cyan-500 w-14 h-14 flex items-center justify-center rounded-2xl transition duration-300 hover:-translate-y-2"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.linkedin.com/"
                className="bg-white/10 backdrop-blur-lg hover:bg-cyan-500 w-14 h-14 flex items-center justify-center rounded-2xl transition duration-300 hover:-translate-y-2"
              >
                <FaLinkedinIn size={22} />
              </a>

              <a
                href="https://github.com/"
                className="bg-white/10 backdrop-blur-lg hover:bg-cyan-500 w-14 h-14 flex items-center justify-center rounded-2xl transition duration-300 hover:-translate-y-2"
              >
                <FaGithub size={22} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Copyright */}
          <p className="text-gray-400 text-center md:text-left">
            © 2026 AHMAD SALIM ABDALLA — All Rights Reserved
          </p>

          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            className="bg-cyan-500 hover:bg-cyan-600 text-white w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg transition duration-300 hover:-translate-y-2"
          >

            <FaArrowUp size={20} />

          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;