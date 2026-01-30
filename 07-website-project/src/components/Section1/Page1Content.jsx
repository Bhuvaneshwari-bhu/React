import React from 'react'
import LeftText from './LeftText'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className=' px-10 h-[80vh]  flex items-center gap-10 '>
      <LeftText/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
