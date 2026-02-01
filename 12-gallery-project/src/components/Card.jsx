import React from 'react'

const Card = (props) => {
  return (
    <div>
       <a href={props.ele.url} target='_blank'>
          <div className='h-30 w-33 bg-amber-50'>
            <img  className='h-full object-cover' src={props.ele.download_url} alt="" />
          </div>
          <h3 className='text-center'>{props.ele.author}</h3>
        </a>
    </div>
  )
}

export default Card
