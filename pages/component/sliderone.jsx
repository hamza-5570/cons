import React, { Component } from "react";
import Slider from "react-slick";
import Ico from "../../public/png/ico.png";
import Ico2 from "../../public/png/ico2.png";
import Ico3 from "../../public/png/ico3.png";
import Ico4 from "../../public/png/ico4.png";
import Ico5 from "../../public/png/ico5.png";
import Ico6 from "../../public/png/ico6.png";
import Image from "next/image";

export default class SliderOne extends Component {
  render() {
    const settings = {
      dots: false,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
    ]
    };
    return (
      <div>
        <Slider {...settings} className="gap-5 pt-20">
          <div>
<Image src={Ico} className=" w-[60%] md:w-[50%] mx-auto   md:ml-5" />
          </div>
          <div>
<Image src={Ico2} className="w-[60%] md:w-[50%] mx-auto   md:mx-0" />
          </div>
          <div>
<Image src={Ico3} className=" w-[40%] md:w-[30%] mx-auto   md:mx-0" />
          </div>
          <div>
<Image src={Ico4} className="w-[60%] md:w-[50%] mx-auto   md:mx-0" />
          </div>
          <div>
<Image src={Ico5} className="w-[60%] md:w-[50%] mx-auto   md:mx-0" />
          </div>
          <div>
<Image src={Ico6} className="w-[60%] md:w-[50%] mx-auto   md:mx-0" />
          </div>
                </Slider>
      </div>
    );
  }
}