import React from 'react'

const About = () => {
  return (
    <div className=' w-full py-20 bg-[#CDEA68] p-20 rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montral"] text-6xl leading-[4.5vw] tracking-tight  '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

        <div className='w-full  border-t-[1px] flex gap-5 mt-20 border-[#a1b562]'>
            <div className=' w-1/2 pt-10 '>
                <h1 className='text-7xl'>Our approach :</h1>
                <button className=' flex uppercase items-center gap-10 px-10 mt-10  py-6 bg-zinc-900 text-zinc-100 rounded-full'>Read More 
                <div className='w-2 h-2 bg-zinc-100 rounded-full '></div></button>
            </div>

            <div className=' w-1/2 h-[60vh] rounded-3xl bg-red-400 mt-10'>

            </div>
        </div>

      
    </div>
  )
}

export default About
