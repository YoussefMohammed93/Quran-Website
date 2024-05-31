import { useState } from "react";

const countries = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Jordan",
  "Lebanon",
  "Egypt",
  "Iraq",
];

const CountriesDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  return (
    <div className="relative inline-block text-left">
      <input
        type="text"
        value={selectedCountry}
        placeholder="Country"
        readOnly
        onClick={toggleDropdown}
        className="w-full px-4 py-2 border rounded-md focus:outline-none text-gray-700"
        style={{ borderColor: "#d1d5db", paddingRight: "2.5rem" }}
      />
      <button
        type="button"
        onClick={toggleDropdown}
        className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-500"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {showDropdown && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
          <div className="py-1">
            {countries.map((country) => (
              <button
                href="#"
                key={country}
                onClick={() => selectCountry(country)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountriesDropdown;
