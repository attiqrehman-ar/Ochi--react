import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
  const [isHovering1, setHovering1] = useState(false);
  const [isHovering2, setHovering2] = useState(false);

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 mb-10'>
        <h1 className='text-8xl font-[NueueMontreal] tracking-tight'>Featured Projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-10">
          <motion.div 
            onMouseEnter={() => setHovering1(true)} 
            onMouseLeave={() => setHovering1(false)} 
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <div className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-[9] font-[NueueMontreal]'> 
              <div className='flex items-center overflow-hidden'>
                {
                  "Web Dev".split("").map((item, index) => (
                    <motion.span 
                      key={index}
                      initial={{ y: "100%" }}
                      animate={{ y: isHovering1 ? "0%" : "100%" }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.33, 1, 0.68, 1],
                        delay: index * 0.03 
                      }}
                      className='inline-block text-8xl text-[#CDEA68]'
                    >
                      {item}
                    </motion.span>
                  ))
                }
              </div>
            </div>
            <motion.div 
              className='card w-full h-full rounded-xl overflow-hidden'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" 
                alt="FYDE project" 
              />
            </motion.div>
          </motion.div>

          <motion.div 
            onMouseEnter={() => setHovering2(true)} 
            onMouseLeave={() => setHovering2(false)} 
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <div className='absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-[9] font-[NueueMontreal]'> 
              <div className='flex items-center overflow-hidden'>
                {
                  "E-commerce".split("").map((item, index) => (
                    <motion.span 
                      key={index}
                      initial={{ y: "100%" }}
                      animate={{ y: isHovering2 ? "0%" : "100%" }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.33, 1, 0.68, 1],
                        delay: index * 0.03 
                      }}
                      className='inline-block text-8xl text-[#CDEA68]'
                    >
                      {item}
                    </motion.span>
                  ))
                }
              </div>
            </div>
            <motion.div 
              className='card w-full h-full rounded-xl overflow-hidden'
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" 
                alt="VISE project" 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured
