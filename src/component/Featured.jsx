import React, { useState } from "react";
import {motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";

const Featured = () => {
  
  const ani = [useAnimation(), useAnimation()];

  const handleHover = (index)=>{
    ani[index].start({y:0})

  }

  const handleHoverEnd = (index)=>{
    ani[index].start({y:"100%"})
  }




  return (
    <div className="w-full py-20  ">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className='text-7xl font-["Neue_Montreal] tracking-tight '>
          Featured Project
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div 
          onHoverStart={()=>handleHover(0)} 
          onHoverEnd={()=>handleHoverEnd(0)}
          className="card  w-1/2 h-[80vh] relative ">
            
            <div className="w-full h-full rounded-xl overflow-hidden">
            <h1 className=" absolute flex text-[#CDEA68] z-[555] left-full overflow-hidden  -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl leading-none tracking-tighter ">
                {"FYDE".split('').map((items,index)=><motion.span 
                initial={{y:"100%"}}
                animate={ani[0]}
                transition={{ease:[0.22,1,0.36,1] , delay:index*0.07}}
                className=" inline-block">{items}</motion.span>)}
                </h1>
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className=" w-full h-full bg-cover bg-center" alt="" />
            </div>
          </motion.div>
          <motion.div
          onHoverStart={()=>handleHover(1)} 
          onHoverEnd={()=>handleHoverEnd(1)}
          className=" card w-1/2  h-[80vh] relative">
          
            <div className="w-full h-full rounded-xl  overflow-hidden">
            <h1 className=" absolute flex text-[#CDEA68] z-[555] right-full overflow-hidden  translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl leading-none tracking-tighter ">
                {"VISE".split('').map((items,index)=><motion.span
                initial={{y:"100%"}}
                animate={ani[1]}
                transition={{ease:[0.22,1,0.36,1] , delay:index*0.07}}
                className=" inline-block">{items}</motion.span>)}
                </h1> 
                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className=" w-full h-full bg-cover bg-center" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
