import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 mb-10'>
        <h1 className='text-8xl font-[NueueMontreal] tracking-tight'>Featured Projects</h1>

      </div>
      <div className='px-20'>
      <div className="cards w-full flex gap-10">
       
            <div className='cardcontainer w-1/2 h-[75vh] relative  rounded-lg  '>
            <h1 className='absolute text-[#CDEA68] z-[9] left-full font-[NueueMontreal] -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl leading-none tracking-tighter'> 
           
            {"Website".split("").map((item, index)=>(<span>{item}</span>))}
            </h1>
            <div className=' card w-full h-full overflow-hidden'>
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
            </div>
            </div>
            <div className='cardcontainer w-1/2 h-[75vh] relative rounded-lg  '>
            <h1 className='absolute text-[#CDEA68] z-[9] right-full font-[NueueMontreal] translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl leading-none tracking-tighter'> 
            {"Ecommerce".split("").map((item, index)=>(<span>{item}</span>))}</h1>

            <div className=' card w-full h-full overflow-hidden'>
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
            </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Featured
