import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 mb-10'>
        <h1 className='text-8xl font-[NueueMontreal] tracking-tight'>Featured Projects</h1>

      </div>
      <div className='px-20'>
      <div className="cards w-full flex gap-10">
            <div className='card w-1/2 h-[90vh] bg-red-500'  ></div>
            <div className='card w-1/2 h-[90vh] bg-red-500'  ></div>
        </div>
      </div>

    </div>
  )
}

export default Featured
