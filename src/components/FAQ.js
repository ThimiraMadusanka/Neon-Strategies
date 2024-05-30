import React from 'react'
import FAQItem from './shared/FAQItem'
import { FAQList } from '../data/FAQList'

const FAQ = () => {
  return (
    <div className="mx-auto max-w-7xl py-8 px-6 lg:py-10 lg:px-8 text-left my-10" id="FAQ">
        {/* Title Section */}
        <div className="grid lg:grid-cols-3">
            <p className="uppercase font-bold text-sm lg:text-base col-span-1">FAQ</p>
            <div className="col-span-2">
                <p className="text-xl lg:text-4xl font-medium">Find Your Answers Here</p>
                <p className="text-base text-gray-700 leading-loose py-10">
                    Our services at Neon Strategies are tailored to meet the unique needs of your business, 
                    ensuring that your brand not only stands out but also connects deeply with your audience.
                </p>
            </div>
        </div>
        {/* Accordian Section */}
        <div className="flex flex-col items-center">
            {FAQList.map((item, i) => {
                return (
                    <FAQItem key={i} question={item.question} answer={item.answer} />
                );
            })}
            <div className="border-b border-gray-200 w-10/12" />
        </div>
    </div>
  )
}

export default FAQ