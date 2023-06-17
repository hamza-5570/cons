import React from "react";
import Accordions from "./accordian";

export default function Faq() {
  return (
    <>
      <div className="py-16 bg-[#EFF3FA]">
        <p className=" font-[700] text-[45px] text-[#292949] text-center ">
          FAQ
        </p>

        <Accordions />
      </div>
    </>
  );
}
