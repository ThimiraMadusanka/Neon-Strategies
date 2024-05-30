import React from 'react'

const CustomButton = ({ icon, btnName, isBlue, isTransparent, isUnderline, isWhite, size, className, onClick }) => {
  return (
    <button 
        className={`
            ${isBlue && "bg-[#001897] text-white hover:bg-[#000F5C] justify-center"} 
            ${isUnderline && "underline"} 
            ${isTransparent && "bg-transparent justify-center border-2 border-black text-black hover:bg-[#001897] hover:border-white hover:text-white"} 
            ${isWhite && "bg-transparent justify-center border-2 border-white text-white hover:bg-[#001897] hover:border-transparent"}
            ${(!isUnderline && size !== "sm" )&& "lg:py-4 lg:px-8 px-4 py-2"}
            ${ size === "lg" && "lg:text-xl w-fit"}
            ${ size === "sm" && "py-2 px-10"}
            ${className}
            rounded-full text-base mr-2 flex gap-4 items-center w-full lg:w-auto
        `}
        onClick={() => onClick()}
    >
        <span>{btnName}</span>
        {icon}
    </button>
  )
}

export default CustomButton