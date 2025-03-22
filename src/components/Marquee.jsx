import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full  bg-[#004D43] py-20 rounded-tr-3xl rounded-tl-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc300 flex gap-10 whitespace-nowrap overflow-hidden'>
            <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat: Infinity, ease:"linear", duration:5}} className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold'> We Build your E-commerce Store</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat: Infinity, ease:"linear", duration:5}} className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold'>We Build your E-commerce Store</motion.h1>
            {/* <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat: Infinity, ease:"linear", duration:5}} className='text-[15vw] font-["FounderGrotesk"] leading-none  font-semibold'>We Rank your site and make you unique</motion.h1> */}

        </div>
    </div>
  )
}

export default Marquee

