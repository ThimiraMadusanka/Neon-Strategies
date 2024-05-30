import React from 'react'
import CustomButton from './shared/CustomButton'

const ContactUs = () => {
  return (
    <div className="mx-auto max-w-7xl pt-0 pb-8 lg:py-10 lg:px-8 text-left mt-10 mb-0 lg:mb-10" id="Contact_US">
        <div className="grid grid-rows-1 lg:grid-cols-3 lg:gap-10">
            {/* Contact Us Form */}
            <div className="lg:col-span-2 lg:px-0 px-6 lg:order-1 order-2">
                <p className="text-xl lg:text-4xl font-medium pb-10 pt-10 lg:pt-0">Nice to Meet You!</p>
                <form>
                    <div className="pb-10">
                        <div className="mb-10 border-b border-gray-200">
                            <input type="text" placeholder="Your Name" class="w-full pb-5 focus:outline-none" name="name" />
                        </div>
                        <div className="mb-10 border-b border-gray-200">
                            <input type="tel" placeholder="Your Phone Number" class="w-full pb-5 focus:outline-none" name="tel" />
                        </div>
                        <div className="mb-10 border-b border-gray-200">
                            <select name="about" id="about" className="pb-5 w-full text-gray-400 focus:outline-none focus:bg-white">
                                <option value="" disabled selected hidden>What do you know about us?</option>
                                <option value="1">Teaming up for genuine collaboration.</option>
                                <option value="2">Teaming up for genuine collaboration.</option>
                                <option value="3">Teaming up for genuine collaboration.</option>
                            </select>
                        </div>
                        <div className="mb-10">
                            <textarea type="text" placeholder="Brief your project" class="w-full pb-5 focus:outline-none" name="description" />
                        </div>
                    </div>
                    <CustomButton isBlue btnName="Submit" size="sm" />
                </form>
            </div>
            {/* Contact Us Image */}
            <div className="lg:col-span-1 lg:mt-20 lg:order-3 order-1 flex justify-center">
                <img 
                    src="https://images.pexels.com/photos/3707744/pexels-photo-3707744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="contact_us"
                    className="lg:rounded-md object-cover" 
                />
            </div>
        </div>
    </div>
  )
}

export default ContactUs