import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header relative bg-[#F3EAD7]">
      <div className="main-header container mx-auto p-3 lg:px-0 xl:px-32 flex items-center justify-between">
        <div className="main-logo">
          <Link to="/">
            <img src={Logo} alt="Quran-House" />
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#653B0C"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#653B0C"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
        <nav className="main-navbar hidden lg:flex w-full lg:w-auto mt-1">
          <ul className="main-navbar-list flex flex-row items-center gap-2 lg:gap-4">
            {[
              { to: "/", label: "Quran" },
              { to: "/online-classes", label: "Online Quran Classes" },
              { to: "/courses", label: "Courses" },
              { to: "/team", label: "Team" },
              { to: "/prices", label: "Prices" },
              { to: "/blog", label: "Blog" },
              { to: "/trial-lesson", label: "Trial Lesson" },
              { to: "/about-us", label: "About us" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="text-lg pr-3"
                  style={{
                    color: "#653B0C",
                    borderRight: index < 7 ? "2px solid #653B0C" : "none",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`absolute top-[99%] left-0 w-full bg-[#F3EAD7] lg:hidden z-50 transition-transform duration-500 transform ${
          menuOpen ? "scale-y-100" : "scale-y-0"
        } origin-top`}
        style={{ transitionDuration: "300ms" }}
      >
        <nav>
          <ul className="main-navbar-list flex flex-col items-center gap-2">
            {[
              { to: "/", label: "Quran" },
              { to: "/online-classes", label: "Online Quran Classes" },
              { to: "/courses", label: "Courses" },
              { to: "/team", label: "Team" },
              { to: "/prices", label: "Prices" },
              { to: "/blog", label: "Blog" },
              { to: "/trial-lesson", label: "Trial Lesson" },
              { to: "/about-us", label: "About us" },
            ].map((item, index) => (
              <li key={index} className="w-full text-center">
                <Link
                  to={item.to}
                  className="text-xl block py-2"
                  style={{
                    color: "#653B0C",
                    borderBottom: index < 7 ? "1px solid #653B0C" : "none",
                  }}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
