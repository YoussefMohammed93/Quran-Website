import { Link } from "react-router-dom";
import Logo from "/src/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#251F4D]">
      <div className="container mx-auto p-4 lg:px-16 xl:px-32 py-6">
        <div className="main-logo flex items-center gap-8">
          <Link to="/">
            <img src={Logo} alt="Quran-House" />
          </Link>
          <div className="w-full bg-gray-500 md:h-[1px] mt-2"></div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div>
            <h2 className="text-lg sm:text-xl text-[#EF954B] font-semibold mb-4">
              Address
            </h2>
            <p className="text-white">
              71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, UNITED
              KINGDOM
            </p>
            <p className="mt-4 text-[#EF954B] text-lg sm:text-xl font-semibold">
              Phone
            </p>
            <p className="text-white">+20 114 020 5770</p>
            <p className="mt-4 font-semibold text-[#EF954B]">
              Are You A Teacher? Interested In Working With Us?
            </p>
            <p className="text-white">Info@Quranhouse.Online</p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl text-[#EF954B] font-semibold mb-4">
              Get Involved
            </h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Quran English Translation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Online Quran Classes
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Online Quran Teachers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Prices
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Trial Lesson
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl text-[#EF954B] font-semibold mb-4">
              Courses
            </h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Online Quran Classes – Learn Quran Online With Top Quran
                  Teachers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Arabic Online Courses – Learning Arabic Online With Native
                  Arabs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Online Islamic Studies Courses
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl text-[#EF954B] font-semibold mb-4">
              Blog
            </h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  FAQ’s
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-white">
                  Terms & Conditions Of Fee
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Link to="/">
              <svg
                className="w-7 h-7 bg-[#9F91F1] rounded"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#251F4D"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div>
            <Link to="/">
              <svg
                className="w-7 h-7 bg-[#9F91F1] rounded"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div>
            <Link to="/">
              <svg
                className="w-7 h-7 bg-[#9F91F1] rounded"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
              </svg>
            </Link>
          </div>
          <div>
            <Link to="/">
              <svg
                className="w-7 h-7 bg-[#9F91F1] rounded"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </Link>
          </div>
          <div>
            <Link to="/">
              <svg
                className="w-7 h-7 bg-[#9F91F1] rounded"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#100A32] text-[#766CAD] text-center p-3">
        © 2024 Quran House. All rights reserved
      </div>
    </footer>
  );
}
