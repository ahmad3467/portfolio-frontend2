import {
  FaGraduationCap,
  FaUniversity,
  FaBookReader,
  FaAward,
} from "react-icons/fa";

function Education() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-cyan-50 px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-600 font-semibold text-lg mb-4">
            Academic Journey
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            Education
          </h1>

        </div>

        {/* Main Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-cyan-500 rounded-full"></div>

          {/* Timeline Item */}
          <div className="relative pl-20">

            {/* Timeline Icon */}
            <div className="absolute left-0 top-0 bg-cyan-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl">
              <FaGraduationCap size={28} />
            </div>

            {/* Education Card */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 hover:shadow-cyan-100 transition duration-300 border border-gray-100">

              {/* Institution Badge */}
              <div className="inline-flex items-center gap-3 bg-cyan-100 text-cyan-700 px-5 py-3 rounded-full mb-6 font-semibold">

                <FaUniversity />

                EASTC

              </div>

              {/* Degree */}
              <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
                Bachelor’s Degree in Data Science
              </h2>

              {/* Institution */}
              <h3 className="text-2xl text-cyan-600 font-semibold mb-6">
                Eastern Africa Statistical Training Center
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-9">

                Currently pursuing a Bachelor’s Degree in Data Science
                with strong focus on programming, machine learning,
                data analysis, cloud computing, artificial intelligence,
                and intelligent system development.

                <br /><br />

                Passionate about solving real-world problems using
                modern technologies and innovative digital solutions.

              </p>

              {/* Information Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">

                {/* Card 1 */}
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-cyan-50 transition duration-300 border border-gray-100">

                  <div className="bg-cyan-100 text-cyan-600 w-14 h-14 flex items-center justify-center rounded-2xl mb-4">
                    <FaBookReader size={28} />
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Learning
                  </h4>

                  <p className="text-gray-600 leading-7">
                    Advanced studies in Data Science,
                    analytics, and intelligent systems.
                  </p>

                </div>

                {/* Card 2 */}
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-cyan-50 transition duration-300 border border-gray-100">

                  <div className="bg-cyan-100 text-cyan-600 w-14 h-14 flex items-center justify-center rounded-2xl mb-4">
                    <FaAward size={28} />
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Career Goals
                  </h4>

                  <p className="text-gray-600 leading-7">
                    Aspiring to become a professional
                    Data Scientist and Software Engineer.
                  </p>

                </div>

                {/* Card 3 */}
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-cyan-50 transition duration-300 border border-gray-100">

                  <div className="bg-cyan-100 text-cyan-600 w-14 h-14 flex items-center justify-center rounded-2xl mb-4">
                    <FaUniversity size={28} />
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Institution
                  </h4>

                  <p className="text-gray-600 leading-7">
                    EASTC provides modern education
                    in statistics, ICT, and Data Science.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;