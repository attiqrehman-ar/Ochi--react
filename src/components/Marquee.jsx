import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full  bg-[#004D43] py-20 rounded-tr-3xl rounded-tl-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc300 flex gap-10 whitespace-nowrap overflow-hidden'>
            <h1 className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold'> We are Web Developer</h1>
            <h1 className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold'>We Build your E-commerce Store</h1>
            <h1 className='text-[15vw] font-["FounderGrotesk"] leading-none  font-semibold'>We Rank your site and make you unique</h1>

        </div>
    </div>
  )
}

export default Marquee

