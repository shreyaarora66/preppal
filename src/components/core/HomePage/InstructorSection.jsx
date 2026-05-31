import React from "react";
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/i.png";
import HighlightText from "./HighlightText";

const InstructorSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 items-center ">
        <div className="lg:w-[50%]">
          <img src={Instructor} alt="" className="p-4" />
        </div>
        <div className="lg:w-[50%] flex gap-10 flex-col">
          <h1 className="lg:w-[50%] text-4xl font-semibold ">
            Become an instructor
            <HighlightText text={"at PrepPal"} />
          </h1>

          <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Become an instructor to help grow the peer community at YMCA.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
