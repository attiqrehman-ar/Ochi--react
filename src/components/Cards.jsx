import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex gap-5 pb-10 items-center px-20'>
       <div className=' cardcontainer w-1/2 h-[50vh]'>
       <div className='card rounded-lg w-full h-full  bg-[#004D43]'>
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
       </div>
       </div>
       <div className=' cardcontainer w-1/2 flex gap-5 h-[50vh]' >
       <div className='w-full rounded-lg h-full  bg-[#192826]'></div> 
       <div className='w-full rounded-lg h-full  bg-[#192826]'></div> 
       </div>
    </div>
  )
}

export default Cards
