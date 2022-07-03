import React from 'react'
import { SocialMedia } from './SocialMedia'

export const Footer = () => {
    return (
        <div className='flex flex-col bg-[#E5E5E5] '>
            <div className='flex flex-row pt-10 pb-10 sm:px-16 justify-center sm:justify-between items-start'>
                <div className='hidden lg:flex lg:flex-col text-4xl space-y-3'>
                    <div className='flex flex-col '>
                        <div className='text-[#332965] font-bold'>Join us</div>
                        <div className='text-[#000] font-bold'>at</div>
                        <div className='text-[#E12129] font-bold'>IIIT Naya Raipur</div>
                    </div>

                    <div>
                        <iframe style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14887.250758493492!2d81.76775380000001!3d21.1200326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1656230571563!5m2!1sen!2sin" width="341" height="341" title="My Map b" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 sm:space-y-20'>
                    <div className='text-4xl'>Contact Us</div>

                    <div className='flex flex-col space-y-6'>

                        <div className='flex flex-row items-center space-x-2'>
                            <div>
                                <svg width="18" height="24" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.875C24 21.3333 13 28.5833 13 28.5833C13 28.5833 2 21.3333 2 12.875C2 9.99077 3.15893 7.22467 5.22183 5.18521C7.28473 3.14576 10.0826 2 13 2C15.9174 2 18.7153 3.14576 20.7782 5.18521C22.8411 7.22467 24 9.99077 24 12.875Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13 17C15.2091 17 17 15.2091 17 13C17 10.7909 15.2091 9 13 9C10.7909 9 9 10.7909 9 13C9 15.2091 10.7909 17 13 17Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='text-xl'>IIIT Naya Raipur</div>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <div>
                                <svg width="18" height="24" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.4 1H22.6C23.92 1 25 2.06875 25 3.375V17.625C25 18.9313 23.92 20 22.6 20H3.4C2.08 20 1 18.9313 1 17.625V3.375C1 2.06875 2.08 1 3.4 1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25 3L13 12L1 3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <a className='text-xl cursor-pointer' href="mailto:nss@iiitnr.edu.in">nss@iiitnr.edu.in</a>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <div>
                                <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.9201V19.9201C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1469 21.5902 20.9046 21.7336 20.6408 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.9201C16.7428 21.5857 13.787 20.5342 11.19 18.8501C8.77383 17.3148 6.72534 15.2663 5.19 12.8501C3.49998 10.2413 2.44824 7.27109 2.12 4.1801C2.09501 3.90356 2.12788 3.62486 2.2165 3.36172C2.30513 3.09859 2.44757 2.85679 2.63477 2.65172C2.82196 2.44665 3.04981 2.28281 3.30379 2.17062C3.55778 2.05843 3.83234 2.00036 4.11 2.0001H7.11C7.59531 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04208 3.23954 9.11 3.7201C9.23662 4.68016 9.47145 5.62282 9.81 6.5301C9.94455 6.88802 9.97366 7.27701 9.89391 7.65098C9.81415 8.02494 9.62886 8.36821 9.36 8.6401L8.09 9.9101C9.51356 12.4136 11.5865 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9752 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5286 19.3199 14.7635 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.9201Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <a className='text-xl cursor-pointer' href="tel:99999999">+91 9999999999</a>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex lg:flex-col space-y-2 sm:space-y-20'>
                    <div className='text-4xl'>Fill out to reach us</div>

                    <div className='flex flex-col space-y-2 '>
                        <div>
                            <input type="text" placeholder='Full name' className='w-full p-3 rounded-lg border border-black' />
                        </div>
                        <div>
                            <input type="text" placeholder='Email' className='w-full p-3 rounded-lg border border-black' />
                        </div>
                        <div>
                            <textarea name="" id="" className='w-full p-3 rounded-lg border border-black' rows="5" placeholder='Your Message' ></textarea>
                        </div>
                        <div className='bg-black text-white py-2 px-12 flex justify-center items-center rounded-lg w-fit -bottom-[20%] right-0'>
                            Submit
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden flex flex-col w-[100%] mx-auto justify-center items-center  text-4xl space-y-3'>
                <div className='flex flex-col '>
                    <div className='text-[#332965] font-bold'>Join us</div>
                    <div className='text-[#000] font-bold'>at</div>
                    <div className='text-[#E12129] font-bold'>IIIT Naya Raipur</div>
                </div>

                <div>
                    <iframe style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14887.250758493492!2d81.76775380000001!3d21.1200326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1656230571563!5m2!1sen!2sin" width="341" height="341" title="My Map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>



            {/* Social Media */}
            <SocialMedia />
        </div>
    )
}
