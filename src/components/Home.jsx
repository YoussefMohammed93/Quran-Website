import { Link } from "react-router-dom";
import Header from "./Header";
import HomeImg from "/src/assets/SectionHome.svg";
import HomeBG from "/src/assets/home-bg.png";
import HomeTeachers from "/src/assets/home-teachers.png";

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
        <div className="container mx-auto p-3 lg:px-0 xl:px-32 h-full">
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
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HomeBG})` }}
      >
        <div className="container mx-auto p-3 lg:px-0 xl:px-32">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-center pt-4 pb-8 sm:pt-8 text-[#DC811C]">
            Unleash Your Learning Potential <br /> Through Our Quran Academy
          </h2>
          <div className="home-video w-full flex justify-center">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/1JcyxMztr0w?si=VaAtc-P1oK1SWak8"
              allowFullScreen
              title="Embedded YouTube Video"
            ></iframe>
          </div>
          <div>
            <p className="text-[#653B0C] text-lg sm:text-xl font-semibold text-center mt-7 mb-4">
              Start your journey with us as a student to end up being a Teacher.
              As Prophet Muhammad (PBUH) stated: “The best among you (Muslims)
              are those who learn the Quran and teach it.” Stand out of the
              crowd and have deep learning of Islam Quran House prepares an
              active Muslim who understands all aspects of his religion’s needs.
              That’s why we teach our students everything they need to be better
              practicing Muslims. Such as Tafseer, Hadith, Aqeedah, Tazkiyah,
              and more.
            </p>
          </div>
        </div>
      </section>
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${HomeBG})` }}
        ></div>
        <div className="relative container mx-auto p-3 lg:px-0 xl:px-32 z-10">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6">
              <img
                src={HomeTeachers}
                alt="Teachers"
                className="w-full h-auto"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div>
                <h2 className="text-3xl text-center lg:text-start sm:text-4xl md:text-5xl font-bold text-[#DC811C]">
                  Learn Quran And Arabic <br /> Online With Best Tutors
                </h2>
                <p className="text-lg sm:text-xl font-semibold text-[#653B0C] py-4">
                  Enlighten your heart with the word of Allah! Like every new
                  route you take in your life, you always need a guide that
                  helps you to reach your targeted destination. Quran House is
                  the finest online Quran teaching website to accompany you in
                  your Quran and Arabic learning journey. Learn Tajweed
                </p>
                <p className="text-lg sm:text-xl font-semibold text-[#653B0C]">
                  We teach you better Arabic to be able to recite the Quran with
                  Tajweed and memorize it perfectly. By the end, you’ll have the
                  potential to teach the Quran to other brothers and sisters and
                  get Ijazah!
                </p>
                <div className="mt-8 pb-4 text-center lg:text-start">
                  <Link
                    to="/"
                    className="text-xl md:text-2xl lg:text-3xl text-white bg-[#766CAD] px-5 py-3 rounded-full hover:bg-[#5b5196] transition-all duration-150"
                  >
                    Try Free Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
