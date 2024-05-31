import RegisterBG from "/src/assets/register-img.png";
import RegisterImg from "/src/assets/register.png";
import CountriesDropdown from "./CountriesDropDown";

export default function Register() {
  return (
    <section
      className="register bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${RegisterBG})` }}
    >
      <div className="container mx-auto p-4 lg:px-8 xl:px-32 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-[#ffa357] text-3xl sm:text-5xl font-bold text-center md:text-left">
              Register Now!
            </h2>
            <p className="text-lg sm:text-xl md:text-3xl mt-5 font-semibold text-white text-center md:text-left">
              Try Two Free Trial Sessions
            </p>
            <div className="mt-5 md:mt-10">
              <img src={RegisterImg} alt="Register" />
            </div>
          </div>
          <div>
            <form
              action="#"
              className="flex flex-col gap-5 p-5 border-2 border-white rounded-md bg-[#766CAD]"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none px-4 py-3 rounded-md"
              />
              <input
                type="number"
                placeholder="WhatsApp"
                className="outline-none px-4 py-3 rounded-md"
              />
              <CountriesDropdown />
              <input
                type="email"
                placeholder="Email (Optional)"
                className="outline-none px-4 py-3 rounded-md"
              />
              <textarea
                placeholder="Notes Or Comments"
                className="outline-none p-4 resize-none h-24 rounded-md"
              ></textarea>
              <div className="flex items-center space-x-2 bg-white rounded-md p-4 w-full md:w-64">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 rounded"
                />
                <span className="text-gray-400">I'm Not a Robot</span>
              </div>
              <div>
                <button type="submit" className="bg-[#EF954B] text-white w-full md:w-48 h-12 text-xl font-semibold rounded-md hover:bg-[#e58b41] transition-all duration-150">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
