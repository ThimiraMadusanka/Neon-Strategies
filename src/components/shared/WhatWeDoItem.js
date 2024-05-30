import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from './CustomButton';

const WhatWeDoItem = ({ idName, title, description, labels, images }) => {
    // slider settings
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
        ]
      };

  return (
    <div className="py-10 border-b border-gray-200" id={idName}>
        {/* Name Section */}
        <div className="flex justify-between pb-5">
            <p className="text-xl font-extrabold">{title}</p>
            <button className="p-2 border-2 border-black hover:bg-[#001897] hover:border-white hover:text-white rounded-full hidden lg:block">
                <FaArrowRight />
            </button>
        </div>
        {/* Description and Label Section */}
        <div className="lg:grid lg:grid-cols-2">
            <div className="lg:col-span-1 pe-5">
                <p className="text-gray-600 leading-loose">{description}</p>
                <div className="flex flex-wrap items-center gap-2 pt-5">
                    {labels.map((item, i) => {
                        return (
                            <p key={i} className="text-sm text-gray-600 bg-slate-100 rounded-full py-1 px-3">{item}</p>
                        );
                    })}
                </div>
            </div>
            {/* Slider Section */}
            <div className="lg:col-span-1 pt-10 lg:pt-0">
                <Slider {...settings}>
                    {images.map((item, i) => {
                        return (
                            <div key={i} className="p-2">
                                <div className="p-5 bg-slate-200 rounded-lg">
                                    <img src={item} className="rounded-lg" alt={`Img${i}`} />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            {/* Learn More Button */}
            <div className="flex gap-4 items-center justify-center lg:justify-start pt-10 lg:py-0 bottom-0 left-0">
                <CustomButton isUnderline btnName="Learn More" icon={<FaArrowRight />} className="justify-center" />
            </div>
        </div>
    </div>
  )
}

export default WhatWeDoItem