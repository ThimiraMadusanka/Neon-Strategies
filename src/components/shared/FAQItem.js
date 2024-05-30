import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const FAQItem = ({ question, answer }) => {
  return (
    <div className="py-10 w-10/12 border-t border-gray-200">
        <details className="group">
          {/* FAQ Accordian Name */}
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span className="font-bold">{question}</span>
                <span className="transition group-open:rotate-180">
                    <IoIosArrowDown size={25} />      
                </span>
            </summary>
            {/* FAQ Accordian Description */}
            <p className="group-open:animate-fadeIn mt-3 text-gray-600 leading-relaxed pt-5">{answer}</p>
        </details>
    </div>
  )
}

export default FAQItem