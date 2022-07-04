import React from 'react'
import { CarouselLanding } from './CarouselLanding'

export const Landing = () => {
  return (
    <div  className='bg-[#e12129] bg-opacity-10'>
      <div className='flex flex-col-reverse md:grid md:grid-cols-2 place-content-center place-items-center pt-6 md:pt-20 pb-12 px-6 xl:px-10 gap-x-4 '>
        <div className='flex flex-col space-y-0.5'>
          <div className='text-lg  sm:text-2xl lg:text-4xl font-bold'>IIIT Naya Raipur</div>
          <div className=' text-base sm:text-xl lg:text-2xl font-semibold'>Work towards the the nation building</div>
          <div className='text-sm sm:text-md lg:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing velit morbi imperdiet ac aliquam pretium. Et dignissim in interdum sit nibh quam urna feugiat habitant. Eu cras cras laoreet sagittis. Nunc ornare tellus urna mattis non neque aliquam orci fringilla.
            Nunc lectus vitae sed turpis lobortis. Ac, sit nisl libero eget mi faucibus vulputate. Mattis massa nec neque dui, egestas elementum congue quis varius. Varius diam et amet orci a. Neque ipsum cursus vitae tempus nulla velit nulla. Tristique leo blandit praesent urna pharetra, scelerisque viverra adipiscing. Nunc pretium sed ac malesuada venenatis, urna consequat. Quis blandit cursus fermentum, lacus id amet ultrices dui curabitur. Tincidunt pulvinar blandit elit nunc ac eu viverra eget at. Aliquam erat augue consectetur mauris. Venenatis ultrices bibendum eu dictum.
          </div>
        </div>
        <div>
          <CarouselLanding />
        </div>
      </div>
    </div>
  )
}
