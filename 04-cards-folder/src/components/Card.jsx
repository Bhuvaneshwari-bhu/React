import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <div className='top'>
          <img src={props.src} alt="" />
          <button>Save <Bookmark size={18} /></button>
        </div>
        <div className='center'>
            <h3>{props.comp} <span>{props.days} days ago</span></h3>
            <h2>{props.role}</h2>
            <div className="tag">
              <h4>{props.type}</h4>
              <h4>{props.level}</h4>
            </div>
        </div>
        <div className="bottom">
          <div>
              <h3>{props.sal}</h3>
              <p>{props.loc}</p> 
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
