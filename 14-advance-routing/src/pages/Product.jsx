import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
      
      <div className='flex items-center justify-center gap-10'>
         <Link to='/product/women' className='bg-amber-600 px-3 py-2 '>Womens collection</Link>
      <Link to='/product/men' className='bg-amber-600 px-3 py-2 '>mens collection</Link>
      <Link to='/product/kids' className='bg-amber-600 px-3 py-2 '>kids collection</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
