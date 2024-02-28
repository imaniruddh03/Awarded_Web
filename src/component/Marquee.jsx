import React from 'react';
import {motion} from 'framer-motion'


const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full  py-20 rounded-tl-3xl rounded-tr-3xl z-[666] bg-[#004D43] '>
        <div className='text border-t-2 border-b-2 border-zinc-100 overflow-hidden   flex  whitespace-nowrap'>
            <motion.h1 
            initial={{x:"0"}}
            animate={{x:"-100%"}}
            transition={{repeat:Infinity,ease:"linear", duration:5}}
               className='text-[14vw] font-bold leading-none uppercase pt-10 mb-10 pr-10  '> Ultimate Design </motion.h1>
            <motion.h1 
            initial={{x:"0"}}
            animate={{x:"-100%"}}
            transition={{repeat:Infinity,ease:"linear", duration:5}}
              className='text-[14vw] font-bold leading-none uppercase pt-10 mb-10 pr-10 '> Ultimate Design </motion.h1>

        </div>
      
    </div>
  )
}

export default Marquee
