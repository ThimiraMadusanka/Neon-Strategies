import React from 'react'
import ProcessCard from './shared/ProcessCard'
import { ProcessList } from '../data/ProcessList'
import { FaArrowRight } from 'react-icons/fa'
import CustomButton from './shared/CustomButton'

const Process = () => {
  return (
    <div className="mx-auto max-w-7xl pt-8 px-6 lg:py-10 lg:px-8 text-left mb-0 lg:mb-10 mt-10 bg-[#F1F1F1]" id="Process">
        {/* Title Section */}
        <div className="grid lg:grid-cols-3 py-5">
            <p className="uppercase font-bold text-sm lg:text-base col-span-1">Our process at neon strategies</p>
            <div className="col-span-2 lg:w-9/12">
                <p className="text-xl lg:text-4xl">
                    Our process at Neon Strategies is designed to be thorough, flexible, and client-focused
                </p>
            </div>
        </div>
        {/* Card Section */}
        <div className="grid lg:grid-cols-3 gap-5 py-5 lg:py-20">
            <div className="col-span-1 p-10 ps-0 pt-0">
                <p className="font-bold text-lg pb-10">We ensures your marketing remains effective and relevant.</p>
                <p className="text-gray-600 leading-loose text-sm">
                    At Neon Strategies, we believe that a well-defined process is key to delivering 
                    exceptional results. Our approach is collaborative, transparent, and tailored to 
                    meet the unique needs of each client. Here's a step-by-step overview of how we work:
                </p>
            </div>
            {ProcessList.map((item, i) => {
                return (
                    <ProcessCard key={i} icon={item.icon} title={item.title} description={item.description} />
                );
            })}
            <div className="col-span-1 flex items-center justify-center py-10 lg:py-0">
                <CustomButton 
                    isTransparent 
                    btnName="Contact Us to Get Started" 
                    icon={<FaArrowRight />} 
                    onClick={() => {
                        // scroll to contact us section
                        const WhyChooseUs = document.getElementById("Contact_US")
                        WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Process