import React from 'react'
import { BlogCard } from './BlogCard'

export const Blogs = () => {
  const blog = [
    {
      "blog_img":"./images/blogs/1.png",
      "blog_heading":"ENVIRONMENT DAY",
      "blog_content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam viverra mauris, vitae bibendum velit, sit senectus venenatis, hac. Vitae malesuada ac quis id duis bibendum velit, sit senectus venenatis,"

    },
    {
      "blog_img":"./images/blogs/2.png",
      "blog_heading":"ENVIRONMENT DAY",
      "blog_content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam viverra mauris, vitae bibendum velit, sit senectus venenatis, hac. Vitae malesuada ac quis id duis bibendum velit, sit senectus venenatis,"

    },
    {
      "blog_img":"./images/blogs/3.png",
      "blog_heading":"ENVIRONMENT DAY",
      "blog_content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam viverra mauris, vitae bibendum velit, sit senectus venenatis, hac. Vitae malesuada ac quis id duis bibendum velit, sit senectus venenatis,"

    }
  ]
  return (
    <div className='flex flex-col bg-white px-4 lg:px-8 py-10 '>
        <div className='text-2xl lg:text-4xl font-semibold uppercase pb-8'>BLOGS</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 xl:gap-y-0 xl:grid-cols-3 place-content-between place-items-stretch'>
          {blog.map((blog_details)=>{
            return(<BlogCard key={blog_details.blog_img} blog_details={blog_details} />)
          })}
        </div>
    </div>
  )
}
