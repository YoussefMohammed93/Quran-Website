import { Link } from "react-router-dom";
import Header from "./Header";
import OrangeCard from "./Orange-Card";
import BlueCircle from "./BlueCircle";
import HomeImg from "/src/assets/SectionHome.svg";
import HomeBG from "/src/assets/home-bg.png";
import HomeTeachers from "/src/assets/home-teachers.png";
import CalendarImg from "/src/assets/calendar.png";
import MedalImg from "/src/assets/medal.png";
import RisingImg from "/src/assets/rising.png";
import LiveImg from "/src/assets/live.png";
import SystemImg from "/src/assets/monitoring-system.png";
import CreditCard from "/src/assets/credit-card.png";
import MuslimImg from "/src/assets/muslim.svg";
import PrayingImg from "/src/assets/praying.png";
import RepeatImg from "/src/assets/repeat.png";
import FeedbackImg from "/src/assets/feedback.png";
import HomeWorkImg from "/src/assets/homework.png";
import ArrowImg from "/src/assets/Right-Arrow.svg";
import CompanyImg from "/src/assets/Company-Profile.svg";

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
      <section>
        <div className="container mx-auto p-3 lg:px-32 xl:px-64">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 my-8 sm:my-16">
            <div className="flex flex-col items-center">
              <img
                src={CalendarImg}
                alt="calendar"
                style={{ width: "90px", height: "90px" }}
              />
              <h3 className="text-center mt-3 font-semibold">
                Your Own <br></br> Suitable Schedule
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={MedalImg}
                alt="calendar"
                style={{ width: "90px", height: "90px" }}
              />
              <h3 className="text-center mt-3 font-semibold">
                Highly Qualified & <br></br> Expert Tutors
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={RisingImg}
                alt="calendar"
                style={{ width: "90px", height: "90px" }}
              />
              <h3 className="text-center mt-3 font-semibold">
                Progress Tracking
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={LiveImg}
                alt="calendar"
                style={{ width: "90px", height: "90px" }}
              />
              <h3 className="text-center mt-3 font-semibold">
                One-On-One <br></br> Live Sessions
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={SystemImg}
                alt="calendar"
                style={{ width: "90px", height: "90px" }}
              />
              <h3 className="text-center mt-3 font-semibold">
                Classes <br></br> Monitoring System
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={CreditCard}
                alt="calendar"
                style={{ width: "90px", height: "90px" }}
              />
              <h3 className="text-center mt-3 font-semibold">
                Secure <br></br> Payment Method
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFE3CB]">
        <div className="container mx-auto p-3 lg:px-0 xl:px-32 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pr-8 md:border-r md:border-r-black md:mb-5">
              <h2 className="text-4xl font-bold text-[#DC811C]">
                Are you an adult who wants to learn Quran, Arabic, and Islam?
              </h2>
              <p className="text-lg my-8">
                Begin with Quran House a new chapter in your life! We present a
                course for every level and objective.Define your goals and level
                of proficiency, and you’ll find a tailored online course within
                your hand Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
              <div className="mb-8">
                <Link
                  to="/"
                  className="text-xl md:text-2xl lg:text-3xl text-white bg-[#766CAD] px-5 py-3 rounded-full hover:bg-[#5b5196] transition-all duration-150"
                >
                  Start Now!
                </Link>
              </div>
            </div>
            <div className="px-4">
              <h2 className="text-4xl font-bold text-[#DC811C]">
                Are you a parent who wants to grow his kids on Islamic rulings?
              </h2>
              <p className="text-lg my-8">
                Raise your children on the principles of our tolerant religion!
                We know there shall come a time when the one who is patient with
                his religion will be like holding onto a burning ember. We will
                keep your kids in honest hands on solid ground.
              </p>
              <div className="mb-8">
                <Link
                  to="/"
                  className="text-xl md:text-2xl lg:text-3xl text-white bg-[#766CAD] px-5 py-3 rounded-full hover:bg-[#5b5196] transition-all duration-150"
                >
                  Start Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b-2 border-t-2">
        <div className="container mx-auto p-4 lg:px-8 xl:px-32 my-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="flex justify-center lg:col-span-4">
              <img
                src={MuslimImg}
                alt="muslim"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DC811C]">
                An Online Quran Academy Website That Prepares Strong Muslims
              </h2>
              <p className="text-base sm:text-lg md:text-xl mt-5">
                Our Quran, Arabic, and Islamic studies courses qualify you to
                skilfully speak Arabic, recite the Quran, and live by Islamic
                rulings with the aid of native experts. We teach you how to
                memorize the Quran, and recite it with the correct tajweed.
              </p>
              <p className="text-base sm:text-lg md:text-xl mt-5">
                Quran House is attentive to support you to fully understand
                Islam correctly through Islamic studies courses, which include
                Hadith, Aqeedah, Tafseer, Tazkiyah, and comparative religions
                courses. Through our crash course, the real spirit of Islam will
                fill your heart.
              </p>
              <div className="mt-8">
                <Link
                  to="/"
                  className="text-xl md:text-2xl text-white bg-[#DC811C] px-5 py-3 rounded-full hover:bg-[#be7623] transition-all duration-150"
                >
                  Explore Our Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b-2">
        <div className="container mx-auto p-4 lg:px-8 xl:px-32 my-6">
          <h2 className="text-center text-[#DC811C] text-5xl font-bold">
            Best Online Quran Classes
          </h2>
          <p
            className="text-center mt-5 text-2xl"
            style={{ lineHeight: "1.5" }}
          >
            Expand Your Knowledge About Quran Through Our <br></br> Exceptional
            Methods of Teaching
          </p>
          <div className="orange-card-container grid grid-cols-12 gap-6 my-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <OrangeCard
                orangeCardTitle="Online Quran Classes For Kids"
                orangeCardDescription="Online Quran classes for kids Constructed to Be the Best Guide for kids. Online Quran Classes For Kids – Begin Learning Quran With the Help of Professional Al-Azhar Tutors. "
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <OrangeCard
                orangeCardTitle="Online Quran Ijazah Course"
                orangeCardDescription="After Ijazah Course, Students Will Correctly Recite the Full Quran From Mushaf and by heart. A new phase of your Quranic journey is about to begin. A new phase of your Quranic journey is about to begin.  "
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <OrangeCard
                orangeCardTitle="Intensive Quran Course"
                orangeCardDescription="Prophet Muhammad (PBUH) once said: “The one who is proficient in the recitation of the Quran will be with the honorable and obedient scribes (angels), ..... the honorable and obedient scribes (angels). "
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <OrangeCard
                orangeCardTitle="Quran Tafseer Course"
                orangeCardDescription="Muslims who recite Quran may find some verses difficult to understand, but the course aids both Arab students in better understanding Quran. Arab and non-Arab students in better understanding Quran. "
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <OrangeCard
                orangeCardTitle="Quran Memorization Course"
                orangeCardDescription="Eady To Carry The Words Of Allah In Your Heart ? The Manners Of Each Verse (Ayah) Who Learn To Memorize Quran. The Manners Of Each Verse (Ayah) Who Learn To Memorize Quran. "
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <OrangeCard
                orangeCardTitle="Online Quranic Arabic Course"
                orangeCardDescription="The Quranic Arabic language is necessary to learn in order to be able to read the Quran, and have a deeper understanding of it. read the Quran, and have a deeper understanding of it. "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="border-b-2">
        <div className="container mx-auto p-4 lg:px-8 xl:px-32 my-6">
          <h2 className="text-center text-[#DC811C] text-5xl font-bold">
            Best Arabic Online Courses
          </h2>
          <p
            className="text-center mt-5 text-2xl"
            style={{ lineHeight: "1.5" }}
          >
            Expand Your Knowledge About Arabic Through <br></br> Our Exceptional
            Methods of Teaching
          </p>
          <div className="orange-card-container grid grid-cols-12 gap-6 my-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <OrangeCard
                orangeCardTitle="Best Arabic Online Courses"
                orangeCardDescription="Our Arab “Fushah” program is an insightful academic plan that lets you acquire all the Arabic tools to comprehend, write, read, and fluently speak. to comprehend, write, read, and fluently speak. "
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <OrangeCard
                orangeCardTitle="Fusha Arabic Course"
                orangeCardDescription="One can learn Modern Standard Arabic and Fusha Arabic online at Quran House in an integrated course that progresses from beginner to expert levels. that progresses from beginner to expert levels. "
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <OrangeCard
                orangeCardTitle="Arabic Classes For Kids"
                orangeCardDescription="This online Arabic classes for kids are the primary course tailored for beginners students who nearly know nothing about this distinctive language. know nothing about this distinctive language. "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="border-b-2">
        <div className="container mx-auto p-4 lg:px-16 xl:px-32 my-6">
          <h2
            className="text-center text-[#766CAD] text-2xl sm:text-3xl md:text-5xl font-bold"
            style={{ lineHeight: "1.3" }}
          >
            How Do Our Courses Work During a Month?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 mb-4">
            <div className="relative">
              {" "}
              <BlueCircle
                blueCircleIMg={PrayingImg}
                blueCircleText="Take The Classes"
              />
              <div className="arrow-img absolute top-[85px] right-[-40px]">
                <img src={ArrowImg} alt="arrow" />
              </div>
            </div>
            <div className="relative">
              {" "}
              <BlueCircle
                blueCircleIMg={HomeWorkImg}
                blueCircleText="Study And Do The Assignments"
              />
              <div className="arrow-img absolute top-[85px] right-[-40px]">
                <img src={ArrowImg} alt="arrow" />
              </div>
            </div>
            <div className="relative">
              {" "}
              <BlueCircle
                blueCircleIMg={FeedbackImg}
                blueCircleText="Receive Our Feedback"
              />
              <div className="arrow-img absolute top-[85px] right-[-40px]">
                <img src={ArrowImg} alt="arrow" />
              </div>
            </div>
            <div className="relative">
              {" "}
              <BlueCircle
                blueCircleIMg={RepeatImg}
                blueCircleText="Repeat Again"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto p-4 lg:px-16 xl:px-32 my-6">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 sm:gap-12 md:gap-16">
            <div className="col-span-12 md:col-span-5 order-1 md:order-2">
              <img src={CompanyImg} alt="Company-Profile" />
            </div>
            <div className="col-span-12 md:col-span-7 order-2 md:order-1">
              <h3 className="text-2xl text-center md:text-start sm:text-3xl md:text-5xl text-[#766CAD] font-bold">
                Download & Read Quran House Company Profile
              </h3>
              <p className="text-lg sm:text-xl my-10 text-center md:text-start">
                Below you will find the attached profile of Quran House and its
                credentials. Download the PDF and enjoy reading.
              </p>
              <div className="my-4 text-center md:text-start">
                <a
                  href="/"
                  className="text-xl md:text-2xl text-white bg-[#766CAD] px-5 py-3 rounded-full hover:bg-[#5b5196] transition-all duration-150"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
