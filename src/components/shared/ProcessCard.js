import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import CustomButton from './CustomButton'

const ProcessCard = ({ icon, title, description }) => {
  return (
    <div className="col-span-1 rounded-lg bg-white p-10 cursor-pointer">
        <img src={icon} alt="logo" className="pb-5" width={70} height={70} />
        <p className="text-lg font-semibold pb-3">{title}</p>
        <p className="text-gray-600 leading-loose text-sm">{description}</p> 
        <div className="py-5">
          <CustomButton isUnderline btnName="Read More" icon={<FaArrowRight />} className="justify-start" />
        </div>
    </div>
  )
}

export default ProcessCard
