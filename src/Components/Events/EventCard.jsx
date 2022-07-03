import React from 'react'

export const EventCard = ({event_details}) => {
    return (
        <div className='flex flex-col justify-center items-center -space-y-52 lg:-space-y-28'>
            <div className='h-[400px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-2xl '>
                <img src={event_details.event_img} className='' alt="" />
            </div>
            <div className='bg-white rounded-2xl flex flex-col w-[280px] lg:w-[350px] lg:h-[210px] justify-center items-center py-4 px-6 drop-shadow-md space-y-2'>
                <div className='text-xl font-bold uppercase'>{event_details.event_heading}</div>
                <div className='text-md font-medium'>
                    {event_details.event_content}
                </div>
            </div>
        </div>

    )
}
