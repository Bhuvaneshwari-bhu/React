import React from 'react'

import Hero from './Hero';
import Arrow from './Arrow';
const LeftText = () => {
  return (
    <div className='h-full w-1/4 flex flex-col justify-between '>
      <Hero/>
      <Arrow/>
    </div>
  )
}

export default LeftText
