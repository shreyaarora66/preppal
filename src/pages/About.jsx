import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import developerimage from "../assets/Images/developerimage.jpeg";
import homess from "../assets/Images/homess.png";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import Footer from "../components/common/Footer";
import lnmiit from "../assets/Images/lnmiit.jpg";
import { FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-richblack-800">
      <div className="h-20"></div>
      <section className="bg-richblack-800">
        <div className=" mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-richblack-800">
          <header
            data-aos="zoom-in"
            className="mx-auto py-20 text-4xl font-semibold lg:w-[70%] text-white"
          >
            Welcome to
            <HighlightText text={"PrepPal"} />
            <div className="mt-8  mb-8 ">
              <img src={homess} alt="" className="rounded-2xl" />
            </div>
            <p
              data-aos="zoom-in-down"
              className="mx-auto mt-3  text-base font-medium text-richblack-200 lg:w-[95%] text-left "
            >
              <p>
                At PrepPal, we believe that the best learning happens when
                students collaborate and support each other. Our platform was
                born out of the need to bridge the gap in exam preparation at
                YMCA. We understand that the journey through academia can be
                challenging, especially when trying to grasp complex topics and
                lectures.
              </p>
              <br></br>
              <p>
                That’s why we created PrepPal – a dedicated space where YMCA
                students can share their knowledge and insights through video
                tutorials. Whether you’re struggling with a specific topic or
                seeking alternative explanations, our community-driven platform
                offers a wealth of resources at your fingertips.
              </p>
              <br></br>
              <p>
                Our goal is simple: to empower every student with the tools and
                support they need to excel. By enabling students to upload and
                access lecture videos, PrepPal transforms peer learning into a
                powerful, accessible, and interactive experience.
              </p>
              <br></br>
              <p>
                Join us in building a collaborative learning environment where
                knowledge is shared, and academic success is a collective
                achievement. Welcome to a new way of studying – welcome to
                PrepPal!
              </p>
            </p>
          </header>
        </div>
      </section>
      <StatsComponenet />

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our journey began with a simple yet profound mission: to enhance
                exam preparation and academic support for students at YMCA. As
                we navigated the demands and pressures of exam times, we
                recognized a common challenge among our peers— the need for
                accessible, peer-driven educational resources. In response, we
                envisioned a platform designed specifically for our university
                community. We wanted to create a space where students could
                share their insights and knowledge through video content,
                helping one another understand complex topics and excel in their
                studies.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our platform allows any YMCA student to upload videos
                explaining various lectures and topics, creating a rich
                repository of resources tailored to our unique curriculum. By
                fostering collaboration and peer-to-peer teaching, we aim to
                support each student's learning journey and make exam
                preparation more effective and engaging. Our mission is to
                bridge the gap between individual learning needs and the
                collective knowledge within our university, empowering every
                student to succeed and thrive.
              </p>
            </div>

            <div className="w-[50%]">
              <img
                src={lnmiit}
                alt=""
                className="shadow-[0_0_20px_0]  rounded-3xl h-full w-full "
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 justify-between lg:flex-row ">
            <div className="my-24 flex lg:w-[40%] flex-col gap-1">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Meet the Developer
              </h1>

              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] "></h1>
              <h1 className="text-white font-bold text-3xl mt-3">
                <HighlightText text={"Shreya Arora"} />
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Pursuing Bachelor of Technology (B.Tech) degree in Electronics
                and Computers Engineering (ENC) at YMCA, Faridabad, with a keen
                interest in full-stack web development and emerging technologies.
                Dedication to both academic studies and development skills
                demonstrates ambition to excel in software domains. Passionate
                about building intuitive, user-friendly web applications and
                contributing to peer-driven learning communities. Commitment to
                continuous learning reflects a strong drive to succeed in the
                ever-evolving field of technology.
              </p>
              <div className="  bg-opacity-0 bg-richblack-1000 ml-0 rounded-3xl w-1/2 h-10 flex items-center justify-between gap-0 mt-5">
                <a
                  href="https://www.linkedin.com/in/shreya-arora-576514229"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white w-8 h-8 hover:bg-blue-200   " />
                </a>

                <a
                  href="https://github.com/shreyaarora66"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white w-8 rounded-full  h-8  hover:bg-black" />
                </a>

                <a
                  href="mailto:shreyaarora4531@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="text-white w-8 h-8 rounded-sm pt-0 pb-0 hover:bg-pink-1000" />
                </a>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src={developerimage}
                alt=""
                className="shadow-[#1FA2FF]  rounded-3xl h-1/2  "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
        
        </div>
      </section>

      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default About;
