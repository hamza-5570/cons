import React, { Component } from "react";
import Slider from "react-slick";
import Ico7 from "../../public/png/ico7.png";
import Ico8 from "../../public/png/icon8.png";
import Ico9 from "../../public/png/ico9.png";
import Ico10 from "../../public/png/ico10.png";
import Ico11 from "../../public/png/ico11.png";
import Ico12 from "../../public/png/ico12.png";
import Image from "next/image";

export default class SliderTwo extends Component {
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
        <Slider {...settings} className="gap-5 pt-10 ml-auto">
          <div>
<Image src={Ico7} className="w-[70%] md:w-[60%] mx-auto" />
          </div>
          <div>
<Image src={Ico8} className="w-[60%] md:w-[50%] mx-auto" />
          </div>
          <div>
<Image src={Ico9} className="w-[60%] md:w-[50%] mx-auto" />
          </div>
          <div>
<Image src={Ico10} className="w-[25%] md:w-[15%] mx-auto" />
          </div>
          <div>
<Image src={Ico11} className="w-[60%] md:w-[50%] mx-auto" />
          </div>
          <div>
<Image src={Ico12} className="w-[40%] md:w-[30%] mx-auto" />
          </div>
                </Slider>
      </div>
    );
  }
}