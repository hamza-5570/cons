import React from "react";
import Banners from "../../public/jgp/Hero.png";
import Image from "next/image";
import Fact from "../../public/jgp/fact.png";
import Fact2 from "../../public/jgp/fact2.png";
import Fact3 from "../../public/jgp/fact3.png";
import Fade from "react-reveal/Fade";
import Link from "next/link";

function Banner() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto overflow-hidden">
        <Fade left>
          <div className="self-center md:w-[90%] mt-10">
            <p className="heading font-jakarta font-[800] text-[35px]  md:text-[30px] lg:text-[40px] xl:text-[52px] text-[#292949] ">
              Need finance expert to fundraise for you?
            </p>
            <p className="mt-2 font-[400] text-[10px] md:text-[10px] lg:text-[15px] text-[#2D2D46D9]">
              We match your startup with the right venture capital
            </p>
            <button className="mt-5 font-jakarta font-[400] text-[20px] py-3 px-7 rounded-2xl text-white bg-[#3E3EE2]">
              Sign Up
            </button>
            <p className="mt-2 font-jakarta text-[15px] font-[400] text-[#2D2D46D9]">
              Already have account?{" "}
              <Link href="/login">
              <span className="text-[#3E3EE2B2] cursor-pointer font-[700]">Login</span>
              </Link>
            </p>
          </div>
        </Fade>
        <Fade right>
          <div>
            <Image alt="nothing" src={Banners} />
          </div>
        </Fade>
      </div>

      <div className="mt-5">
        <p className=" font-[800] text-[45px] text-[#292949] text-center">
          Facts
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] xl:w-[70%] mx-auto gap-10 ">
          <Fade left>
            <div className="bg-[#EFF3FA] px-10 py-5 rounded-2xl shadow-xl">
              <p className="font-[400] text-[20px] text-center text-[#2D2D46D9]">
                Startups get the VC funding
              </p>
              <Image alt="nothing" className="mt-5" src={Fact} />
            </div>
          </Fade>

          <Fade>
            <div className="bg-[#EFF3FA] px-10 py-5 rounded-2xl shadow-xl">
              <Image alt="nothing" src={Fact2} />

              <p className="mt-10 font-[400] text-[18px] xl:text-[20px] text-center text-[#2D2D46D9]">
                Of VC-backed startups are referrals
              </p>
            </div>
          </Fade>

          <Fade right>
            <div className="bg-[#EFF3FA] px-10 py-5 rounded-2xl shadow-xl">
              <p className="font-[400] text-[20px] text-center text-[#2D2D46D9]">
                Remember, you only have
              </p>
              <Image
                className="mt-5 mb-5 xl:mb-7 w-[70%] mx-auto"
                alt="nothing"
                src={Fact3}
              />
              <p className="mt-5 font-[700] text-[20px] text-center text-[#2D2D46D9]">
                first impression
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Banner;
