import React from 'react'
import { EventCard } from './EventCard'
import { NavbarEvents } from './NavbarEvents'

export const Events = () => {
    const events = [
        {
            "event_img": "./images/blogs/1.png",
            "event_heading": "ENVIRONMENT DAY",
            "event_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam viverra mauris, vitae bibendum velit, sit senectus venenatis, hac. Vitae malesuada ac quis id duis bibendum velit, sit senectus venenatis,"

        },
        {
            "event_img": "./images/blogs/2.png",
            "event_heading": "ENVIRONMENT DAY",
            "event_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam viverra mauris, vitae bibendum velit, sit senectus venenatis, hac. Vitae malesuada ac quis id duis bibendum velit, sit senectus venenatis,"

        },
        {
            "event_img": "./images/blogs/3.png",
            "event_heading": "ENVIRONMENT DAY",
            "event_content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam viverra mauris, vitae bibendum velit, sit senectus venenatis, hac. Vitae malesuada ac quis id duis bibendum velit, sit senectus venenatis,"

        }
    ]
    return (
        <div className='bg-[#E5E5E5] '>
            <NavbarEvents />
            <div className='text-5xl py-5 px-16 font-semibold'>
                <span className='text-[#E12129] mr-2'>Our</span>
                <span className='text-[#332965]'>Events</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 xl:gap-y-0 xl:grid-cols-3 place-content-between place-items-stretch pt-5 pb-10'>
                {events.map((event_details) => {
                    return (<EventCard key={event_details.event_img} event_details={event_details} />)
                })}
            </div>

        </div>
    )
}
