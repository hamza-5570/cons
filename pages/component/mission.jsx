import React, { useState } from "react";
import People from "../../public/png/people.png";
import Man from "../../public/png/man.png";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../helper";
import axiosClient from "../../helper";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import Gra from "../../public/png/gra.png"


export default function Mission() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      memo: "",
    },
    validationSchema: yup.object({
      first_name: yup
        .string()
        .min(3, "Name must be 5 chracters long.")
        .required(),
      last_name: yup
        .string()
        .min(3, "Name must be 5 chracters long.")
        .required(),
      email: yup
        .string()
        .min(5, "Please enter a valid Email address.")
        .required(),
      password: yup
        .string()
        .min(5, "Password must be 6 chracters long.")
        .required(),

      memo: yup.string().min(3, "Name must be 20 chracters long.").required(),
    }),

    onSubmit: (values) => {
      axiosClient()
        .post("/signup", values)

        .then((res) => {
          setLoading(true);
          toast.success("User SignUp Successfully");
          setTimeout(() => {
            router.push({
              pathname: "/code",
              // query: { prop: res.data.data.email },
            });
            console.log("res==>", res.data.data.email);
          }, 2000);
          // console.log({ res.data.data.email });
        })
        .catch((err) => {
          toast.error("User not SignUp");
          console.log({ err });
        });
      console.log({ values });
    },
  });

  return (
    <>
      <ToastContainer />

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[80%] mx-auto py-10 overflow-hidden">
        <Fade left>
          <div className="self-center">
            <p className="font-[800] text-[45px] text-[#292949] text-center lg:text-start">
              Our Mission
            </p>
            <p className="mt-5 font-[00] text-[15px] text-[#292949] text-center lg:text-start">
              Our company is dedicated to empowering purpose-driven
              entrepreneurs and their groundbreaking initiatives to realize
              their fullest potential. By providing AI-based fundraising
              solutions and expert guidance, we aim to facilitate their path
              toward success, one step at a time.
            </p>
            <p className="mt-3 font-[00] text-[15px] text-[#292949] text-center lg:text-start">
              We believe in the power of collective action and are committed to
              fostering a supportive community of changemakers who are driving
              positive impact and shaping a brighter future for generations to
              come.
            </p>
          </div>
        </Fade>

        <Fade right>
          <div>
            <Image src={People} />
          </div>
        </Fade>
      </div>

<div className="relative">
      <div className="bg-[#3E3EE20D] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[80%] mx-auto ">
          <Fade>
            <div className="self-center">
              <p className="font-[800] text-[30px] md:text-[45px] text-[#292949] text-center lg:text-start">
                Need Fundraising?
              </p>
              <p className="mt-1 font-[00] text-[18px] text-[#292949] text-center lg:text-start">
                Sign up to stay informed with us.
              </p>

              <Image
                alt="nothing"
                className="hidden lg:block mt-10 w-[60%]"
                src={Man}
              />
            </div>
          </Fade>

          <div className="mt-10 lg:mt-0">
            <form onSubmit={formik.handleSubmit}>
              <div className="bg-[#EFF3FA] border-[1px] border-white rounded-2xl p-10">
                <input
                  type="text"
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  placeholder="First Name"
                  className="p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                />
                <input
                  type="text"
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  placeholder="Last Name"
                  className="mt-5 p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                />
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email"
                  className="mt-5 p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                />
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="password"
                  className="mt-5 p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                />

                <input
                  type="text"
                  name="memo"
                  value={formik.values.memo}
                  onChange={formik.handleChange}
                  placeholder="Memo"
                  className="mt-5 p-4 bg-[#E7ECF5]  w-full font-[400] text-[#2D2D4673] text-[15px] rounded-2xl border-[1px] border-white"
                />

                <button
                  type="submit"
                  className=" block mx-auto mt-5 md:mt-10  font-jakarta font-[400] text-[20px] py-4 px-10 rounded-2xl text-white bg-[#3E3EE2]"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <Image
              alt="nothing"
              className="block lg:hidden mt-10 w-[60%] mx-auto"
              src={Man}
            />
          </div>
        </div>
      </div>

      <Image src={Gra} className= "hidden lg:block absolute top-72 left-40 w-[60%] -z-10" />
      </div>
    </>
  );
}
