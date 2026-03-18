import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import githubIcon from "../../../assets/github.png";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4">

        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <ul className="absolute top-full left-4 mt-2 p-4 shadow-lg bg-white rounded-xl w-40 flex flex-col gap-2 z-50">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#7C3AED] font-semibold border-b-2 border-[#7C3AED] pb-1 block"
                          : "font-medium text-gray-600 hover:text-[#7C3AED] transition duration-200 block"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="text-lg sm:text-xl font-bold text-[#7C3AED]">
              HERO.IO
            </span>
          </Link>
        </div>

        {/* Center Nav (Desktop) */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6 lg:gap-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#7C3AED] font-semibold border-b-2 border-[#7C3AED] pb-1"
                      : "font-medium text-gray-600 hover:text-[#7C3AED] transition duration-200"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Button */}
        <div>
          <a
            href="https://github.com/bosrin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 bg-[#7C3AED] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-md font-medium text-sm sm:text-base hover:bg-[#6d28d9] transition"
          >
            <img src={githubIcon} alt="github" className="w-3 sm:w-4 h-3 sm:h-4 invert" />
            Contribute
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
