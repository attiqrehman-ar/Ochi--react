import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-5 pb-10 items-center px-20'>
       <div className=' cardcontainer w-1/2 h-[50vh]'>
       <div className='relative card rounded-lg w-full h-full  bg-[#004D43] flex items-center justify-center'>
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
       <button className='absolute left-10 bottom-10 px-5 py-1 border-1 rounded-full'> &copy; 2024-present</button>
       </div>
       </div>
       <div className=' cardcontainer w-1/2 flex gap-5 h-[50vh]' >
       <div className=' card relative flex items-center justify-center w-full rounded-lg h-full  bg-[#192826]'>
       <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
       <button className='absolute left-10 bottom-10 px-5 py-1 border-1 rounded-full'> &copy; 2024-present</button></div> 
       <div className=' card relative  flex items-center justify-center w-full rounded-lg h-full  bg-[#192826]'>
       <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
       <button className='absolute left-10 bottom-10 px-5 py-1 border-1 rounded-full'> &copy; 2024-present</button></div> 
       </div>
    </div>
  )
}

export default Cards
