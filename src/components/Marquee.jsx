import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full bg-[#004D43] py-20 rounded-tr-3xl rounded-tl-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
            <motion.div 
                className='flex gap-20 pr-20'
                initial={{ x: "0" }} 
                animate={{ x: "-33.33%" }}
                transition={{ 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: 15
                }}
            >
                <h1 className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold text-white'>We are web developers</h1>
                <h1 className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold text-white'>We Build your E-commerce Store</h1>
                <h1 className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold text-white'>We Create Digital Experiences</h1>
            </motion.div>
            <motion.div 
                className='flex gap-20 pr-20'
                initial={{ x: "0" }} 
                animate={{ x: "-33.33%" }}
                transition={{ 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: 15
                }}
            >
                <h1 className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold text-white'>We are web developers</h1>
                <h1 className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold text-white'>We Build your E-commerce Store</h1>
                <h1 className='text-[15vw] font-["FounderGrotesk"] leading-none font-semibold text-white'>We Create Digital Experiences</h1>
            </motion.div>
        </div>
    </div>
  )
}

export default Marquee

