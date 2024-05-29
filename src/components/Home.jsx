import { Link } from "react-router-dom";
import Header from "./Header";
import HomeImg from "/src/assets/SectionHome.svg";

export default function Home() {
  return (
    <div>
      <Header />
      <section
        className="home bg-cover bg-right md:bg-center pt-2 md:pt-0 flex items-center md:block"
        id="home"
        style={{
          backgroundImage: `url(${HomeImg})`,
          height: "calc(100vh - 74px)",
        }}
      >
        <div className="container mx-auto p-3 lg:px-0 xl:px-16 h-full">
          <div className="flex justify-center items-center h-full md:block md:pt-40">
            <div className="home-content text-center md:text-start">
              <h1
                className="home-text-h1 font-bold text-white leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                style={{ textShadow: "2px 2px 2px #6b6b6b" }}
              >
                <span className="home-text-h1-span font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
                  Online
                </span>{" "}
                <br /> Quran Academy
              </h1>
              <p
                className="home-text-p text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black md:font-semibold pt-8 md:pt-4 lg:pt-2 text-white md:text-[#653B0C] mx-2 mb-8 mt-4"
                style={{ textShadow: "2px 2px 2px #6b6b6b" }}
              >
                Learn Quran And Arabic With <br /> the Best Online Tutors!
              </p>
              <div className="pt-8 md:pt-4 lg:pt-2">
                <Link
                  to="/"
                  className="text-xl md:text-2xl lg:text-3xl text-white bg-[#766CAD] px-5 py-3 rounded-full hover:bg-[#5b5196] transition-all duration-150"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
