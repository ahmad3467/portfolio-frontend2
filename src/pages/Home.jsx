import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaCode,
  FaDatabase,
  FaCloud,
  FaArrowRight,
  
} from "react-icons/fa";

import { useEffect, useState } from "react";

import API from "../api/portfolioApi";

function Home() {

  // Backend Portfolio Data
  const [portfolio, setPortfolio] = useState({});

  // Loading State
  const [loading, setLoading] = useState(true);

  /*
  =====================================
  Fetch Portfolio Data
  =====================================
  */
  useEffect(() => {

    const fetchPortfolio = async () => {

      try {

        const response = await API.get("/portfolio");

        setPortfolio(response.data);

      } catch (error) {

        console.log("API Error:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchPortfolio();

  }, []);

  return (

    <section className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-gray-100 px-6 py-20 flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto text-center">

        {/* Loading */}
        {
          loading && (
            <div className="mb-10">

              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

              <p className="mt-5 text-gray-600 text-lg">
                Loading Portfolio...
              </p>

            </div>
          )
        }

        {/* Small Intro */}
        <p className="text-cyan-600 font-semibold text-lg mb-6 tracking-[4px] uppercase">
          Welcome To My Portfolio
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-800 leading-tight">

          {portfolio.name?.split(" ")[0] || "AHMAD"}{" "}

          <span className="text-cyan-600">
            {portfolio.name?.split(" ").slice(1).join(" ") || "SALIM ABDALLA"}
          </span>

        </h1>

        {/* Profession */}
        <h2 className="mt-8 text-2xl md:text-4xl font-bold text-gray-700 leading-relaxed">

          {portfolio.profession ||
            "Bachelor Degree Student in Data Science"}

        </h2>

        {/* Institution */}
        <p className="mt-5 text-lg md:text-xl text-gray-600 font-medium">
          {portfolio.institution ||
            "Eastern Africa Statistical Training Center (EASTC)"}
        </p>

        {/* Description */}
        <p className="mt-10 max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-10">

          Passionate Data Science student with skills in programming,
          data analysis, software development, and cloud technologies.

          <br />

          Interested in building intelligent systems and modern
          digital solutions that improve real-world experiences
          and business operations.

        </p>

        {/* Action Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">

          {/* Projects */}
          <a
            href="/projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-cyan-200 transition duration-300 flex items-center gap-3 hover:-translate-y-1"
          >

            View Projects

            <FaArrowRight />

          </a>

    

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-16">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-xl hover:bg-cyan-500 hover:text-white text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl transition duration-300 hover:-translate-y-3"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-xl hover:bg-cyan-500 hover:text-white text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl transition duration-300 hover:-translate-y-3"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-xl hover:bg-cyan-500 hover:text-white text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl transition duration-300 hover:-translate-y-3"
          >
            <FaFacebookF size={24} />
          </a>

        </div>

        {/* Skills Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-gray-100">

            <div className="bg-cyan-100 text-cyan-600 w-20 h-20 flex items-center justify-center rounded-3xl mx-auto mb-8">
              <FaCode size={34} />
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-5">
              Software Development
            </h3>

            <p className="text-gray-600 leading-9 text-lg">
              Developing responsive and scalable modern
              applications using current web technologies
              and best development practices.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-gray-100">

            <div className="bg-cyan-100 text-cyan-600 w-20 h-20 flex items-center justify-center rounded-3xl mx-auto mb-8">
              <FaDatabase size={34} />
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-5">
              Data Analysis
            </h3>

            <p className="text-gray-600 leading-9 text-lg">
              Extracting insights, solving problems,
              and making data-driven decisions using
              analytical tools and techniques.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-gray-100">

            <div className="bg-cyan-100 text-cyan-600 w-20 h-20 flex items-center justify-center rounded-3xl mx-auto mb-8">
              <FaCloud size={34} />
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-5">
              Cloud Computing
            </h3>

            <p className="text-gray-600 leading-9 text-lg">
              Learning modern deployment technologies
              including Vercel, Render, APIs,
              and cloud-based infrastructures.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;