import {
  FaRobot,
  FaHotel,
  FaBuilding,
} from "react-icons/fa";

function Projects() {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-cyan-600 text-center mb-16">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl transition duration-300">

            <div className="bg-cyan-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <FaRobot size={30} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Product Recommendation System
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              An intelligent recommendation system that suggests
              products to users based on preferences and behavior
              to improve customer experience in digital marketplaces.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                Python
              </span>

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                Data Analysis
              </span>

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                Recommendation Algorithms
              </span>

            </div>

          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl transition duration-300">

            <div className="bg-cyan-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <FaBuilding size={30} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Hostel Management System
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              A web-based management system designed to help
              manage student hostel operations including room
              allocation, payments, and student records.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                PHP
              </span>

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                MySQL
              </span>

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                HTML/CSS
              </span>

            </div>

          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl transition duration-300">

            <div className="bg-cyan-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6">
              <FaHotel size={30} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Hotel Booking Management System
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              An online hotel booking system that allows
              customers to reserve rooms, manage bookings,
              and improve hotel service operations.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                PHP
              </span>

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                Database Management
              </span>

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                Web Development
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;