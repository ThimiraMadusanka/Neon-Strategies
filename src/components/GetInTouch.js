import React from 'react'
import CustomButton from './shared/CustomButton'

const GetInTouch = () => {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6 lg:py-10 lg:px-8 text-left lg:text-center">
        <div className="flex justify-start lg:justify-center">
          <CustomButton isBlue btnName="Get In Touch" size="lg" />
        </div>
        <div className="px-0 lg:px-10 py-10">
            <p className="text-2xl lg:text-4xl lg:leading-relaxed font-medium">We'd love to hear from you! Whether you're ready to start your project or just have a question, feel free to reach out.</p>
        </div>
        <p className="text-gray-600 text-xl cursor-pointer">info@neostrategies.com</p>
    </div>
  )
}

export default GetInTouch