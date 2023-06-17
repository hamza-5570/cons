import React, { Component } from "react";
import Slider from "react-slick";
import Ico13 from "../../public/png/ico13.png";
import Ico14 from "../../public/png/ico14.png";
import Ico15 from "../../public/png/ico15.png";
import Ico16 from "../../public/png/ico16.png";
import Ico17 from "../../public/png/ico17.png";
import Ico18 from "../../public/png/ico18.png";

import Image from "next/image";

export default class SliderThree extends Component {
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
<Image src={Ico13} className=" w-[30%] md:w-[20%] mx-auto   md:ml-5 " />
          </div>
          <div>
<Image src={Ico14} className="w-[60%] md:w-[50%] mx-auto   md:mx-0" />
          </div>
          <div>
<Image src={Ico15} className="w-[60%] md:w-[50%] mx-auto   md:mx-0" />
          </div>
          <div>
<Image src={Ico16} className="w-[25%] md:w-[15%] mx-auto   md:mx-0" />
          </div>
          <div>
<Image src={Ico17} className="w-[70%] md:w-[60%] mx-auto   md:mx-0" />
          </div>
          <div>
<Image src={Ico18} className="w-[40%] md:w-[30%] mx-auto   md:mx-0" />
          </div>
                </Slider>
      </div>
    );
  }
}