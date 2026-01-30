import React from 'react'

const Card = (props) => {
  return (
    <div>
       <div className='card'>
        <h1>{props.user}</h1>
        <img src={props.img} alt="" />
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta voluptas quidem ut delectus error ad a veniam expedita laborum inventore reprehenderit placeat, repellat quo? Fugit rerum veritatis nihil iste.</p> */}
        <p>Age: {props.age}</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
