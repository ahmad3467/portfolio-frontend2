import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-gray-100 px-6 py-24 flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-24">

          <p className="text-cyan-600 font-semibold tracking-[4px] uppercase text-lg mb-5">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight">
            Contact Me
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-10">
            Feel free to contact me for collaborations,
            software development projects, Data Science opportunities,
            and cloud computing solutions.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Phone Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-[32px] shadow-2xl p-10 border border-gray-100 hover:-translate-y-4 hover:shadow-cyan-100 transition duration-300 text-center">

            <div className="bg-cyan-100 text-cyan-600 w-24 h-24 flex items-center justify-center rounded-[30px] mx-auto mb-8">
              <FaPhoneAlt size={38} />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Phone Numbers
            </h2>

            <p className="text-lg text-gray-600 leading-9">
              0778815501
            </p>

            <p className="text-lg text-gray-600 leading-9">
              0616789041
            </p>

          </div>

          {/* Email Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-[32px] shadow-2xl p-10 border border-gray-100 hover:-translate-y-4 hover:shadow-cyan-100 transition duration-300 text-center">

            <div className="bg-cyan-100 text-cyan-600 w-24 h-24 flex items-center justify-center rounded-[30px] mx-auto mb-8">
              <FaEnvelope size={38} />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Email Address
            </h2>

            <p className="text-lg text-gray-600 break-all leading-9">
              ahmadsala255@gmail.com
            </p>

          </div>

          {/* Location Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-[32px] shadow-2xl p-10 border border-gray-100 hover:-translate-y-4 hover:shadow-cyan-100 transition duration-300 text-center">

            <div className="bg-cyan-100 text-cyan-600 w-24 h-24 flex items-center justify-center rounded-[30px] mx-auto mb-8">
              <FaMapMarkerAlt size={38} />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Location
            </h2>

            <p className="text-lg text-gray-600 leading-9">
              Tanzania
            </p>

          </div>

        </div>

        {/* WhatsApp Section */}
        <div className="mt-24">

          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-[40px] shadow-2xl p-12 text-center text-white">

            <div className="bg-white/20 w-24 h-24 rounded-[30px] flex items-center justify-center mx-auto mb-8">

              <FaWhatsapp size={48} />

            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Chat With Me On WhatsApp
            </h2>

            <p className="text-lg md:text-xl leading-9 max-w-3xl mx-auto text-cyan-50">

              Reach out directly through WhatsApp for quick
              communication, collaborations, project discussions,
              or professional opportunities.

            </p>

            <a
              href="https://wa.me/255778815501"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 mt-10 bg-white text-cyan-600 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg transition duration-300 shadow-xl hover:-translate-y-2"
            >

              <FaWhatsapp size={28} />

              Start WhatsApp Chat

            </a>

          </div>

        </div>

        {/* Social Media */}
        <div className="mt-24 text-center">

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Connect With Me
          </h2>

          <p className="text-lg text-gray-600 mb-12">
            Follow me on social platforms
          </p>

          <div className="flex flex-wrap justify-center gap-8">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-2xl hover:bg-cyan-500 hover:text-white text-cyan-600 w-20 h-20 flex items-center justify-center rounded-[28px] transition duration-300 hover:-translate-y-3"
            >
              <FaFacebookF size={28} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-2xl hover:bg-cyan-500 hover:text-white text-cyan-600 w-20 h-20 flex items-center justify-center rounded-[28px] transition duration-300 hover:-translate-y-3"
            >
              <FaLinkedinIn size={28} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-2xl hover:bg-cyan-500 hover:text-white text-cyan-600 w-20 h-20 flex items-center justify-center rounded-[28px] transition duration-300 hover:-translate-y-3"
            >
              <FaGithub size={28} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/255778815501"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-2xl hover:bg-green-500 hover:text-white text-green-600 w-20 h-20 flex items-center justify-center rounded-[28px] transition duration-300 hover:-translate-y-3"
            >
              <FaWhatsapp size={30} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;