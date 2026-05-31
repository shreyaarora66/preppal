import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../assets/Images/banner11.mp4";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import HighlightText from "../components/core/HomePage/HighlightText";
import InstructorSection from "../components/core/HomePage/InstructorSection";


function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="h-16"></div>
      {/* Section 1 */}
      <div className="relative mx-auto w-11/12 max-w-maxContent text-white  bg-black ">
        {/* Video as background */}
        <div className="absolute inset-0 z-0">
          <video
            className="opacity-60 w-full h-full object-cover"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Optional: Add overlay for better text visibility */}
        </div>
        <div className="h-20"></div>
        {/* Content */}
        <div className=" top-20 relative z-10 flex flex-col  items-center justify-between gap-8">
          {/* Heading */}
          <div
            data-aos="fade-right"
            className="text-center text-4xl font-semibold"
          >
            Empower Your Learning
            <HighlightText text={"Journey"} />
          </div>

          {/* Sub Heading */}
          <div
            data-aos="fade-left"
            className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300"
          >
            Access, share, and learn from peer-created study materials
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-row gap-7 ">
            <CTAButton active={true} linkto={"/signup"}>
              Explore Materials
            </CTAButton>
            <CTAButton active={false} linkto={"/login"}>
              Upload Your Content
            </CTAButton>
          </div>

          {/* Become an Instructor Button */}
          <Link to={"/signup"}>
            <div
              data-aos="zoom-in"
              className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none"
            >
              <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                <p>Become an Instructor</p>
                <FaArrowRight />
              </div>
            </div>
          </Link>
        </div>

        <div className="h-20"> </div>

        {/* Code Section 1  */}

        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div data-aos="fade-right" className="text-4xl font-semibold">
                How
                <HighlightText text={"PrepPal"} /> Works..
              </div>
            }
            subheading={
              "PrepPal offers a platform where knowledge is freely exchanged, making learning an engaging and collaborative experience. Dive into study materials, contribute your insights, and join the conversation to enhance your academic journey."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/about",
              active: false,
            }}
            codeColor={"text-blue-100"}
            codeblock={`<Find Materials>:\n Browse through a wide range of lecture notes, video tutorials, and study guides uploaded by your peers.\n<Share Your Knowledge>:\nContribute by uploading your own videos and notes to help others.\n<Engage with the Community>:\nRate materials, provide feedback, and join discussions to enhance your learning experience.\n`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}

        <ExploreMore />
      </div>
      <div className="h-16"></div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700 ">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 "></div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 p-2  flex w-11/12 max-w-maxContent flex-col items-center justify-end gap-10 bg-richblack-700 text-richblack-900">
        {/* Become a instructor section */}
        <InstructorSection />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
