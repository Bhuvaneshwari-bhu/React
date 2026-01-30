import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
   
  return (
    <div id='right' className='h-full w-2/3 p-2 flex flex-nowrap overflow-x-auto gap-8 bg-gray-300 rounded-2xl'>
      {props.users.map(function(ele,idx){
        return <RightCard src={ele.src} tag={ele.tag} intro={ele.intro} num={idx+1} col={ele.color}/>
      })}
    </div>
  )
}

export default RightContent
