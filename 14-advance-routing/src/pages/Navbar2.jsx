import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate=useNavigate()
  const btnclicked=()=>{
    navigate('/')
  }
   const btnclicked1=()=>{
    navigate(-1)
  }
  const btnclicked2=()=>{
    navigate(+1)
  }
  return (
    <div>
      <button onClick={btnclicked} className='bg-green-500 m-2 px-4 py-2 rounded cursor-pointer active:scale-95'>Return to Home</button>
     <button onClick={btnclicked1} className='bg-green-500 m-2 px-4 py-2 rounded cursor-pointer active:scale-95'>Back</button>
     <button onClick={btnclicked2} className='bg-green-500 m-2 px-4 py-2 rounded cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2
