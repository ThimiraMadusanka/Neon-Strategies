import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import CustomButton from './shared/CustomButton'

const Banner = () => {
  return (
    <div className="relative mx-auto max-w-7xl text-left mt-10">
        <div className="banner"></div>
        {/* Banner Button */}
        <div className="absolute inset-0 flex items-end justify-center lg:justify-end lg:pr-10 pb-10">
            <CustomButton 
              isWhite 
              btnName="Contact Us Today" 
              icon={<FaArrowRight />} 
              onClick={() => {
                // scroll to contact us section
                const WhyChooseUs = document.getElementById("Contact_US")
                WhyChooseUs.scrollIntoView({behavior: 'smooth'});
              }}
            />
        </div>
    </div>
  )
}

export default Banner