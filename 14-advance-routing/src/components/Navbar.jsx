import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  const btnclicked=()=>{
   if(props.theme=='light') props.settheme('dark')
    else props.settheme('light')
  }
  return (
    <div className='flex justify-between px-8 py-4 bg-emerald-900'>
      <h2>Bhuvana Sai</h2>
      <div className='flex gap-8'>
        {/* <a href="/">Home</a>
        <a href="/product">Product</a>
        <a href="/about">About</a> */}
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/about'>About</Link>
        <button onClick={btnclicked} className='bg-blue-950 px-3 py-1 rounded cursor-pointer active:scale-95'>Change Theme</button>
      </div>
    </div>
  )
}

export default Navbar
