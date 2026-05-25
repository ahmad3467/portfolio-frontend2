import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaTrash,
  FaSpinner,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || null
  );

  const [uploading, setUploading] = useState(false);

  const location = useLocation();

  /*
  =====================================
  Load Saved Image
  =====================================
  */
  useEffect(() => {

    const savedImage =
      localStorage.getItem("profileImage");

    if (savedImage) {
      setProfileImage(savedImage);
    }

  }, []);

  /*
  =====================================
  Cloudinary Upload
  =====================================
  */
  const handleImageUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setUploading(true);

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
      "upload_preset",
      "portfolio_upload"
    );

    try {

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/duagbonu4/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setProfileImage(data.secure_url);

      localStorage.setItem(
        "profileImage",
        data.secure_url
      );

    } catch (error) {

      console.log(error);

      alert("Image upload failed");

    } finally {

      setUploading(false);

    }

  };

  /*
  =====================================
  Remove Image
  =====================================
  */
  const removeImage = () => {

    localStorage.removeItem("profileImage");

    setProfileImage(null);

  };

  /*
  =====================================
  Active Link Styling
  =====================================
  */
  const navLink = (path) =>
    location.pathname === path
      ? "text-cyan-500 font-bold"
      : "text-gray-700 hover:text-cyan-500";

  return (

    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="group"
        >

          <h1 className="text-3xl font-extrabold text-gray-800 leading-tight">

            Ahmad

            <span className="text-cyan-500 ml-2">
              Salim
            </span>

          </h1>

          <p className="text-sm text-gray-500 group-hover:text-cyan-500 transition duration-300">
            Data Science Portfolio
          </p>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">

          <li>
            <Link
              to="/"
              className={`${navLink("/")} transition duration-300`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`${navLink("/about")} transition duration-300`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              className={`${navLink("/skills")} transition duration-300`}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/education"
              className={`${navLink("/education")} transition duration-300`}
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className={`${navLink("/projects")} transition duration-300`}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={`${navLink("/contact")} transition duration-300`}
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-5">

          {/* Upload Profile */}
          <div className="flex items-center gap-3">

            <label className="cursor-pointer group relative">

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />

              {
                uploading ? (

                  <div className="bg-cyan-100 text-cyan-600 w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg">

                    <FaSpinner
                      size={24}
                      className="animate-spin"
                    />

                  </div>

                ) : profileImage ? (

                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-cyan-500 shadow-lg hover:scale-105 transition duration-300"
                  />

                ) : (

                  <div className="bg-cyan-100 text-cyan-600 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition duration-300 shadow-lg">

                    <FaUserCircle size={30} />

                  </div>

                )
              }

            </label>

            {/* Remove Button */}
            {
              profileImage && (

                <button
                  onClick={removeImage}
                  className="bg-red-100 hover:bg-red-500 text-red-500 hover:text-white w-12 h-12 rounded-2xl flex items-center justify-center transition duration-300"
                >

                  <FaTrash />

                </button>

              )
            }

          </div>

          {/* Resume Button */}
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg hover:shadow-cyan-200 hover:-translate-y-1">

            Resume

          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden bg-cyan-100 text-cyan-600 w-12 h-12 flex items-center justify-center rounded-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {
            menuOpen
              ? <FaTimes size={24} />
              : <FaBars size={24} />
          }

        </button>

      </div>

      {/* Mobile Menu */}
      {
        menuOpen && (

          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl px-6 py-8">

            <div className="flex flex-col gap-6 text-lg font-medium">

              <Link
                to="/"
                className={navLink("/")}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={navLink("/about")}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/skills"
                className={navLink("/skills")}
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </Link>

              <Link
                to="/education"
                className={navLink("/education")}
                onClick={() => setMenuOpen(false)}
              >
                Education
              </Link>

              <Link
                to="/projects"
                className={navLink("/projects")}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className={navLink("/contact")}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

            </div>

            {/* Mobile Upload */}
            <div className="mt-10 pt-8 border-t border-gray-200">

              <div className="flex items-center justify-between">

                <label className="cursor-pointer flex items-center gap-5">

                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageUpload}
                  />

                  {
                    uploading ? (

                      <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl">

                        <FaSpinner
                          size={28}
                          className="animate-spin"
                        />

                      </div>

                    ) : profileImage ? (

                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-500"
                      />

                    ) : (

                      <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-2xl">

                        <FaUserCircle size={34} />

                      </div>

                    )
                  }

                  <div>

                    <h3 className="font-bold text-gray-800">
                      Upload Profile
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Choose your profile image
                    </p>

                  </div>

                </label>

                {/* Remove Mobile */}
                {
                  profileImage && (

                    <button
                      onClick={removeImage}
                      className="bg-red-100 hover:bg-red-500 text-red-500 hover:text-white w-12 h-12 rounded-2xl flex items-center justify-center transition duration-300"
                    >

                      <FaTrash />

                    </button>

                  )
                }

              </div>

            </div>

          </div>

        )
      }

    </nav>
  );
}

export default Navbar;