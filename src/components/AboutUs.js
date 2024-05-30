import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import CustomButton from './shared/CustomButton'

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6 lg:py-10 lg:px-8 text-left mt-10" id="About">
        <div className="grid lg:grid-cols-3">
            <p className="uppercase font-bold text-sm lg:text-base col-span-1">About Us</p>
            <div className="col-span-2">
                <p className="text-xl lg:text-4xl font-medium">Our Mission</p>
                <p className="text-base text-gray-700 leading-loose py-10">To light up your brand with cutting-edge marketing strategies that drive growth and enhance brand visibility.</p>
                <p className="text-base text-gray-700 leading-loose pb-10">
                    Neon Strategies is a full-service marketing agency dedicated to energizing your brand through creative 
                    and effective marketing solutions. Founded in 2017, we have been at the forefront of marketing innovation, 
                    helping businesses of all sizes achieve their goals.
                </p>
                <CustomButton 
                  isBlue 
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
    </div>
  )
}

export default AboutUs