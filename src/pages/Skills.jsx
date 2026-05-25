import {
  FaPython,
  FaPhp,
  FaFileExcel,
  FaChartBar,
} from "react-icons/fa";

function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-600 font-semibold text-lg mb-4">
            Professional Skills
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            My Skills
          </h1>

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Python */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-gray-100">

            <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <FaPython size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Python
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              Experienced in data analysis, automation,
              machine learning, and backend development.
            </p>


          </div>

          {/* R Programming */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-gray-100">

            <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <FaChartBar size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              R Programming
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              Skilled in statistical analysis,
              visualization, and data modeling using R.
            </p>

            

          </div>

          {/* Excel */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-gray-100">

            <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <FaFileExcel size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Excel
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              Experienced in spreadsheets,
              dashboards, formulas, and data reporting.
            </p>
            

          </div>

          {/* PHP */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-gray-100">

            <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <FaPhp size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              PHP
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              Knowledgeable in web development,
              backend systems, and database integration.
            </p>

           
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;