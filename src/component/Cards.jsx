import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className="cardContainer w-1/2 h-[50vh] ">
            <div className="card w-full rounded-xl bg-[#004D43] h-full flex relative items-center justify-center ">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='' alt="" />
                <button className=' absolute left-10 bottom-10 px-5 py-3 rounded-full border-[#CDEA68] border-2'>&copy; 2019-2022</button>
            </div>
        </div>

        <div className="cardContainer flex gap-5 w-1/2 h-[50vh]">
            <div className="card w-1/2 rounded-xl bg-[#212121] h-full flex items-center justify-center relative ">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='' alt="" />
                <button className=' absolute left-10 bottom-10 text-[10px] px-3 py-3 rounded-full border-zinc-100 border-2'>Rating 5.0 on Clutch</button>

            </div>
            <div className="card w-1/2 rounded-xl bg-[#212121] h-full flex items-center justify-center relative ">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className=' w-32' alt="" />
                <button className=' absolute left-5 text-[10px] bottom-10 px-3 py-3 rounded-full border-zinc-100 border-2'>BUSINESS BOOTCAMP ALUMINI</button>

            </div>
        </div>
      
    </div>
  )
}

export default Cards
