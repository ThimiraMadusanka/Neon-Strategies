import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
        <div className="mx-auto max-w-7xl py-8 px-6 lg:py-10 lg:px-8 text-center">
            <div className="lg:grid lg:grid-cols-4 lg:gap-4">
                {/* Address Section */}
                <div className="lg:col-span-1 text-left">
                    <p className="uppercase font-bold text-base pb-5">Address</p>
                    <p className="text-gray-600 pb-2">Neon Strategies Ltd.</p> 
                    <p className="text-gray-600 pb-2">123 Marketing Street</p>
                    <p className="text-gray-600 pb-2">London, W1A 1AA</p>
                    <p className="text-gray-600 pb-2">United Kingdom</p>
                </div>
                {/* Operning Time Section */}
                <div className="lg:col-span-1">
                    <p className="text-gray-600 text-left py-10">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
                <div className="lg:col-span-1"></div>
                {/* Social Media Icon Section */}
                <div className="lg:col-span-1 text-left">
                    <p className="uppercase font-bold text-base pb-5">Follow Us</p>
                    <div className="flex justify-between gap-0 md:justify-normal md:gap-4">
                        <div className="border-2 cursor-pointer border-gray-300 rounded-full p-3 hover:bg-[#001897]">
                            <FaLinkedinIn size={20} className="text-gray-600 hover:text-white" />
                        </div>
                        <div className="border-2 cursor-pointer border-gray-300 rounded-full p-3 hover:bg-[#001897]">
                            <FaFacebookF size={20} className="text-gray-600 hover:text-white" />
                        </div>
                        <div className="border-2 cursor-pointer border-gray-300 rounded-full p-3 hover:bg-[#001897]">
                            <FaXTwitter size={20} className="text-gray-600 hover:text-white" />
                        </div>
                        <div className="border-2 cursor-pointer border-gray-300 rounded-full p-3 hover:bg-[#001897]">
                            <FaInstagram size={20} className="text-gray-600 hover:text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Copy Right Section */}
        <div className="mx-auto flex justify-center">
            <div className="border-t w-10/12 border-gray-200 py-8">
                <div className="md:flex md:justify-between">
                    <p className="text-gray-600 text-sm">© 2024 Neon Strategies. All rights reserved.</p>
                    <p className="text-gray-600 text-sm py-5 md:py-0"><span className="underline cursor-pointer">Privacy Policy</span> | <span className="underline cursor-pointer">Terms & Conditions</span></p>
                    <p className="text-gray-600 text-sm">Website by <span className="underline cursor-pointer">Smashy Design</span></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer