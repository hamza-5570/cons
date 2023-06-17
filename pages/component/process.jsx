import React, { useState } from "react";
import Typess from "../../public/png/typess.png";
import Fund from "../../public/png/fund.png";
import Mc from "../../public/png/mc.png";
import Set from "../../public/png/set.png";
import Proc from "../../public/png/Proc.png";
import Flow from "../../public/png/flow.png";
import Arr from "../../public/png/arr.png";
import Arr2 from "../../public/png/arr2.png";
import Graph from "../../public/png/graph.png";
import Image from "next/image";

export default function Process() {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };

  return (
    <>
      <div className="w-[90%] lg:w-[80%] mt-20 md:mt-40 mx-auto">
        <p className=" font-[800] text-[28px] md:text-[45px] text-[#292949] text-center md:text-start">Our Process</p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-16 ">
          <div>
            <div
              onClick={() => handleClick(1)}
              // className={activeButton === 1 ? "active" : ""}
              className=" font-[600] text-[#2929498C] hover:font-[700] hover:text-[#3E3EE2] hover:bg-[#EFF3FA] hover:p-3 hover:border-2 hover:border-white rounded-2xl"
              style={{ display: "flex", cursor: "pointer"
            

            }}
            >
              <p className="   text-[15px] md:text-[20px]  bg-[#3E3EE21A] w-[12%] md:w-[8%] lg:w-[13%] xl:w-[10%] py-3  text-center rounded-full">
                01
              </p>
              <p className="ml-5 self-center  text-[15px]  md:text-[20px] ">
                Email sign up
              </p>
            </div>

            <div
              onClick={() => handleClick(2)}
              className=" font-[600] text-[#2929498C] hover:font-[700] hover:text-[#3E3EE2] hover:bg-[#EFF3FA] hover:p-3 hover:border-2 hover:border-white rounded-2xl"

              style={{ display: "flex", marginTop: "40px", cursor: "pointer" }}
            >
              <p className="  text-[15px] md:text-[20px]  bg-[#3E3EE21A] w-[12%] md:w-[8%] lg:w-[13%] xl:w-[10%] py-3  text-center rounded-full">
                02
              </p>
              <p className="ml-5 self-center  text-[15px]  md:text-[20px] ">
                Take Funding Readiness to email
              </p>
            </div>

            <div
              onClick={() => handleClick(3)}
              className=" font-[600] text-[#2929498C] hover:font-[700] hover:text-[#3E3EE2] hover:bg-[#EFF3FA] hover:p-3 hover:border-2 hover:border-white rounded-2xl"

              style={{ display: "flex", marginTop: "40px", cursor: "pointer" }}
            >
              <p className=" text-[15px] md:text-[20px] bg-[#3E3EE21A] w-[12%] md:w-[8%] lg:w-[13%] xl:w-[10%] py-3  text-center rounded-full">
                03
              </p>
              <p className="ml-5 self-center  text-[15px]  md:text-[20px] ">
                Match with VC
              </p>
            </div>

            <div
              onClick={() => handleClick(4)}
              className=" font-[600] text-[#2929498C] hover:font-[700] hover:text-[#3E3EE2] hover:bg-[#EFF3FA] hover:p-3 hover:border-2 hover:border-white rounded-2xl"

              style={{ display: "flex", marginTop: "40px", cursor: "pointer" }}
            >
              <p className=" text-[15px] md:text-[20px] bg-[#3E3EE21A] w-[12%] md:w-[8%] lg:w-[13%] xl:w-[10%] py-3  text-center rounded-full">
                04
              </p>
              <p className="ml-5 self-center  text-[15px]  md:text-[20px] ">
                Get funding and you are all set to go
              </p>
            </div>

            <button className="hidden lg:block mt-14 md:mt-24  font-jakarta font-[400] text-[20px] py-3 px-8 rounded-2xl text-white bg-[#3E3EE2]">
              Sign Up
            </button>
          </div>

          <div className="mt-20 lg:mt-0">
            {activeButton === 1 && <Image alt="nothing" className="w-[60%] mx-auto" src={Proc} />}

            {activeButton === 2 && <Image alt="nothing" className="w-[60%] mx-auto" src={Fund} />}

            {activeButton === 3 && <Image alt="nothing" className="w-[60%] mx-auto" src={Mc} />}

            {activeButton === 4 && <Image alt="nothing" className="w-[60%] mx-auto" src={Set} />}
            <Image alt="nothing" className="hidden md:block w-[60%] mx-auto" src={Typess} />
          </div>
        </div>

        <p className="mt-28 font-[800] text-[30px] md:text-[45px] text-[#292949] text-center">
          Receive a{" "}
          <span className="text-[#4A3AFF] ml-2">
            Free Funding Readiness Score!
          </span>
        </p>
        <p className="mt-1 font-[400] text-[18px] md:text-[25px] text-[#292949] text-center">
          What is the Funding Readiness Test?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-[#DCDAF3] p-5 rounded-3xl border-[1px] border-white">
            <p className="mt-5 font-[400] text-[15px] text-[#292949]">
              Our funding readiness test gives you a score of how much you are
              ready for funding from venture capitals.
            </p>
            <p className="mt-4 font-[700] text-[15px] text-[#292949]">
              Our AI-analytic tool assess your startup in threefolds :
            </p>

            <Image alt="nothing" className="mt-5" src={Flow} />
          </div>

          <div className="self-center">
            <div className="p-5 flex justify-between bg-[#EFF3FA] border-[1px] border-white rounded-3xl">
              <div>
                <p className=" font-[700] text-[20px] text-[#292949]">
                  If you score above 80,
                </p>
                <p className=" font-[400] text-[20px] text-[#292949]">
                  you will be match with VC
                </p>
              </div>
              <Image
                className=" self-end h-[40px] w-[40px]"
                alt="nothing"
                src={Arr}
              />
            </div>

            <div className="mt-5 flex justify-between bg-[#EFF3FA] p-5 border-[1px] border-white rounded-3xl">
              <div>
                <p className="font-[700] text-[20px] text-[#292949]">
                  If you score above 80,
                </p>
                <p className="w-[80%] lg:w-[70%] xl:w-[70%]  font-[400] text-[20px] text-[#292949]">
                  you have an option to receive a report from us which areas you
                  are missing – even in order to talk to VC.
                </p>
              </div>
              <Image
                className=" self-center h-[40px] w-[40px]"
                alt="nothing"
                src={Arr2}
              />
            </div>
          </div>
        </div>

        <button className="block mx-auto mt-10  font-jakarta font-[400] text-[20px] py-3 px-8 rounded-2xl text-white bg-[#3E3EE2]">
          Sign Up
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#342C98] gap-8 mt-16">
        <div>
          <Image className="w-[50%] lg:w-[100%]" src={Graph} />
        </div>
        <div className="self-center">
          <p className="text-center lg:text-start  font-[800] text-[30px] lg:text-[40px] text-white ">
            Referral Bonus $500
          </p>
          <p className="text-center lg:text-start font-[400] text-[16px] text-white ">
            Refer an entrepreneur or startup to us. Once they get an investment
            from VC, you will receive a referral bonus!
          </p>
        </div>

        <div className="self-center">
          <button className="block mx-auto mt-5 md:mt-10  font-jakarta font-[400] text-[20px] py-3 px-8 rounded-2xl text-white bg-[#3E3EE2]">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
