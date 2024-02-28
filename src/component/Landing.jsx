import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion"
import LocomotiveScroll from 'locomotive-scroll';

const Landing = () => {

  

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full bg-zinc-900 h-screen pt-1'>
      <div className="textstructure mt-52 px-20 ">

        {["We Create", "Eye Opening" , "Presentation"].map((items, index)=>{
            return(
            <div className="masker ">
                <div className='w-fit flex items-center'>
                {index === 1 && (<motion.div 
                initial={{width:0}} 
                animate={{width:"9vw"}} 
                transition={{ease:[0.76,0,0.24,1], duration:1}}
                className='w-[9vw] rounded-md mr-[1vw] h-[5vw] bg-red-400'></motion.div>)}
                    
                    <h1 key={index} className='uppercase text-[7vw] leading-[7.5vw] font-medium tracking-tighter font-["Founders_Grotesk_Text"]'>{items}</h1>
                </div>
            </div>

            )
        })}



        
        
      </div>

      <div className='border-t-[1px] border-zinc-800 flex justify-between items-center py-5 px-20 mt-16'>
        {["For Public and Private Companies", "For the first pitch to IPO"].map((item,index)=>{
            return(
                <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
            )
        })}

        <div className="start flex items-center gap-5 ">
            <div className='px-5 py-2 border-[2px] border-zinc-400 font-light text-sm capitalize rounded-full'>Start the Project</div>
            <div className=' w-10 h-10 flex items-center justify-center  border-[1px] border-zinc-400 rounded-full '>
                <span className=' rotate-[45deg]'>
                <FaArrowUpLong/>
                    </span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Landing
