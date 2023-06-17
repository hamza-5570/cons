import React from "react";
import Flogo from "../../public/png/flogo.png";
import Soc from "../../public/png/soc.png";
import Soc2 from "../../public/png/soc2.png";
import Soc3 from "../../public/png/soc3.png";
import Soc4 from "../../public/png/soc4.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-[#100C36]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-[90%] md:w-[80%] mx-auto gap-5 py-10 md:py-28">
          <div>
            <Image alt="nothing" className="w-[50%] cursor-pointer" src={Flogo} />
            <p className="mt-5 font-[400] text-[13px] text-white cursor-pointer">
              © 2023 ConneXc. All rights reserved.
            </p>
          </div>
          <div className="mt-10 md:mt-0 lg:mx-auto">
            <p className="font-[600] text-[20px] text-white">Quick Links</p>
            <p className="mt-5 md:mt-5 font-[400] text-[15px] text-white cursor-pointer"> Why Us</p>
            
            <p className="mt-5 font-[400] text-[15px] text-white cursor-pointer"> FAQ </p>
          </div>

          <div className=" md:mt-0 lg:mx-auto">
            <p className="mt-0 md:mt-12 font-[400] text-[15px] text-white cursor-pointer">
              {" "}
              Our Process{" "}
            </p>
            <p className="mt-5 font-[400] text-[15px] text-white cursor-pointer">
              {" "}
              Our Mission{" "}
            </p>
          </div>

          <div className="flex h-[40px]  md:mt-0 lg:mx-auto">
          <p className="mt-0 md:mt-12 font-[400] text-[15px] text-white cursor-pointer"> Contact</p>
          
          </div>
        </div>
      </div>
    </>
  );
}
