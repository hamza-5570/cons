import React from "react";
import Icon from "../../public/asset/icon.svg";
import Icon2 from "../../public/asset/icon2.svg";
import Icon3 from "../../public/asset/icon3.svg";
import Image from "next/image";
import Sponsers from "./sponsers";
import Fade from "react-reveal/Fade";
import SliderOne from "./sliderone";
import SliderTwo from "./slidertwo";
import SliderThree from "./sliderthree";

const card = [
  {
    img: Icon,
    price: "+$33.8B",
    pro: "Raised",
  },
  {
    img: Icon2,
    price: "23,450+",
    pro: "VC",
  },
  {
    img: Icon3,
    price: "3180+",
    pro: "Experts",
  },
];

export default function Why() {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(244.22deg, #3E3EE2 1.14%, #7937F7 67.72%)",
          marginTop: "50px",
        }}
        className="h-[600px] lg:h-[200px]"
      >
        <p className="pt-10 text-[45px] font-[800] text-white text-center ">
          Why us?
        </p>
      </div>

      <Fade bottom>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto gap-5 -mt-[450px] lg:-mt-16">
          {card.map((user, index) => (
            <div
              key={index}
              className="flex bg-white shadow-xl p-5 rounded-2xl justify-center bg-[#ECF3FF]"
            >
              <Image src={user.img} />
              <div className="ml-3">
                <p className="font-[700] text-[35px] text-[#292949]">
                  {user.price}
                </p>
                <p className="font-[400] text-[20px] text-[#292949CC]">
                  {user.pro}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-[400] text-[15px] md:text-[25px] text-[#2D2D46D9] text-center w-[80%] md:w-[60%] mx-auto mt-20">
          Pretium quis volutpat pellentesque ultrices justo eget elementum
          vulputate. Nisi hendrerit augue blandit sed.
        </p>
      </Fade>

<SliderOne/>
<SliderTwo/>
<SliderThree/>

<button className="mt-14 md:mt-24 mx-auto block font-jakarta font-[400] text-[20px] py-3 px-8 rounded-2xl text-white bg-[#3E3EE2]">
        Sign Up
      </button>
    </>
  );
}
