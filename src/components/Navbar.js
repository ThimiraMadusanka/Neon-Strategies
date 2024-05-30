import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import Menu from "../assets/menu.png"
import Close from "../assets/close.png"
import CustomButton from './shared/CustomButton'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'

const NavBar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState(false);

    return (
        <nav className="fixed w-full z-20 top-0 start-0 bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                {/* Logo and Name */}
                <a href="/" className="flex gap-2 justify-center items-center p-4" >
                    <img
                        src={Logo}
                        alt="Logo"
                        width={110}
                        height={40}
                    />
                </a>
                {/* Desktop Navigation */}
                <div className="sm:flex hidden p-4">
                    <div className="flex gap-10 justify-center items-center">
                        <button
                            className="font-medium"
                            onClick={() => {
                                const WhyChooseUs = document.getElementById("About")
                                WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            About
                        </button>
                        <button
                            className="font-medium flex gap-2 items-center"
                            onClick={() => setSubMenu(!subMenu)}
                        >
                            Service
                            <IoIosArrowDown />
                        </button>
                        {/* Sub Menu for Desktop */}
                        {subMenu && (
                            <div class="absolute top-0 mt-12 mr-40 bg-gray-200">
                                <div class="py-1">
                                    <button
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                                        onClick={() => {
                                            const WhyChooseUs = document.getElementById("Digital_Marketing")
                                            WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                        }}    
                                    >
                                        Digital Marketing
                                    </button>
                                    <button 
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => {
                                            const WhyChooseUs = document.getElementById("Branding")
                                            WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                        }} 
                                    >
                                        Branding
                                    </button>
                                    <button 
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => {
                                            const WhyChooseUs = document.getElementById("Creative_Services")
                                            WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                        }} 
                                    >
                                        Creative Services
                                    </button>                                    
                                </div>
                            </div>
                        )}
                        <button
                            className="font-medium"
                            onClick={() => {
                                const WhyChooseUs = document.getElementById("Process")
                                WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Process
                        </button>
                        <button
                            className="font-medium"
                            onClick={() => {
                                const WhyChooseUs = document.getElementById("FAQ")
                                WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            FAQ
                        </button>
                        <button
                            className="font-medium"
                            onClick={() => {
                                const WhyChooseUs = document.getElementById("Contact_US")
                                WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Contact US
                        </button>
                    </div>
                </div>

                <CustomButton isBlue btnName="Let's Talk" size="sm" className="py-2 px-4 hidden lg:block" />

                {/* Mobile Navigation */}
                <div className="sm:hidden flex relative m-0">
                    <div className="flex">
                        <img
                            src={toggleDropdown? Close : Menu}
                            alt="menu"
                            width={20}
                            height={20}
                            onClick={() => {
                                setToggleDropdown((prev) => !prev);
                                if (mobileSubMenu) {
                                    setMobileSubMenu(false);
                                    setToggleDropdown(false)
                                }
                            }}
                            className="mr-4"
                        />

                        {toggleDropdown && (
                            <div className="absolute right-0 top-full p-5 rounded-lg bg-white w-screen flex flex-col gap-2 mt-1">
                                <button
                                    className="font-medium text-left border-b border-gray-300 py-3 ps-2 hover:bg-[#001897] hover:text-white"
                                    onClick={() => {
                                        const WhyChooseUs = document.getElementById("About")
                                        WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    About
                                </button>
                                <button
                                    className="font-medium text-left border-b border-gray-300 py-3 ps-2 hover:bg-[#001897] hover:text-white flex justify-between"
                                    onClick={() => {
                                        setMobileSubMenu(true); 
                                        setToggleDropdown(false);
                                    }}
                                >
                                    Service
                                    <IoIosArrowForward />
                                </button>
                                <button
                                    className="font-medium text-left border-b border-gray-300 py-3 ps-2 hover:bg-[#001897] hover:text-white"
                                    onClick={() => {
                                        const WhyChooseUs = document.getElementById("Process")
                                        WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Process
                                </button>
                                <button
                                    className="font-medium text-left border-b border-gray-300 py-3 ps-2 hover:bg-[#001897] hover:text-white"
                                    onClick={() => {
                                        const WhyChooseUs = document.getElementById("FAQ")
                                        WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    FAQ
                                </button>
                                <button
                                    className="font-medium text-left border-b border-gray-300 py-3 ps-2 hover:bg-[#001897] hover:text-white"
                                    onClick={() => {
                                        const WhyChooseUs = document.getElementById("Contact_US")
                                        WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Contact US
                                </button>
                            </div>
                        )}

                        {/* Sub Menu for Mobile */}
                        {mobileSubMenu && (
                            <div className="absolute right-0 top-full p-5 rounded-lg bg-white w-screen flex flex-col gap-2 mt-1">
                                <button
                                    className="font-medium text-left border-b border-gray-300 py-3 ps-2 hover:bg-[#001897] hover:text-white flex gap-4"
                                    onClick={() => {
                                        setMobileSubMenu(false); 
                                        setToggleDropdown(true);
                                    }}
                                >
                                    <IoIosArrowBack />
                                    Service
                                </button>
                                <button
                                    className="font-medium text-left border-b border-gray-300 py-3 ps-2 hover:bg-[#001897] hover:text-white"
                                    onClick={() => {
                                        const WhyChooseUs = document.getElementById("Digital_Marketing")
                                        WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Digital Marketing
                                </button>
                                <button
                                    className="font-medium text-left border-b border-gray-300 py-3 ps-2 hover:bg-[#001897] hover:text-white"
                                    onClick={() => {
                                        const WhyChooseUs = document.getElementById("Branding")
                                        WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Branding
                                </button>
                                <button
                                    className="font-medium text-left border-b border-gray-300 py-3 ps-2 hover:bg-[#001897] hover:text-white"
                                    onClick={() => {
                                        const WhyChooseUs = document.getElementById("Creative_Services")
                                        WhyChooseUs.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Creative Services
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar