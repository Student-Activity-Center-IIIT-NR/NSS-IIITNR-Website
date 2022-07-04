import React from 'react'

export const BlogCard = ({blog_details}) => {
  return (
    <div className='flex flex-col justify-center items-center -space-y-52 lg:-space-y-28'>
      <div className='h-[400px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-2xl '>
        <img src={blog_details.blog_img} className='' alt="" />
      </div>
      <div className='bg-white rounded-2xl flex flex-col w-[280px] lg:w-[350px] lg:h-[240px] justify-center items-center py-4 px-6 drop-shadow-md space-y-2'>
        <div className='text-lg lg:text-xl font-bold uppercase'>{blog_details.blog_heading}</div>
        <div className='text-base lg:text-md font-medium'>
        {blog_details.blog_content}
        </div>
        <div className='flex flex-row justify-between w-full items-center font-medium pb-2'>
          <div>
            Read More
          </div>
          <div className='cursor-pointer'>
            <img src="./images/readmore.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
