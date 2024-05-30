import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import CustomButton from './shared/CustomButton'

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6 lg:py-10 lg:px-8 text-left mt-10">
        <p className="font-bold text-4xl leading-normal w-full lg:w-6/12 py-10 mt-0 lg:mt-10">Ignite Your Brand's Potential with Neon Strategies</p>
        <div className="grid lg:grid-cols-3">
            <p className="uppercase font-bold text-base col-span-1 pb-5 lg:pb-0">Welcome to neon strategies</p>
            <div className="col-span-2">
                <p className="text-base text-gray-700 leading-loose">
                    At Neon Strategies, we illuminate your brand with innovative and dynamic marketing solutions. 
                    Our team of experts is committed to transforming your vision into reality with strategies that 
                    deliver measurable results and sustainable growth.
                </p>
                <div className="py-5">
                    <CustomButton isUnderline btnName="Start Your Journey with Us!" icon={<FaArrowRight />} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero