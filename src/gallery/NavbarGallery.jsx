import React from 'react'
import { useState } from 'react'
import ReactTransitionCollapse from 'react-transition-collapse'
import { Link } from 'react-router-dom'
export const NavbarGallery = () => {
    const [showMobileMenu, setshowMobileMenu] = useState(false)
    const [expanded, setExpanded] = useState(false)
    return (
        <div className='bg-white'>
            <div className='flex flex-row justify-between items-center top-0 w-[100%] py-5 px-2 sm:px-6 lg:px-16'>
                <div className='flex flex-row space-x-1 items-center '>
                    <div className='flex flex-row space-x-0.5 items-center'>
                        <img src="./images/nss.png" className='aspect-auto h-[80px] w-[80px] ' alt="NSS Logo" />
                        <div className='text-5xl font-normal'>NSS</div>
                    </div>
                    <div className='flex flex-col text-2xl mt-2  font-normal -space-y-3'>
                        <div>IIIT</div>
                        <div>Naya Raipur</div>
                    </div>
                </div>
                <div className='hidden md:flex md:flex-row font-semibold items-center space-x-8 lg:space-x-16 text-xl'>
                    <Link to="/" className='cursor-pointer'>Home</Link>
                    <Link to="/gallery" className='cursor-pointer'>Gallery</Link>
                    <Link to="/team" className='cursor-pointer'>Team</Link>
                    <Link to="/events" className='cursor-pointer'>Events</Link>
                </div>
                <div className='md:hidden py-2 px-3 border border-black rounded-xl cursor-pointer' onClick={() => { setshowMobileMenu(!showMobileMenu); setExpanded(expanded => !expanded) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>

            </div>
            {/* Mobile Menu */}
            <div >
                <ReactTransitionCollapse expanded={expanded} duration={200} className={`${showMobileMenu ? 'py-4 block ' : 'hidden'}`}>
                    <div className='flex flex-col font-semibold items-start text-xl px-6  space-y-2'>
                        <Link to="/" className='cursor-pointer'>Home</Link>
                        <Link to="/gallery" className='cursor-pointer'>Gallery</Link>
                        <Link to="/team" className='cursor-pointer'>Team</Link>
                        <Link to="/events" className='cursor-pointer'>Events</Link>
                    </div>

                </ReactTransitionCollapse>
            </div>
        </div>
    )
}
