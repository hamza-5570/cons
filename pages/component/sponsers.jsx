import React from "react";
import Ico from "../../public/png/ico.png";
import Ico2 from "../../public/png/ico2.png";
import Ico3 from "../../public/png/ico3.png";
import Ico4 from "../../public/png/ico4.png";
import Ico5 from "../../public/png/ico5.png";
import Ico6 from "../../public/png/ico6.png";
import Ico7 from "../../public/png/ico7.png";
import Ico8 from "../../public/png/icon8.png";
import Ico9 from "../../public/png/ico9.png";
import Ico10 from "../../public/png/ico10.png";
import Ico11 from "../../public/png/ico11.png";
import Ico12 from "../../public/png/ico12.png";
import Ico13 from "../../public/png/ico13.png";
import Ico14 from "../../public/png/ico14.png";
import Ico15 from "../../public/png/ico15.png";
import Ico16 from "../../public/png/ico16.png";
import Ico17 from "../../public/png/ico17.png";
import Ico18 from "../../public/png/ico18.png";
import Image from "next/image";

export default function Sponsers() {
  const icon = [
    {
      pic: Ico,
    },
    {
      pic: Ico2,
    },
    {
      pic: Ico3,
    },
    {
      pic: Ico4,
    },
    {
      pic: Ico5,
    },
    {
      pic: Ico6,
    },
    {
      pic: Ico7,
    },
    {
      pic: Ico8,
    },
    {
      pic: Ico9,
    },
    {
      pic: Ico15,
    },
    {
      pic: Ico11,
    },
    {
      pic: Ico17,
    },
    {
      pic: Ico13,
    },
    {
      pic: Ico14,
    },
    {
      pic: Ico15,
    },
    {
      pic: Ico16,
    },
    {
      pic: Ico17,
    },
    {
      pic: Ico18,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 md:gap-20 w-[95%] mx-auto mt-10 md:mt-24">
        {icon.map((x, index) => (
          <div key={index} className="">
            <Image className="h-[40px] w-[100%]" alt="nothing" src={x.pic} />
          </div>
        ))}
      </div>

      <button className="mt-14 md:mt-24 mx-auto block font-jakarta font-[400] text-[20px] py-3 px-8 rounded-2xl text-white bg-[#3E3EE2]">
        Sign Up
      </button>
    </>
  );
}
