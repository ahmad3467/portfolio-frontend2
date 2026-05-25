import {
  FaLaptopCode,
  FaCloud,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-cyan-50 px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-600 font-semibold text-lg mb-4">
            Get To Know More
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            About Me
          </h1>

        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-800 leading-tight text-center">

            Passionate About Technology,
            <span className="text-cyan-600 block mt-2">
              Data Science & Innovation
            </span>

          </h2>

          {/* Description Card */}
          <div className="mt-10 bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition duration-300">

            <p className="text-lg text-gray-600 leading-9">

              I am a Data Science student at the Eastern Africa
              Statistical Training Center (EASTC) with strong interest
              in software development, machine learning, cloud computing,
              and digital transformation.

              <br /><br />

              I enjoy building intelligent systems that solve
              real-world problems and improve user experiences through
              modern technologies and innovative digital solutions.

            </p>

          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-8 mt-14">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">

              <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <FaLaptopCode size={30} />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Software Development
              </h3>

              <p className="text-gray-600 leading-8">
                Building responsive and modern web applications
                with clean user interfaces and modern technologies.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">

              <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <FaBrain size={30} />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Machine Learning
              </h3>

              <p className="text-gray-600 leading-8">
                Interested in intelligent systems, recommendation
                systems, predictive analytics, and AI technologies.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">

              <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <FaCloud size={30} />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Cloud Computing
              </h3>

              <p className="text-gray-600 leading-8">
                Learning modern cloud deployment technologies
                including Render and Vercel platforms.
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">

              <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <FaDatabase size={30} />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Data Analysis
              </h3>

              <p className="text-gray-600 leading-8">
                Passionate about extracting insights from data
                using analytical and visualization tools.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;