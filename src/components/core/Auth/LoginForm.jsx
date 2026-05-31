import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../../services/operations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  const functionforstudent = (e) => {
    e.preventDefault();
    setFormData({
      email: "21uec012@lnmiit.ac.in",
      password: "1234",
    });
    dispatch(login("21uec012@lnmiit.ac.in", "1234", navigate));
  };

  const functionforinstructor = (e) => {
    e.preventDefault();
    setFormData({
      email: "agamsuthar1003@gmail.com",
      password: "123",
    });
    dispatch(login("agamsuthar1003@gmail.com", "123", navigate));
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className="mt-6 flex w-full flex-col gap-y-4"
      >
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-5 p-[12px] text-richblack-1000 "
          />
        </label>
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-5 p-[12px] pr-12 text-richblack-1000"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="/forgot-password">
            <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
              Forgot Password
            </p>
          </Link>
        </label>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-caribbeangreen-200 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Sign In
        </button>
        <p className=" text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Are you a visitor ? Login without Credentials.
        </p>
        <div className="flex flex-row gap-2 justify-between">
          <button
            onClick={functionforstudent}
            className="rounded-[8px] w-1/2 bg-caribbeangreen-200 py-[8px] px-[12px] font-light text-sm text-richblack-900 animate-bounce"
          >
            Visitor Login as Student
          </button>
          <button
            onClick={functionforinstructor}
            className=" rounded-[8px] w-1/2 bg-caribbeangreen-200 py-[8px] px-[12px] font-light text-sm text-richblack-900 animate-bounce"
          >
            Visitor Login as Instructor
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
