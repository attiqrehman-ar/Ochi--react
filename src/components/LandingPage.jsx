import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure font-["FounderGrotesk"] mt-52 px-20'>
        {["We Create ", "Eye-Opening ", "Projects"].map((text, index) => {
             return (
             <div key={index} className='masker'>
             <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-regular'>{text}</h1>
             </div>
             );
        })}
           
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-align py-5 px-20'>
        {["For public and private companies","From Development to Porduction Level, We Got You Covered"].map((text, index) => (
            <p className='text-md font-light tracking-tight leading-none'>{text}</p>
        ))}
         <div className='start flex items-center gap-2' >
        <div className='px-5 py-2 border-[2px] rounded-full border-zind-500 text-sm capitalize'> Start the project</div>
        <div className='w-10 h-10 flex justify-center items-center border-[2px] rounded-full border-zind-500'>
            <span className='rotate-45'>
            <FaArrowUpLong />
            </span>
          
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default LandingPage