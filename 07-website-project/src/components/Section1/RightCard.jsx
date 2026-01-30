import React from 'react'
import { MoveRight } from 'lucide-react';
const RightCard = (props) => {
  return (
    <div className='h-full flex-shrink-0 overflow-hidden relative rounded-3xl w-40 bg-red-600 '>
      <img className='h-full w-full object-cover' src={props.src} alt="" />
      <div className='p-2 py-3 flex flex-col justify-between  absolute top-0 left-0 h-full w-full'>
        <h2 className='bg-white rounded-full h-6 w-6 flex justify-center items-center font-bold'>{props.num}</h2>
        <div>
            <p className='backdrop-blur-xs text-white mb-3 text-xs leading-normal'>{props.intro}</p>
            <div className='flex  justify-between'>
                <button style={{backgroundColor:props.col}} className=' text-white  p-1 px-2 rounded-full font-semibold'>{props.tag}</button>
                <button style={{backgroundColor:props.col}}  className=' text-white  p-1  rounded-full '><MoveRight /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard
